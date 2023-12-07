import requests

cookies = {
    'sessionid': 'y8oh0s5pvmep3i7suefkgx68kotwr5hz',
}


response = requests.get('https://match.yuanrenxue.cn/match/10')
print(response.text)
