import base64
import json
import re
import subprocess

import requests
import urllib3
from jsmin import jsmin

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


#  XMLHttpRequest['prototype']['open']()


def w2ks():
    global yuanrenxue_59
    # 设置代理
    proxies = {
        "http": "http://127.0.0.1:8889",
        "https": "http://127.0.0.1:8889",
    }
    cookies = {
        'sessionid': '7m16j4kqx6n038tnkhise6ea157w46bb',
    }
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


def main(i):
    w2ksph()
    ARGS = run_js_script_with_args(r"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\rs4Vm.js")[49:]
    print(ARGS)
    cookies2 = {
        'sessionid': '7m16j4kqx6n038tnkhise6ea157w46bb',
    }
    params = {
        'page': i,
        'm': ARGS
    }
    # {"status": "1", "state": "success", "data": [{"value": 304}, {"value": 2207}, {"value": 6182}, {"value": 1548}, {"value": 22}, {"value": 1115}, {"value": 5666}, {"value": 2970}, {"value": 7077}, {"value": 2068}], "k": {"k": "eFDb|311"}}
    # {"status": "1", "state": "success", "data": [{"value": 304}, {"value": 2207}, {"value": 6182}, {"value": 1548}, {"value": 22}, {"value": 1115}, {"value": 5666}, {"value": 2970}, {"value": 7077}, {"value": 2068}], "k": {"k": "DaAC|131"}}
    # {"status": "1", "state": "success", "data": [{"value": 5928}, {"value": 6210}, {"value": 1670}, {"value": 8328}, {"value": 3227}, {"value": 5868}, {"value": 5019}, {"value": 9421}, {"value": 469}, {"value": 1153}], "k": {"k": "dcCF|813"}}

    response = requests.get('https://match.yuanrenxue.cn/api/match/10', params=params, cookies=cookies2)
    return json.loads(response.text)


allData = []

for i in range(5):
    print(i)
    res = main(i + 1)
    print(res)
    for data in res['data']:
        allData.append(data['value'])

print(sum(allData))

# 2024-1-8  21:34
