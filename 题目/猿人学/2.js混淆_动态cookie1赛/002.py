import json

import requests
import subprocess
import re

pattern = r"mundefined=([^;]+);"


def run_js_script_with_args(script_path, *args):
    cmd = ['node', script_path] + list(args)
    result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        print(f"Error: {result.stderr}")

    match = re.search(pattern, result.stdout)
    extracted_data = match.group(1)
    return extracted_data

# /api/match/2?page=2
def _m(i):
    url = f'https://match.yuanrenxue.cn/api/match/2'
    cookies = {
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1697609837',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1697609837',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1697609837',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1697609842',
        'm': run_js_script_with_args("002_2.js"),
    }

    headers = {
        'authority': 'match.yuanrenxue.cn',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': 'https://match.yuanrenxue.cn/match/2',
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }
    params = {
        'page': i,
    }

    response = requests.get(url,params=params, cookies=cookies, headers=headers)
    return json.loads(response.text)


def run():
    a = []
    for i in range(5):
        m = _m(i + 1)  # 获取数据
        values = [item["value"] for item in m["data"]]  # 提取值
        # 计算平均值
        average_value = sum(values)
        # 将平均值追加到列表 a 中
        a.append(average_value)
    average_value = sum(a)
    print(average_value)

run()
