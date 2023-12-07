from hashlib import md5,sha1,sha256,sha384

# ##################密码加密######################
# hash加密
# 加盐
salt = b'cs1112'
obj = md5(salt)
# obj = md5()
password = "1"
obj.update(password.encode("utf-8"))
# 密文
hexdigest = obj.hexdigest()
print(hexdigest)

# ##################给文件计算md5######################
# sha与md5一模一样的用法
# obj = sha384()
# obj = md5()
# with open("文件", mode="rb") as f:
#     for line in f:
#         obj.update(line)
# print(obj.hexdigest())
