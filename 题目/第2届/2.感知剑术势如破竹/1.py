import requests

cookies = {
    'Hm_lvt_2a795944b81b391f12d70da5971ba616': '1705852587,1705852790,1705992924,1705994304',
    'tk': '7868619429760893779',
    'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1706024124',
    'Hm_lpvt_434c501fe98c1a8ec74b813751d4e3e3': '1706024124',
    'sessionid': 'brvsphfa24ipus9jq6g7gbe8lmcqtbn6',
    'Hm_lpvt_2a795944b81b391f12d70da5971ba616': '1706094475',
}

headers = {
    'authority': 'match2023.yuanrenxue.cn',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # 'content-length': '0',
    # 'cookie': 'Hm_lvt_2a795944b81b391f12d70da5971ba616=1705852587,1705852790,1705992924,1705994304; tk=7868619429760893779; Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3=1706024124; Hm_lpvt_434c501fe98c1a8ec74b813751d4e3e3=1706024124; sessionid=brvsphfa24ipus9jq6g7gbe8lmcqtbn6; Hm_lpvt_2a795944b81b391f12d70da5971ba616=1706094475',
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

params = {
    'page': '1',
    'token': '3b8a44771c899d58d1ca6f7279b2b8751706099951762',
}


response = requests.post('https://match2023.yuanrenxue.cn/api/match2023/2', params=params, cookies=cookies, headers=headers)
print(response.text)