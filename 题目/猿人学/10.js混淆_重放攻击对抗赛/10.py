import base64
import json
import re
import subprocess

import requests
import urllib3
from jsmin import jsmin

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

proxies = {
    "http": "http://127.0.0.1:8889",
    "https": "http://127.0.0.1:8889",
}
cookies = {
    'sessionid': 'g8xqgub5skyttf1bouuwm81d2v6rczqa',
}

def w2ks():
    global yuanrenxue_59
    # 设置代理
    # 请求的URLs
    url1 = "https://match.yuanrenxue.cn/match/10"
    url2 = "https://match.yuanrenxue.cn/stati/mu/rsnkw2ksph"
    js_content1 = requests.get(url1, cookies=cookies, verify=False).text
    js_content2 = requests.get(url2, cookies=cookies, verify=False).text
    # 使用正则表达式查找变量yuanrenxue_59的值(密钥)
    yuanrenxue_59 = int(re.search(r"yuanrenxue_59=(\d{1,5})", js_content1).group(1))
    modified_string = js_content2[17:-1]
    unicode_code_point = ""
    # 解密
    for i in range(318024):
        unicode_code_point += chr(ord(modified_string[i]) - i % yuanrenxue_59 - 50)
    # 解码
    decoded_string = base64.b64decode(unicode_code_point).decode('utf-8')
    return decoded_string


# 替换字符串
def w2ksph():
    # 获取解密后内容
    decoded_string = w2ks()
    # 提取关键值
    pattern1 = r"_yrxa\$o\(_yrxtJ1\)\{var _yrxmbl=(\d{1,10})"
    pattern2 = r"_yrxVhD\(_yrxtJ1\)\{return (\d{1,10})"
    pattern3 = r"_yrxM3E\(_yrxvAM\)\{var _yrxC2_=(\d{1,10})"
    match1 = int(re.search(pattern1, decoded_string).group(1)) + yuanrenxue_59
    match2 = int(re.search(pattern2, decoded_string).group(1)) + yuanrenxue_59
    match3 = int(re.search(pattern3, decoded_string).group(1)) + yuanrenxue_59
    print(match1)
    print(match2)
    print(match3)
    # 与清洗过的js执行替换
    decoded_string = decoded_string.replace("_yrxxCJ[_yrxQ9C[32]](this,arguments)", "_yrxyA$()")
    pattern1 = r"_yrxa\$o\(_yrxtJ1\)\{var _yrxmbl=(.*?);"
    pattern2 = r"_yrxVhD\(_yrxtJ1\)\{return (.*?)}"
    pattern3 = r"_yrxM3E\(_yrxvAM\)\{var _yrxC2_=(.*?);"
    decoded_string = re.sub(pattern1, r"_yrxa$o(_yrxtJ1){var _yrxmbl=" + str(match1) + r";", decoded_string)
    decoded_string = re.sub(pattern2, r"_yrxVhD(_yrxtJ1){return " + str(match2) + r"}", decoded_string)
    decoded_string = re.sub(pattern3, r"_yrxM3E(_yrxvAM){var _yrxC2_=" + str(match3) + r";", decoded_string)
    # 将修改后的内容写回框架目录
    with open(r"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\rs_code.js", "w", encoding="utf-8") as file:
        file.write(decoded_string)


# JavaScript 文件的路径
def run_js_script_with_args(script_path, *args):
    cmd = ['node', script_path] + list(args)
    result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result.stdout


def replace_js(name1, name2):
    with open(fr"./rs_replace_js/{name1}", "r", encoding="utf-8") as file:
        read = file.read()
    with open(fr"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\{name2}", "w", encoding="utf-8") as file:
        file.write(read)



def main(i):
    #
    replace_js("rs_result.js","rs_result.js")
    #
    w2ksph()
    ARGS = run_js_script_with_args(r"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\rs4Vm.js")[49:]
    print(ARGS)
    params = {
        'page': i,
        'm': ARGS
    }
    response = requests.get('https://match.yuanrenxue.cn/api/match/10', params=params, cookies=cookies)
    return json.loads(response.text)


allData = []
# 4UrkgIwjsrchfAKOC2qRltb4jx0ieHyhXvZItorSg8hL5lGtjcIt_woJEPyvWewABEIiJjuvPYIOUv86BABZmAn1ORMkdXDKad4f27H5gRMkdXiGU1Lz1L_ldd4NyWdqfZxmqk7u2lrDIqQIAgNgjsMBHdwLc_d4xPaZOPKDkdoTYdVssIE2MVoFMllCDycu5PDRRSmwd.Z6Fx8qSIDnP0nekUaYhszgi4eUVclcNhfGA1lCxMzxsLHH7gIhSaH6Gu81qWFVwO4MPNg8lNNBuK.La
# 4UrkgIwjsrchfAKOC2qRltb4jx0ieHyhXvZItorSg8hL5lGtjcIt_woJEPyvWewABEIiJjuvPYIOUv86BABZmAn1ORMlq7KKSqhm27AcSRMlq7QV29c7m0PStQgyHH3z7jtxFSUqHWvf5hP1Uk2mdlQycFi855ziu9p88Pb0yEffoOEAr8eL5zQPDsEgIcJlRJK5jEjAhe7PUN.ZqZit8m8DoDdiuVORfxudxiH6EGn5_5iF8AGnwV9EqWpiJCa2VZSb4MByiPT0GccpTr33u6Ouy

for i in range(5):
    print(i)
    res = main(i + 1)
    print(res)
    for data in res['data']:
        allData.append(data['value'])

print(sum(allData))

# 2024-1-8  21:34
