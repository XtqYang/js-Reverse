from PIL import Image
import pytesseract

# 设置Tesseract的路径，仅在Tesseract不在你的PATH中时需要
pytesseract.pytesseract.tesseract_cmd = r'D:\RJAZML\OCR\tesseract.exe'
# 打开包含文字的图片文件
image = Image.open('1image.jpg')
# 使用Tesseract进行文字识别
text = pytesseract.image_to_string(image, lang='chi_sim')

print(text)
