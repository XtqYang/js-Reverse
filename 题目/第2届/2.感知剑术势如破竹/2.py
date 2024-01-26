import subprocess
import requests

import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


headers = {
    'authority': 'match2023.yuanrenxue.cn',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'origin': 'https://match2023.yuanrenxue.cn',
    'pragma': 'no-cache',
    'referer': 'https://match2023.yuanrenxue.cn/topic/2',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.289 Safari/537.36',
}

cookies = {
    'Hm_lvt_2a795944b81b391f12d70da5971ba616': '1705852587,1705852790,1705992924,1705994304',
    'tk': '7868619429760893779',
    'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1706024124',
    'Hm_lpvt_434c501fe98c1a8ec74b813751d4e3e3': '1706024124',
    'sessionid': 'mgme0544t5fwrpt7vb3ydio21mny9i6d',
    'Hm_lpvt_2a795944b81b391f12d70da5971ba616': '1706368420',
}
proxies = {
    "http": "http://127.0.0.1:8080",
    "https": "http://127.0.0.1:8080",
}


def replace_js(name1, name2):
    with open(fr"./rs_replace_js/{name1}", "r", encoding="utf-8") as file:
        read = file.read()
    with open(fr"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\{name2}", "w", encoding="utf-8") as file:
        file.write(read)


replace_js("rs_result.js", "rs_result.js")
replace_js("rs_code.js", "rs_code.js")


# JavaScript 文件的路径
def run_js_script_with_args(script_path, *args):
    cmd = ['node', script_path] + list(args)
    result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result.stdout


ARGS = run_js_script_with_args(r"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\rs4Vm.js")
print(ARGS)
params = {
    'page': '4',
    'token': ARGS,
}

response = requests.post('https://match2023.yuanrenxue.cn/api/match2023/2',
                         proxies=proxies, headers=headers, params=params, cookies=cookies, verify=False)
print(response.text)

# 3b8a5c771ccaf958514a6872788abf351706372952237
# 3b8a5d771cc98d18d04a7032f88958351706373285478
