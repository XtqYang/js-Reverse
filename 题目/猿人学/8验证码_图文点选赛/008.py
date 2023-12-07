# -*- coding: utf-8 -*-
from alibabacloud_ocr_api20210707.models import RecognizeAdvancedRequest
from alibabacloud_ocr_api20210707.client import Client as OcrClient
from alibabacloud_tea_util.models import RuntimeOptions
from alibabacloud_tea_openapi.models import Config
from paddleocr import PaddleOCR
from bs4 import BeautifulSoup
from io import BytesIO
import numpy as np
import requests
import logging
import hashlib
import base64
import uuid
import time
import json
import cv2
import re


# 页面请求器，用于获取页面和验证码
class PageRequester:
    @staticmethod
    def get_page(i):
        """获取指定页码的页面内容"""
        params = {'page': i}
        requests.get('https://match.yuanrenxue.cn/api/match/8', params=params)

    @staticmethod
    def get_verify_code():
        """获取验证码页面内容"""
        url = 'https://match.yuanrenxue.cn/api/match/8_verify'
        response = requests.get(url)
        return response.text


# 图像列表获取器，用于解析页面内容并获取图片的Base64编码
class ImageListParser:
    @staticmethod
    def list_img(i):
        """解析页面内容并提取图片的Base64编码和文本"""
        p_zn = []
        p_img = []
        PageRequester.get_page(i)
        verify_html = PageRequester.get_verify_code()
        soup = BeautifulSoup(verify_html, 'html.parser')
        script_tags = soup.find_all('p')
        for p_tag in script_tags:
            p_zn.append(p_tag.text)
        script_tags2 = soup.find_all('img')
        for src_value in script_tags2:
            src_value = src_value.get('src').lstrip('\\').replace('\\', '', 1)
            src_value = src_value.strip('"')
            src_value = re.match(r"data:image/jpeg;base64,(.*)", src_value).group(1)
            p_img.append(src_value)
        p_zn = [s.encode().decode('unicode-escape') for s in p_zn]
        # 返回文字和图片编码
        return p_zn, p_img


# 预处理函数
def preprocess_image(image_base64):
    # 将Base64编码的数据解码为图像
    image_data = base64.b64decode(image_base64)
    image_array = np.frombuffer(image_data, np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

    h, w = image.shape[:2]  # 获取图像的高度和宽度
    # 去掉黑椒点的图像
    image[np.all(image == [0, 0, 0], axis=-1)] = (255, 255, 255)
    # 移除背景噪点
    colors, counts = np.unique(image.reshape(-1, 3), axis=0, return_counts=True)
    info_dict = {counts[i]: colors[i].tolist() for i, v in enumerate(counts) if 500 < v < 2200}
    remove_background_rgbs = info_dict.values()
    mask = np.zeros((h, w, 3), np.uint8) + 255
    for rgb in remove_background_rgbs:
        mask[np.all(image == rgb, axis=-1)] = image[np.all(image == rgb, axis=-1)]
    image = mask
    # 去掉线条,全部像素黑白化
    line_list = []
    for y in range(h):
        for x in range(w):
            tmp = image[x, y].tolist()
            if tmp != [0, 0, 0]:
                if 110 < y < 120 or 210 < y < 220:
                    line_list.append(tmp)
                if 100 < x < 110 or 200 < x < 210:
                    line_list.append(tmp)
    remove_line_rgbs = np.unique(np.array(line_list).reshape(-1, 3), axis=0)
    for rgb in remove_line_rgbs:
        image[np.all(image == rgb, axis=-1)] = [255, 255, 255]
    image[np.any(image != [255, 255, 255], axis=-1)] = [0, 0, 0]
    # 腐蚀
    kernel = np.ones((2, 3), 'uint8')
    image = cv2.erode(image, kernel, iterations=2)

    # 将预处理后的图像转换为Base64编码
    retval, buffer = cv2.imencode('.png', image)
    base64_str = base64.b64encode(buffer).decode('utf-8')

    return base64_str


# 百度_PaddleOCR
def paddleocr(image_base64):
    # 配置日志以避免冗余输出
    logging.disable(logging.CRITICAL)
    # 创建OCR实例，设置使用角度分类器和中文语言
    ocr = PaddleOCR(use_angle_cls=True, lang='ch', det=True, rec=True, det_db_unclip_ratio=1.6, det_db_thresh=0.3)
    # 从Base64编码的数据中读取图片
    image_data = base64.b64decode(image_base64)
    image_array = np.frombuffer(image_data, np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)
    # 直接传递图像数组到OCR方法
    results = ocr.ocr(image, cls=True)  # 识别图片中的文字
    texts = [line[1][0] for line in results[0]]  # 提取文本内容
    # 分离每个字符
    separated_texts = [char for text in texts for char in text]
    return separated_texts


# 有道文字识别OCR
def youdao_ocr(base64_image):
    YOUDAO_URL = 'https://openapi.youdao.com/ocrapi'
    APP_KEY = '172265739939619d'
    APP_SECRET = 'rO0yMZtoYUVACaOdSDq0dy3gyBsCxwuG'

    def truncate(q):
        """如果需要，截断查询字符串"""
        if q is None:
            return None
        size = len(q)
        return q if size <= 20 else q[0:10] + str(size) + q[size - 10:size]

    def encrypt(signStr):
        """使用SHA-256加密方法加密签名字符串"""
        hash_algorithm = hashlib.sha256()
        hash_algorithm.update(signStr.encode('utf-8'))
        return hash_algorithm.hexdigest()

    def do_request(data):
        """发送POST请求到有道OCR API"""
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        return requests.post(YOUDAO_URL, data=data, headers=headers)

    # 构建请求数据
    data = {
        'detectType': '10012',
        'imageType': '1',
        'langType': 'zh-CHT',
        'img': base64_image,
        'docType': 'json',
        'signType': 'v3'
    }

    # 获取当前时间戳
    curtime = str(int(time.time()))
    data['curtime'] = curtime
    # 生成随机的salt值
    salt = str(uuid.uuid1())
    # 拼接签名字符串
    signStr = APP_KEY + truncate(base64_image) + salt + curtime + APP_SECRET
    # 生成签名
    sign = encrypt(signStr)

    # 添加其他请求参数
    data['appKey'] = APP_KEY
    data['salt'] = salt
    data['sign'] = sign

    # 发送请求并获取响应
    response = do_request(data)
    result = response.json()  # 直接解析响应的JSON内容

    # 解析OCR结果
    ocr_results = []
    lines_data = result['Result']['regions'][0]['lines']
    for line in lines_data:
        ocr_results.append(line["text"])
    new_list = [character for item in ocr_results for character in item]
    # 返回OCR识别结果列表
    return new_list


# 阿里图片识别OCR

def ali_ocr(image_content):
    image_content = base64.b64decode(image_content)

    # Ensure your AccessKey ID and AccessKey Secret are kept secure.
    access_key_id = "LTAI5tMhtkPAXSieq35vCoFB"
    access_key_secret = "lvMvOch4AAcMVKl7Qo51TWxBctqFw5"

    def create_client(access_key_id, access_key_secret):
        config = Config(
            access_key_id=access_key_id,
            access_key_secret=access_key_secret
        )
        config.endpoint = 'ocr-api.cn-hangzhou.aliyuncs.com'  # The API server address
        return OcrClient(config)

    def recognize_image(image_content, access_key_id, access_key_secret):
        client = create_client(access_key_id, access_key_secret)
        request = RecognizeAdvancedRequest(
            body=BytesIO(image_content),  # 使用 BytesIO 实例作为请求体
            output_char_info=True,
            need_sort_page=True
        )
        runtime = RuntimeOptions()
        try:
            response = client.recognize_advanced_with_options(request, runtime)
            return response
        except Exception as error:
            print(error)

    response = recognize_image(image_content, access_key_id, access_key_secret)
    if response:
        body_map = response.to_map()
        data_json_str = body_map.get('body', {}).get('Data')
        data_dict = json.loads(data_json_str) if data_json_str else {}
        content_str = data_dict.get("content", "")
        # 去除字符串中的空格
        no_space_str = content_str.replace(" ", "")
        # 将字符串转换为字符列表
        characters = list(no_space_str)
        return characters


def main():
    p_zn, p_img = ImageListParser.list_img(2)
    image_base64 = p_img[0]
    image_base64 = preprocess_image(image_base64)
    print(image_base64)
    Paddle = paddleocr(image_base64)
    print(f"百度_PaddleOCR识别到：{Paddle}")
    youdao = youdao_ocr(image_base64)
    print(f"       有道OCR识别到：{youdao}")
    ali = ali_ocr(image_base64)
    print(f"       阿里OCR识别到：{ali}")
    print(f"实际值{p_zn}")
    # 映射
    obj = {
        0: 155,
        1: 165,
        2: 175,
        3: 455,
        4: 465,
        5: 475,
        6: 725,
        7: 735,
    }
    # 找到 p_zn 中每个字符在 Paddle 中的索引，并映射到对应的值
    mapped_values = [obj[Paddle.index(char)] if char in Paddle else 0 for char in p_zn]
    print(f"结果{mapped_values}")


if __name__ == "__main__":
    # 执行主函数
    main()
