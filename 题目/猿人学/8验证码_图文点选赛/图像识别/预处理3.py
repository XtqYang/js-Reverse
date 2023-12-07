import cv2
import matplotlib
import numpy as np
from matplotlib import pyplot as plt

plt.rcParams['font.sans-serif'] = ['SimHei']  # 指定默认字体为黑体
plt.rcParams['axes.unicode_minus'] = False  # 解决保存图像是负号'-'显示为方块的问题


def active_check(func):
    def wrapper(self, *args, **kwargs):
        active = kwargs.pop('active', True)  # Remove the 'active' argument
        if active:
            return func(self, *args, **kwargs)

    return wrapper


class ImageProcessor:
    def __init__(self, image_path, processing_config=None):
        # 从给定路径加载图像并存储原始图像
        self.original_image = cv2.imread(image_path)
        if self.original_image is None:
            raise ValueError("无法加载图像。请检查图像路径。")
        self.image = None  # 将用于处理的图像
        self.splitted_merged_image = None
        self.processing_config = processing_config if processing_config is not None else {}

    def process_image(self):
        # 根据提供的配置处理图像
        self.image = self.original_image.copy()  # 为每次处理运行开始时使用新的副本
        for step, params in self.processing_config.items():
            getattr(self, step)(**params)

    @active_check
    def split_and_merge(self, num_horizontal_splits, num_vertical_splits, active=True):
        # 将图像分割为指定数量的块，转换为灰度图像后再合并
        if not active:
            return
        height, width = self.image.shape[:2]
        grid_h, grid_w = height // num_horizontal_splits, width // num_vertical_splits
        gray_blocks = []
        for i in range(0, height, grid_h):
            for j in range(0, width, grid_w):
                block = self.image[i:i + grid_h, j:j + grid_w]
                if len(block.shape) == 2 or (len(block.shape) == 3 and block.shape[2] == 1):
                    gray_blocks.append(block)
                else:
                    gray_blocks.append(cv2.cvtColor(block, cv2.COLOR_BGR2GRAY))
        rows = [np.hstack(gray_blocks[i:i + num_vertical_splits]) for i in
                range(0, len(gray_blocks), num_vertical_splits)]
        self.splitted_merged_image = np.vstack(rows).astype(np.uint8)
        self.splitted_merged_image = cv2.cvtColor(self.splitted_merged_image, cv2.COLOR_GRAY2BGR)

    @active_check
    def morphological_gradient(self, kernel_size):
        # 形态学梯度
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (kernel_size, kernel_size))
        self.image = cv2.morphologyEx(self.image, cv2.MORPH_GRADIENT, kernel)

    @active_check
    def resize_image(self, scale_percent):
        # 缩放图像至指定百分比
        width = int(self.original_image.shape[1] * scale_percent / 100)
        height = int(self.original_image.shape[0] * scale_percent / 100)
        dim = (width, height)
        self.image = cv2.resize(self.image, dim, interpolation=cv2.INTER_AREA)

    @active_check
    def rotate_image(self, angle):
        # 旋转图像至指定角度
        center = (self.image.shape[1] // 2, self.image.shape[0] // 2)
        rotate_matrix = cv2.getRotationMatrix2D(center=center, angle=angle, scale=1)
        self.image = cv2.warpAffine(self.image, rotate_matrix, (self.image.shape[1], self.image.shape[0]))

    @active_check
    def flip_image(self, flip_code=1):
        # 翻转图像
        self.image = cv2.flip(self.image, flip_code)

    @active_check
    def denoise_image(self, h, hForColorComponents, templateWindowSize, searchWindowSize):
        # 为彩色图像去噪
        self.image = cv2.fastNlMeansDenoisingColored(self.image, None, h, hForColorComponents, templateWindowSize,
                                                     searchWindowSize)

    @active_check
    def apply_blur(self, kernel_size):
        # 应用高斯模糊
        self.image = cv2.GaussianBlur(self.image, (kernel_size, kernel_size), 0)

    @active_check
    def histogram_equalization(self):
        # 应用直方图均衡化以改善图像对比度
        if len(self.image.shape) == 2:
            self.image = cv2.equalizeHist(self.image)
        else:
            ycrcb = cv2.cvtColor(self.image, cv2.COLOR_BGR2YCrCb)
            ycrcb[:, :, 0] = cv2.equalizeHist(ycrcb[:, :, 0])
            self.image = cv2.cvtColor(ycrcb, cv2.COLOR_YCrCb2BGR)

    @active_check
    def edge_detection(self, threshold1, threshold2):
        # 应用Canny边缘检测
        self.image = cv2.Canny(self.image, threshold1, threshold2)

    @active_check
    def adjust_brightness_contrast(self, brightness, contrast):
        # 调整图像亮度和对比度
        self.image = np.clip(contrast * self.image + brightness, 0, 255).astype(np.uint8)

    def show_images(self):
        # 展示原始和处理后的图像
        plt.figure(figsize=(10, 5))
        plt.subplot(1, 2, 1)
        plt.imshow(cv2.cvtColor(self.original_image, cv2.COLOR_BGR2RGB))
        plt.title('原始图像')
        plt.axis('off')
        plt.subplot(1, 2, 2)
        if self.splitted_merged_image is not None:
            plt.imshow(cv2.cvtColor(self.splitted_merged_image, cv2.COLOR_BGR2RGB))
            plt.title('分割合并后图像')
        else:
            plt.imshow(cv2.cvtColor(self.image, cv2.COLOR_BGR2RGB))
            plt.title('处理后图像')
        plt.axis('off')
        plt.show()


if __name__ == '__main__':
    matplotlib.use('TkAgg')  # 使用TkAgg后端
    image_path = '1image.jpg'  # 替换为实际图像路径
    # 设置处理步骤和参数
    processing_config = {
        # 控制是否将图像分割成网格、转换成灰度图像然后再合并
        'split_and_merge': {'num_horizontal_splits': 2, 'num_vertical_splits': 2, 'active': True},
        # 形态学梯度
        'morphological_gradient': {'kernel_size': 5, 'active': True},
        # 控制是否对图像进行缩放以及缩放的比例
        'resize_image': {'scale_percent': 50, 'active': True},
        # 控制是否对图像进行旋转以及旋转的角度
        'rotate_image': {'angle': 0, 'active': False},
        # 控制是否对图像进行翻转以及翻转的方式
        'flip_image': {'flip_code': 1, 'active': False},
        # 控制是否对图像应用去噪
        'denoise_image': {'h': 10, 'hForColorComponents': 10, 'templateWindowSize': 7, 'searchWindowSize': 21,
                          'active': True},
        # 控制是否对图像应用高斯模糊以及使用的核心大小
        'apply_blur': {'kernel_size': 5, 'active': True},
        # 控制是否对图像应用直方图均衡化以改善对比度
        'histogram_equalization': {'active': True},
        # 控制是否对图像应用边缘检测以及使用的阈值
        'edge_detection': {'threshold1': 500, 'threshold2': 150, 'active': True},
        # 控制是否调整图像的亮度和对比度
        'adjust_brightness_contrast': {'brightness': 30, 'contrast': 1.2, 'active': True}
    }
    processor = ImageProcessor(image_path, processing_config)
    processor.process_image()
    processor.show_images()
