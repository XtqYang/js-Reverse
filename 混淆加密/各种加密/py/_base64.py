import base64

# base64是处理字节的,使用encode变为字节
bs = "小明我的朋友".encode("utf-8")

s = base64.b64encode(bs).decode('utf-8')

print(s)
# 解码
bs = base64.b64decode(s)
decode = bs.decode("utf-8")
print(decode)
