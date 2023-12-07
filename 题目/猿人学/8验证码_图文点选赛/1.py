import logging
from paddleocr import PaddleOCR


# 百度_PaddleOCR
def PaddleOCR_base64():
    # 配置日志以避免冗余输出
    logging.disable(logging.CRITICAL)

    # 创建OCR实例，设置使用角度分类器和中文语言
    ocr = PaddleOCR(use_angle_cls=True, lang='ch', det=True, rec=True, det_db_unclip_ratio=1.6, det_db_thresh=0.3)
    results = ocr.ocr("image2.png", cls=True)  # 识别图片中的文字
    texts = [line[1][0] for line in results[0]]  # 提取文本内容
    # 分离每个字符
    separated_texts = [char for text in texts for char in text]
    print(separated_texts)
    base_ = ['玉', '鼓', '妾', '岳']
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
    # 找到 p_zn 中每个字符在 base_ 中的索引，并映射到对应的值
    mapped_values = [obj[separated_texts.index(char)] if char in separated_texts else 0 for char in base_]

    print(mapped_values)
    a = {
        "ab": ["a", "b"],
        "bs": ["b", "s"]
    }


PaddleOCR_base64()
