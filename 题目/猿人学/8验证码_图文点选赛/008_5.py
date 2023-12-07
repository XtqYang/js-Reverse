import requests

params = {
    'page': '2',
    'answer': '479|469|769|779|',
}
response = requests.get('https://match.yuanrenxue.cn/api/match/8', params=params)

print(response.text)
