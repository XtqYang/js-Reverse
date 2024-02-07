import requests

cookies = {
    'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1706024124',
    'Hm_lvt_2a795944b81b391f12d70da5971ba616': '1705992924,1705994304,1706541832,1706543683',
    'tk': '7868619429760893779',
    'sessionid': 'feb4g22mof10eigdgmkuhexo19ukhy0x',
    'Hm_lpvt_2a795944b81b391f12d70da5971ba616': '1706801304',
}

headers = {
    'authority': 'match2023.yuanrenxue.cn',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'accept-time': '1706801358628',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://match2023.yuanrenxue.cn',
    'pragma': 'no-cache',
    'referer': 'https://match2023.yuanrenxue.cn/topic/3',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.289 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
}

data = {
    'page': '5',
    'token': '97e056f616e003e1f8eba33e3d084026865a09944d96695b1ac1162d9e3e0892',
}

response = requests.post('https://match2023.yuanrenxue.cn/api/match2023/3', cookies=cookies, headers=headers, data=data)
print(response.text)