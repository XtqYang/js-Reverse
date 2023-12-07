from PIL import Image
import numpy as np


class ImagePreprocessor:
    def __init__(self, image_path):
        self.image = Image.open(image_path)
        self.pixels = np.array(self.image)

    def remove_background(self):
        # 读取图片高，宽
        h, w = self.pixels.shape[:2]
        # 找到所有不同颜色及它们的出现次数
        colors, counts = np.unique(self.pixels.reshape(-1, 3), axis=0, return_counts=True)
        # 找出出现次数最多的两种颜色
        top2_counts = np.sort(counts)[-2:]
        # 创建一个颜色信息的字典，但排除了出现次数最多的两种颜色
        info_dict = {counts[i]: colors[i].tolist() for i, v in enumerate(counts) if v not in top2_counts}
        # 选择除了最常见的两种颜色之外的所有颜色
        colors_select = np.array([v for v in info_dict.values()])
        # 创建一个全白的掩膜
        mask = np.zeros((h, w, 3), np.uint8) + 255
        # 将原图中不是最常见的颜色的像素复制到掩膜上，达到移除背景的效果
        for rgb in colors_select:
            mask[np.all(self.pixels == rgb, axis=-1)] = self.pixels[np.all(self.pixels == rgb, axis=-1)]
        # 更新 pixels
        self.pixels = mask

    # def remove_lines(self):
    # 这个方法可以保留，但根据您的描述您可能不需要它

    def remove_lines(self):
        # 将图像的宽度和高度存储到 w 和 h 变量
        h, w = self.pixels.shape[:2]
        # 创建一个掩膜，这里假设 pixels 是 BGR 格式
        mask = self.pixels.copy()
        line_list = []  # 存放出现在间隔当中的像素点
        for y in range(h):
            for x in range(w):
                tmp = mask[y, x].tolist()  # 注意：先是 y (行), 后是 x (列)
                if tmp != [0, 0, 0]:
                    if 0 < y < 20 or 110 < y < 120 or 210 < y < 220:
                        line_list.append(tmp)
                    if 0 < x < 10 or 100 < x < 110 or 200 < x < 210:
                        line_list.append(tmp)
        # 移除线条的颜色列表
        remove_line_rgbs = np.unique(np.array(line_list), axis=0)
        # 遍历每个颜色，并将其替换为白色
        for rgb in remove_line_rgbs:
            mask[np.all(mask == rgb, axis=-1)] = [255, 255, 255]
        # 把所有非白色的像素替换为黑色
        mask[np.any(mask != [255, 255, 255], axis=-1)] = [0, 0, 0]
        # 更新 pixels
        self.pixels = mask

    def save_image(self, path):
        # 保存处理后的图像
        result_image = Image.fromarray(self.pixels)
        result_image.save(path)


# 创建预处理器实例
preprocessor = ImagePreprocessor("原图1.png")
# 移除背景
preprocessor.remove_background()
# 保存处理后的图像
preprocessor.save_image("处理后的图2.png")
