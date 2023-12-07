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


def run(i):
    cookies = {
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1698471916',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1698471916',
        'no-alert3': 'true',
        'tk': '-2091757643018393605',
        'RM4hZBv0dDon443T': '=True',
        'sessionid': 'qoul0udkr2mkhb731zh2fnbdcpxzsqou',
        'm': '747dd2b4ede92c48a9684c797c1eca35',
        'RM4hZBv0dDon443M': 'acd1m8HzaJxflEbsyIMzZHU7y5yDSA9XDIFghCe/dGdD8HGmvhqRNnGbdEwtOCyweaXxSX3e8+QXNXCVtT24z7B6tPUvGe9xmk4S+eIrH9pnqw52v/ijIb0tzxL/EZ2nVpPtMCPc0c7Os2amwcEr1eZTphlmsnU2j95u9vjDo4Q/5xuRWfWkQXuTr+A1bcGkt3zotPlKvYssvBPP/uz939QEuFJMYjWUTUvDG7x1rTM=',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1698569256',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1698569526',
    }

    headers = {
        'authority': 'match.yuanrenxue.cn',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': 'https://match.yuanrenxue.cn/match/6',
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    args = run_js_script_with_args("006.js")
    args = eval(args)
    if i == 0:
        params = {
            'm': args[1][i],
            'q': args[0][i],
        }
    else:
        params = {
            'page': i + 1,
            'm': args[1][i],
            'q': args[0][i],
        }
    response = requests.get('https://match.yuanrenxue.cn/api/match/6', params=params, cookies=cookies, headers=headers)
    return json.loads(response.text)


allData3 = []
allData2 = []
allData1 = []

for i in range(5):
    res = run(i)
    for data in res['data']:
        allData3.append(data['value'])
# allData3里面的每个值值乘以8得到allData2,同样的乘以15得到allData1
allData2 = [value * 8 for value in allData3]
allData1 = [value * 15 for value in allData3]
# print(allData3)
# print(allData2)
# print(allData1)
print(sum(allData1+allData2+allData3))
