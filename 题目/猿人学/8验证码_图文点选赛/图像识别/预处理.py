import cv2
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('TkAgg')  # 或者尝试使用其他后端，例如 'TkAgg', 'Qt5Agg', 'WXAgg' 等


# 确保 matplotlib 配置正确以显示中文
plt.rcParams['font.sans-serif'] = ['SimHei']  # 指定默认字体为黑体
plt.rcParams['axes.unicode_minus'] = False  # 解决保存图像时负号'-'显示为方块的问题

class ImageProcessor:
    def __init__(self, image_path):
        self.original_image = cv2.imread(image_path)
        if self.original_image is None:
            raise ValueError("无法加载图像，请检查路径。")
        self.grayscale_image = None  # 用于存储灰度图像
        self.denoised_image = None   # 用于存储去噪后的图像
        self.first_layer = None      # 用于存储分离出的第一层
        self.eroded_parts = None     # 存储被腐蚀去除的部分
        self.histogram_eq_image = None  # 用于存储直方图均衡化后的图像
        self.edge_detected_image = None # 用于存储边缘检测后的图像

    def preprocess_image(self):
        # 使用形态学腐蚀去除一些细小的特征，并保留被腐蚀的部分
        kernel = np.ones((5, 5), np.uint8)
        eroded = cv2.erode(self.original_image, kernel, iterations=1)
        dilated = cv2.dilate(eroded, kernel, iterations=1)
        self.eroded_parts = cv2.absdiff(dilated, eroded)
    def local_neighborhood(self):
        # 局部邻域平均滤波
        self.local_neighborhood_image = cv2.blur(self.original_image, (5, 5))

    def gaussian_denoise(self):
        # 应用高斯去噪
        self.denoised_image = cv2.GaussianBlur(self.original_image, (5, 5), 0)

    def split_layer(self):
        # 分离出第一层（蓝色通道）
        self.first_layer = self.original_image[:, :, 0]

    def convert_to_grayscale(self):
        # 将图像转换为灰度级
        self.grayscale_image = cv2.cvtColor(self.original_image, cv2.COLOR_BGR2GRAY)

    def histogram_equalization(self):
        # 直方图均衡化
        if len(self.original_image.shape) == 2:
            self.histogram_eq_image = cv2.equalizeHist(self.original_image)
        else:
            ycrcb_img = cv2.cvtColor(self.original_image, cv2.COLOR_BGR2YCrCb)
            ycrcb_img[:, :, 0] = cv2.equalizeHist(ycrcb_img[:, :, 0])
            self.histogram_eq_image = cv2.cvtColor(ycrcb_img, cv2.COLOR_YCrCb2BGR)

    def edge_detection(self):
        # 边缘检测
        self.edge_detected_image = cv2.Canny(self.original_image, 100, 200)

    def show_images(self):
        # 展示所有图像，每行4张
        images = [
            (self.original_image, '原图'),
            (self.denoised_image, '高斯去噪图像'),
            (self.first_layer, '第一层（蓝色通道）', 'gray'),
            (self.eroded_parts, '形态学梯度'),
            (self.grayscale_image, '灰度图像', 'gray'),
            (self.histogram_eq_image, '直方图均衡化图像'),
            (self.edge_detected_image, '边缘检测图像', 'gray'),
            (self.local_neighborhood_image, '局部邻域处理图像')
        ]
        plt.figure(figsize=(20, 10))
        for i, (img, title, *rest) in enumerate(images, 1):
            cmap = rest[0] if rest else None
            if img is not None:
                rows = len(images) // 4 + (len(images) % 4 > 0)
                plt.subplot(rows, 4, i)
                if cmap is not None:
                    plt.imshow(img, cmap=cmap)
                else:
                    plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
                plt.title(title)
                plt.axis('off')
        plt.tight_layout()
        plt.show()

# 用法示例
image_path = '1image.jpg'  # 使用实际的图片路径
processor = ImageProcessor(image_path)
processor.preprocess_image()        # 对原图进行形态学预处理
processor.gaussian_denoise()        # 应用高斯去噪
processor.split_layer()             # 分离第一层
processor.convert_to_grayscale()    # 转换为灰度图像
processor.histogram_equalization()  # 进行直方图均衡化
processor.edge_detection()          # 进行边缘检测
processor.local_neighborhood()      # 进行局部邻域处理
processor.show_images()             # 展示所有处理过程的图像
