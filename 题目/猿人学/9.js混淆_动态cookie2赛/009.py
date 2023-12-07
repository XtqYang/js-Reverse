import json
import re
import subprocess
import time
import urllib.parse
import requests


# 执行js
def run_js_script_with_args(script_path, *args):
    cmd = ['node', script_path] + list(args)
    result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result.stdout


# 获取动态加密数据
def get_mt():
    # 发送网络请求
    response = requests.get('https://match.yuanrenxue.cn/match/9')
    # print(response.text)
    # 第一个模式：匹配以m++)结尾前的1到5位数值
    pattern = r'(\d{1,5}).{0,4}m\+\+\)'
    # 第二个模式：匹配任意10位数字
    pattern2 = r'\b\d{10}\b'

    # 分别应用两个模式
    matches1 = re.findall(pattern, response.text)
    matches2 = re.findall(pattern2, response.text)
    matches3 = response.cookies["sessionid"]
    array = [matches1[0], matches2[0], matches3]
    return array


def main(i):
    mt = get_mt()
    print(mt)
    args = run_js_script_with_args("009.js", mt[0], mt[1]).strip()
    # args = run_js_script_with_args("009.js", "4", "1701051150")
    # 解码
    # first_decode = urllib.parse.unquote(args).strip()
    # print(first_decode)
    # args = run_js_script_with_args("009.js")
    cookies = {
        'sessionid': mt[2],
        # 'sessionid':"1h4rep524tyb1ea3v2y4g2rajd7vzv70",
        'm': args,
        # 'm': "",
    }
    params = {
        'page': i,
    }
    response = requests.get('https://match.yuanrenxue.cn/api/match/9', params=params, cookies=cookies)
    return json.loads(response.text)


allData = []

for i in range(5):
    res = main(i + 1)
    print(res)
    for data in res['data']:
        allData.append(data['value'])

print(sum(allData) / len(allData))
