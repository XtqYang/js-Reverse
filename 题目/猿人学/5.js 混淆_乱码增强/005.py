import json
import subprocess

import numpy as np
import requests


def run_js_script_with_args(script_path, *args):
    cmd = ['node', script_path] + list(args)
    result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result.stdout


args = run_js_script_with_args("005.js")
eval1 = eval(args)


def run(i):
    cookies = {
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1698216023',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1698216023',
        'no-alert3': 'true',
        'tk': '-2091757643018393605',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1698216036',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1698311743',
        'm': '3a7540d8ca08865cb6db8cdae682d616',
        'RM4hZBv0dDon443M': eval1[0],
        # 'RM4hZBv0dDon443M': 'r6Dpe7rp/x9grD0uVsEl0h7F9F4aptZUm3xsrT0hHm0zhAUEI8rrX8sggpwdZFif2hRjr7q0Gye4vVWF86FfWycEY1lFUePv7uXaIrOIA+FKwJdt/Igp9C4MgckhGfhv9fxvZaryP/BqYvFZ5g84lYQnpFKBFZ3h690p3qsDQ9IDLDrSObPwCJ/cE+znziUORr5yixWE7hGFnYJ98qfWVYw9OfC+tG0Td10hjvIlk5w=',

    }

    headers = {
        'authority': 'match.yuanrenxue.cn',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': 'https://match.yuanrenxue.cn/match/5',
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
        'm': str(eval1[2]),
        'f': str(eval1[1]),
    }

    response = requests.get('https://match.yuanrenxue.cn/api/match/5', params=params, cookies=cookies, headers=headers)
    return json.loads(response.text)


allData = []

for i in range(5):
    res = run(i + 1)
    print(res)
    for data in res['data']:
        allData.append(data['value'])

max5 = np.sort(allData)[-5:]  # 升序
print(allData)
print('5名直播间热度的加和:', sum(max5))
