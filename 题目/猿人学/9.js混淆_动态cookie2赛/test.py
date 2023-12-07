import requests

response = requests.get('https://match.yuanrenxue.cn/match/9')

print(response.text)