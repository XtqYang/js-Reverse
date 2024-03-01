import json
import subprocess
import time

import requests

import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

url = 'https://match2023.yuanrenxue.cn/api/match2023/2'
cookies = cookie = {
    'sessionid': 'feb4g22mof10eigdgmkuhexo19ukhy0x',
}

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.289 Safari/537.36',
}
proxies = {
    "http": "http://127.0.0.1:8080",
    "https": "http://127.0.0.1:8080",
}


def replace_js(name1, name2):
    with open(fr"./rs_replace_js/{name1}", "r", encoding="utf-8") as file:
        read = file.read()
    with open(fr"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\{name2}", "w",
              encoding="utf-8") as file:
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


def main(i):
    ARGS = run_js_script_with_args(r"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\rs4Vm.js",
                                   str(i)).replace('\n', '')
    params = {
        'page': str(i),
        'token': ARGS,
    }
    def send_post_request(url, headers=None, proxies=None, params=None, cookie=None):
        """
        发送POST请求。
        :param url: 请求的URL。
        :param headers: 请求头，字典格式。
        :param proxies: 代理设置，字典格式。
        :param params: 请求参数，字典格式。
        :param cookie: 要设置的cookie，字典格式，例如：{'sessionid': 'value'}。
        :return: 请求的响应对象。
        """
        # 创建会话
        session = requests.session()
        # 设置请求头
        if headers:
            session.headers = headers
        # 设置代理
        if proxies:
            session.proxies = proxies
        # 设置参数
        # 直接设置请求参数
        if params:
            session.params = params
        # 设置cookie
        if cookie:
            for name, value in cookie.items():
                session.cookies.set(name, value)
        # 发送POST请求
        response = session.post(url=url, verify=False)
        return response
    response = send_post_request(url, headers=headers, proxies=None, params=params, cookie=cookie)
    return json.loads(response.text)


ARGS = run_js_script_with_args(r"D:\code\pythonProject\逆向\工具\补环境框架\qxVm-master\z_working\rs4Vm.js","4" ).replace('\n', '')



allData = []
for i in range(5):
    print(i)
    res = main(i + 1)
    print(res)
    for data in res['data']:
        allData.append(data['value'])

print(sum(allData))

# 2024-1-31
# 2024-2-1
