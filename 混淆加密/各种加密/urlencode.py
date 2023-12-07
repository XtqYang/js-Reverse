from urllib.parse import urljoin, urlencode, unquote

# url编码
base_url = "https://www.duitang.com/category/?"

param_dic = {
    "wd": "cat=avatar&sub=男生头像&sub2=&name=男生头像"
}
# url编码
result = urlencode(param_dic)
url = base_url + result
print(url)
# url解码
print(unquote(url))
