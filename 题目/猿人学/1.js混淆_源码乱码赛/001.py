# -*- coding: UTF-8  -*-
from bs4 import BeautifulSoup
import subprocess
import requests
import json
import time
import re


def get_a():
    url = 'https://match.yuanrenxue.cn/match/1'
    # 发送GET请求获取网页内容
    response = requests.get(url)
    html = response.text
    # 使用BeautifulSoup解析HTML
    soup = BeautifulSoup(html, 'html.parser')
    # 找到所有的<script>标签
    script_tags = soup.find_all('script')
    # 在<script>标签中查找包含window.a的内容
    for script in script_tags:
        if 'window.a' in script.text:
            # 使用正则表达式提取window.a的值
            match = re.search(r"window\.a='(.*?)'", script.text)
            if match:
                window_a_value = match.group(1)
                # window_a_value = convert_to_hex_escape(window_a_value)
                return window_a_value


# 接受一个字符串并返回其中所有非ASCII字符的十六进制转义表示形式
def convert_to_hex_escape(s):
    return ''.join(ch if ord(ch) < 128 else '\\x{:02x}'.format(ord(ch)) for ch in s)


def run_js_script_with_args(script_path, *args):
    cmd = ['node', script_path] + list(args)
    result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result.stdout


def _time():
    current_timestamp = int(time.time() * 1000)
    current_timestamp -= current_timestamp % 1000  # 将最后3位设置为0
    # current_timestamp2 = int(current_timestamp / 1000)
    return current_timestamp + 100000000


def _m(i):
    time = _time().__str__()
    cookies = {
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1697265616',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1697265616',
        'no-alert3': 'true',
        'tk': '-2091757643018393605',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1697265694',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1697374568',
    }

    headers = {
        'authority': 'match.yuanrenxue.cn',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': 'https://match.yuanrenxue.cn/match/1',
        'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    params = {
        'page': i,
        # 'm': f"{run_js_script_with_args('001.js').split()[0]}丨{_time()}",
        'm': f"{run_js_script_with_args('001.js', time).split()[1]}丨{int(int(time) / 1000)}",
        # 'm': '79fb80e508230725bda915e0b7edbf4c丨1697474864',
    }
    print(f"params={params}")
    response = requests.get('https://match.yuanrenxue.cn/api/match/1', params=params, cookies=cookies, headers=headers)
    return json.loads(response.text)


def run():
    a = []
    for i in range(5):
        m = _m(i + 1)  # 获取数据
        values = [item["value"] for item in m["data"]]  # 提取值
        # 计算平均值
        average_value = sum(values) / len(values)
        # 将平均值追加到列表 a 中
        a.append(average_value)
    average_value = sum(a) / len(a)
    print(average_value)
print(_time())