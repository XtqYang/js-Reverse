import json
import subprocess

import requests

cookies = {
    'sessionid': 'vopmkalu3e0dnjw2wan7urkc633pqenc',
}
headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}
proxies = {
    "http": "http://127.0.0.1:8080",
    "https": "http://127.0.0.1:8080",
}


def run_js_script_with_args(script_path, *args):
    cmd = ['node', script_path] + list(args)
    result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result.stdout


def main(i):
    args = json.loads(run_js_script_with_args("01.js", str(i)))
    params = {
        'page': args["page"],
        'token': args["token"],
        'now': args["now"]
    }
    response = requests.post('https://match2023.yuanrenxue.cn/api/match2023/1', verify=False, cookies=cookies,
                             headers=headers, data=params)
    return json.loads(response.text)

allData = []

for i in range(5):
    print(i)
    res = main(i + 1)
    print(res)
    for data in res['data']:
        allData.append(data['value'])

print(sum(allData))
