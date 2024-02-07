import json

import requests
from collections import Counter

import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

proxies = {
    "http": "127.0.0.1:8080",
    "https": "127.0.0.1:8080"
}


def _jssm():
    url = 'https://match.yuanrenxue.cn/jssm'
    headers = {
        'Host': 'match.yuanrenxue.cn',
        'Cookie': 'Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1697609837; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1697609837; m=38367b6187ca5dd7ee2c16ebec4b0f70|1697615021000; no-alert3=true; tk=-2091757643018393605; sessionid=z1eqajp3e45xpgv6iix4zlmroc1mhflm; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1697622303; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1697633909',
        'Content-Length': '0',
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Accept': '*/*',
        'Origin': 'https://match.yuanrenxue.cn',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://match.yuanrenxue.cn/match/3',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    session = requests.session()
    session.headers = headers
    session.post(url=url, verify=False)


def _data(i):
    # 构建第二个请求
    headers_get = {
        'Host': 'match.yuanrenxue.cn',
        'Cookie': 'Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1697609837; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1697609837; m=38367b6187ca5dd7ee2c16ebec4b0f70|1697615021000; no-alert3=true; tk=-2091757643018393605; sessionid=z1eqajp3e45xpgv6iix4zlmroc1mhflm; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1697622303; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1697633909',
        'Sec-Ch-Ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'Sec-Ch-Ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://match.yuanrenxue.cn/match/3',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Length': '0',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    params = {
        'page': i,
    }
    url_get = f"https://match.yuanrenxue.cn/api/match/3"

    session = requests.session()
    session.headers = headers_get
    response = session.get(url=url_get, params=params, verify=False)
    return json.loads(response.text)




def most_common_value(data_list):
    flattened_data = [item for sublist in data_list for item in sublist]  # 将嵌套列表展平
    count = Counter(flattened_data)
    most_common = count.most_common(1)  # 获取出现频率最高的元素及其次数
    return most_common[0][0]


def run():
    a = []
    for i in range(5):
        _jssm()
        m = _data(i + 1)  # 获取数据
        values = [item["value"] for item in m["data"]]  # 提取值
        # 将平均值追加到列表 a 中
        a.append(values)
    print(most_common_value(a))


run()
