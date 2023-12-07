import base64
import hashlib
import time
import uuid

import requests


def youdao_OCR(base64_image):
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
    print(f"有道api识别到：{new_list}")
    # 返回OCR识别结果列表
    return new_list


if __name__ == '__main__':
    with open('image2.png', 'rb') as image_file:
        base64_image = base64.b64encode(image_file.read()).decode('utf-8')
        results = youdao_OCR(base64_image)
        print(results)
