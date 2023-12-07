from Crypto.Cipher import DES
import base64

# 与aes一样
s = "这是加密明文"
"""
:key:只能为8位
:IV:只能为8位
"""
key = b'2vsdvfe2'
iv = b'sdv24124'
#
# des = DES.new(key, mode=DES.MODE_CBC, IV=iv)
#
# bs = s.encode("utf-8")
# que = 16 - len(bs) % 16
# bs += (que * chr(que)).encode("utf-8")
#
# # 加密
# encrypt = des.encrypt(bs)
# decode = base64.b64encode(encrypt).decode("utf-8")
# print(decode)


# aes对象经过了加密就不能再解密
miwen = "xpJ4ogQQ0Eh8FHEKv4HHUadEhH0361KyDdsQlPFDaSo="
aes = DES.new(key, mode=DES.MODE_CBC, IV=iv)
# 处理bas64
bs = base64.b64decode(miwen)
# 解密
result = aes.decrypt(bs)
print(result.decode("utf-8"))
