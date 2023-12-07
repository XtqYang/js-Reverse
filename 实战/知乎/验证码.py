import requests

headers = {
    'authority': 'zhihu-web-analytics.zhihu.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-encoding': 'gzip',
    'content-type': 'application/x-protobuf',
    'origin': 'https://www.zhihu.com',
    'pragma': 'no-cache',
    'referer': 'https://www.zhihu.com/signin?next=%2F',
    'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'x-za-batch-size': '1',
    'x-za-clientid': '4601e62d-c0fa-497a-a8f9-648a09f1ef50',
    'x-za-log-version': '3.3.74',
    'x-za-platform': 'DesktopWeb',
    'x-za-product': 'Zhihu',
}

data = '\x1f\x8b\b\x00TU\re\x00\x03ãºÆÄÅf¬g¬gn"0\x8bU\x82Qi7#\x97\x9a\x94\x8a\x89\x99\x81aª\x99Q\x8an²AZ¢®\x89¥y¢n¢E\x9a¥®\x99\x89E¢\x81e\x9aaj\x9a©\x81P\x03#\a£\x00£\x12»¡\x81\x81\x1e\x10\x1aåûæWeæä$ê\x9bê\x19(h\x84gæ¥ä\x97\x17+ø\x85(\x18\x02e\xad\x15\x80\x02f&Ö\n\x15f&\x9a\n\x8e\x05\x059©á©IÞ\x99%ú¦ÆæzÆf\n\x1aÞ\x1e!¾>:\n9\x99Ù©\nî©ÉÙù\x9a\nÎ\x19Eù¹©ú\x86\x86æ \v\x80¦\x06\'¦%\x16eBµd0Hñq\x1c\\zõÁjC!Vm\x03\v\x03\x03\xad\\.-.Õ\x8c\x92\x92\x82b+}ýòòr½ª\x8cÌ\x8cR½äü\\ýâÌô¼Ì<û¼Ô\x8a\x12[U#·\x88+jB¶Dª\x95`4\x12z²wÿó)+\x9e®o{¾\xa0ñùÌÝO÷NÕb0\x92ââJâ0456«°03YÄÄ\xadÅ\t6C·<5\t\x00\x05\x02PtY\x01\x00\x00'.encode()

response = requests.post('https://zhihu-web-analytics.zhihu.com/api/v2/za/logs/batch', headers=headers, data=data)
print(response)