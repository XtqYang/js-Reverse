import requests

cookies = {
    '_xsrf': '3Qn5KfRWfbMBFExcirbxID0IROfv8H6w',
    '_zap': 'b922d4da-59d7-4b64-aa50-7d6706ae6d1f',
    'Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49': '1695369398',
    'Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49': '1695369398',
    'd_c0': 'ADDSba0MbxePTiJBMLRTnMd7l0mPVdYDyU0=|1695369398',
    'KLBRSID': 'fe78dd346df712f9c4f126150949b853|1695369398|1695367032',
}

headers = {
    'authority': 'www.zhihu.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # 'cookie': '_xsrf=3Qn5KfRWfbMBFExcirbxID0IROfv8H6w; _zap=b922d4da-59d7-4b64-aa50-7d6706ae6d1f; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1695369398; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1695369398; d_c0=ADDSba0MbxePTiJBMLRTnMd7l0mPVdYDyU0=|1695369398; KLBRSID=fe78dd346df712f9c4f126150949b853|1695369398|1695367032',
    'pragma': 'no-cache',
    'referer': 'https://www.zhihu.com/signin?next=%2F',
    'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'x-ab-param': '',
    'x-requested-with': 'fetch',
}

params = {
    'type': 'captcha_sign_in',
}

response = requests.get('https://www.zhihu.com/api/v3/oauth/captcha/v2', params=params, cookies=cookies, headers=headers)
# 获取响应中的Cookie
response_cookies = response.cookies

# 将Cookie打印出来
for cookie in response_cookies:
    print(f"{cookie.name}: {cookie.value}")

# Cache-Control:
# private, must-revalidate, no-cache, no-store, max-age=0
# Content-Length:
# 251
# Content-Type:
# application/json
# Date:
# Fri, 22 Sep 2023 07:34:38 GMT
# Expires:
# Thu, 01 Jan 1970 08:00:00 CST
# Pragma:
# no-cache
# Referrer-Policy:
# no-referrer-when-downgrade
# Server:
# CLOUD ELB 1.0.0
# Set-Cookie:
# KLBRSID=fe78dd346df712f9c4f126150949b853|1695368078|1695367032; Path=/
# Set-Cookie:
# captcha_session_v2=2|1:0|10:1695368078|18:captcha_session_v2|88:bThCUXViNmdoVVR4V3ZlaWtVbmMzcmIzVXY1eEwxaDZLSk9walBRWmFKY2hIaGhoMXpJUFF4ZnYrNTlORTZFRQ==|8dad4d8f32cfb1c45a2be51cfd27fd7e7add6003220d989d951271f1d233efe1; Path=/; Domain=zhihu.com; Expires=Sun, 22 Oct 2023 07:34:38 GMT; HttpOnly
# Vary:
# Accept-Encoding
# X-Backend-Response:
# 0.037
# X-Cache-Lookup:
# Cache Miss
# X-Cdn-Provider:
# tencent
# X-Edge-Timing:
# 0.088
# X-Idc-Id:
# 2
# X-Lb-Timing:
# 0.046
# X-Nws-Log-Uuid:
# 9086474979259273301
# X-Secng-Response:
# 0.045000076293945
# X-Udid:
# AECT9pIEbxePTilvte_mj3vHS-iTsDIYL1U=