from Crypto.Cipher import AES
import base64

s = "这是加密明文"
"""
:key:只能为16,24,32位
"""
key = b'aaaaaa1111aaaaaa'
iv = b'3420152342156534'
# MODE_ECB不需要IV
#
# aes = AES.new(key, mode=AES.MODE_CBC, IV=iv)
# # 加密内容需要是16字节的倍数，不足需要做填充
# # 通用方案：缺少的个数*chr(缺少的个数)
# bs = s.encode("utf-8")
# que = 16 - len(bs) % 16
# bs += (que * chr(que)).encode("utf-8")
#
# # 加密
# encrypt = aes.encrypt(bs)
# decode = base64.b64encode(encrypt).decode("utf-8")
# print(decode)

# aes对象经过了加密就不能再解密
miwen = "2eLu3haac4VuEFs0+N4oux0Ud5iDD8xjLVmlnyInep8="
aes = AES.new(key, mode=AES.MODE_CBC, IV=iv)
# 处理bas64
bs = base64.b64decode(miwen)
# 解密
result = aes.decrypt(bs)
print(result.decode("utf-8"))
