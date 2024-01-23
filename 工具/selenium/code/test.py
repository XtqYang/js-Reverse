import time

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def share_browser():
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')
    # path是你自己的chrome浏览器的文件路径
    path = r'\chromedriver-win64\chromedriver.exe'
    chrome_options.binary_location = path
    browser = webdriver.Chrome()
    return browser


browser = share_browser()
url = 'https://match2023.yuanrenxue.cn/topic/2'
browser.get(url)
browser.save_screenshot('baidu.png')
time.sleep(5)

