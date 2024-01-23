# 导入模块
import time

from selenium import webdriver

# 添加保持登录的数据路径：安装目录一般在C:\Users\****\AppData\Local\Google\Chrome\User Data
user_data_dir = r'C:\Users\21781\AppData\Local\Google\Chrome\User Data\Default'
# 这是一个选项类
user_option = webdriver.ChromeOptions()
# 添加浏览器用户数据
user_option.add_argument(f'--user-data-dir={user_data_dir}')
# 实例化浏览器（带上用户数据）
driver = webdriver.Chrome(options=user_option)

driver.get("https://match2023.yuanrenxue.cn/topic/2")

time.sleep(100)