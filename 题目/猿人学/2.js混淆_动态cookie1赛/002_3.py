import requests

cookies = {
    'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1697609837',
    'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1697609837',
    'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1697609837',
    'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1697614193',
    'm': '8b049d7be0c21b9d10881efe9572a03b|1697614548000',
}

headers = {
    'authority': 'match.yuanrenxue.cn',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # 'cookie': 'Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1697609837; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1697609837; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1697609837; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1697614193; m=8b049d7be0c21b9d10881efe9572a03b|1697614548000',
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

response = requests.get('https://match.yuanrenxue.cn/api/match/2', cookies=cookies, headers=headers)