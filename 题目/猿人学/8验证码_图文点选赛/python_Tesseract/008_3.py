# 识别效果极差，请使用百度PaddleOCR
import cv2
import numpy as np
from PIL import Image
import pytesseract

# 如果Tesseract不在你的系统路径中，你可能需要设置它的路径
pytesseract.pytesseract.tesseract_cmd = r'D:\RJAZML\OCR\tesseract.exe'

class ImagePreprocessor:
    def __init__(self, image_path):
        # 初始化时读取图像
        self.image = cv2.imread(image_path)
        self.h, self.w = self.image.shape[:2]  # 获取图像的高度和宽度

    def remove_pepper_noise(self):
        # 去掉黑椒点的图像
        self.image[np.all(self.image == [0, 0, 0], axis=-1)] = (255, 255, 255)
        return self

    def remove_background(self):
        # 移除背景噪点
        colors, counts = np.unique(self.image.reshape(-1, 3), axis=0, return_counts=True)
        info_dict = {counts[i]: colors[i].tolist() for i, v in enumerate(counts) if 500 < v < 2200}
        remove_background_rgbs = info_dict.values()
        mask = np.zeros((self.h, self.w, 3), np.uint8) + 255
        for rgb in remove_background_rgbs:
            mask[np.all(self.image == rgb, axis=-1)] = self.image[np.all(self.image == rgb, axis=-1)]
        self.image = mask
        return self

    def remove_lines(self):
        # 去掉线条,全部像素黑白化
        line_list = []
        for y in range(self.h):
            for x in range(self.w):
                tmp = self.image[x, y].tolist()
                if tmp != [0, 0, 0]:
                    if 110 < y < 120 or 210 < y < 220:
                        line_list.append(tmp)
                    if 100 < x < 110 or 200 < x < 210:
                        line_list.append(tmp)
        remove_line_rgbs = np.unique(np.array(line_list).reshape(-1, 3), axis=0)
        for rgb in remove_line_rgbs:
            self.image[np.all(self.image == rgb, axis=-1)] = [255, 255, 255]
        self.image[np.any(self.image != [255, 255, 255], axis=-1)] = [0, 0, 0]
        return self

    def erode_image(self):
        # 腐蚀
        kernel = np.ones((2, 3), 'uint8')
        erode_img = cv2.erode(self.image, kernel, cv2.BORDER_REFLECT, iterations=2)
        self.image = erode_img
        return self

    def save_image(self, output_path):
        # 保存图像
        cv2.imwrite(output_path, self.image)
        return output_path

# 使用
image_path = '1image.jpg'  # 需要替换为实际的图像路径
output_path = 'deal.png'  # 处理后的图像将保存在这个路径

# 创建预处理器对象
processor = ImagePreprocessor(image_path)
processor.remove_pepper_noise().remove_background().remove_lines().erode_image()
processor.save_image(output_path)  # 保存预处理后的图像

# 打开预处理后的图像文件
image = Image.open(output_path)

# 使用Tesseract进行文字识别
# text = pytesseract.image_to_string(image, lang='chi_sim')  # 使用中文简体语言包
text = pytesseract.image_to_string(image, lang='chi_sim', config='--psm 8 -c page_separator=""')

# 输出识别的文本
print(text)

