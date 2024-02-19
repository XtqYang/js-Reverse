import os

# 指定路径
path = r"D:\BaiduNetdiskDownload\【1664】爬虫进阶学习\第9章 基于深度学习验证码识别"
# 要删除的文字
delete_str = "【 微信号：itcodeba 】"
# 遍历路径下所有文件
for root, dirs, files in os.walk(path):
    for file in files:
        # 获取完整路径
        fullpath = os.path.join(root, file)

        # 如果包含要删除的文字
        if delete_str in file:
            # 分割文件名和扩展名
            name, ext = os.path.splitext(file)
            # 删除指定文字
            new_name = name.replace(delete_str, '')
            # 拼接新的文件名
            new_fullpath = os.path.join(root, new_name + ext)
            # 重命名文件
            os.rename(fullpath, new_fullpath)

print("删除指定文字完成!")