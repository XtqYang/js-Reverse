import cv2
import numpy as np
import base64


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


# 图片转编码
def image_to_base64(pash):
    with open(pash, 'rb') as image_file:
        # 读取文件内容
        image_data = image_file.read()
        # 对数据进行base64编码
        base64_encoded_data = base64.b64encode(image_data)
        # # 将编码数据转换为字符串
        # base64_message = base64_encoded_data.decode('utf-8')
    return base64_encoded_data


# 编码转图片
def base64_to_image(base64_str, image_path):
    # 将base64字符串转换为字节
    image_data = base64.b64decode(base64_str)
    # 打开文件用于写入
    with open(image_path, 'wb') as file:
        file.write(image_data)
    print(f"已经保存到{image_path}")


# 预处理


if __name__ == "__main__":
    image_base64 = image_to_base64(pash="原图2.png")
    image = preprocess_image(image_base64)
    image_path = "预处理图片2.jpg"
    base64_to_image(image, image_path)
