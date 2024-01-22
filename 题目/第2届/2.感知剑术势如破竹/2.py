import requests

cookies = {
    'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1701693167',
    'Hm_lvt_2a795944b81b391f12d70da5971ba616': '1704455155,1705585443',
    'tk': '7868619429760893779',
    'sessionid': 'vopmkalu3e0dnjw2wan7urkc633pqenc',
    'Hm_lpvt_2a795944b81b391f12d70da5971ba616': '1705823237',
}

headers = {
    'authority': 'match2023.yuanrenxue.cn',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'origin': 'https://match2023.yuanrenxue.cn',
    'pragma': 'no-cache',
    'referer': 'https://match2023.yuanrenxue.cn/topic/2',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.289 Safari/537.36',
}

params = {
    'page': '4',
    'token': '3b8aa4741c8a7f5b514a687278baaf751705823255175',
}
# 111
response = requests.post('https://match2023.yuanrenxue.cn/api/match2023/2', params=params, cookies=cookies, headers=headers)
print(response.text)