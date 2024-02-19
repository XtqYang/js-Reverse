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

data = '\x1f\x8b\b\x00TU\re\x00\x03=O=oÓP\x14Å\x12-Æ\x95ª*\x03Te±\n\x95Ò\x94ØÏ_/I«\x82L>hq\x92æÛm\x16ôâ<Ç/ql7ÏÈq~\x01BbAB¨#\x03\x133\x13°³!!±³ ÄÀ\x7fÀUªÞ»Ü{Ï½÷\x9cÃ½»É\xad*\x82"äÔÍµg¯®\x9b\x8d\x8b\x95Mfû\x1fÃ\x19Û\x0fT\b$\fåaÖ\x026Êª\x85\x1cÊ¢¼]ÈB5\x8f@Á\x96°\xad\x81þ}ýäI{nwÏ\x06sÜèx\'ÓiØ\x80ýÓ¸a×KM K\x85¶ÖL½fXf\x83Ùº%\x01 $\x99ñkþ\x82¸.\x125\x01ði\x93xC?¢|½ÃK\tzÀ\'\x03¨\x1eðs¨îòz\x10¸ØÄ\x03\x83\x84¢¦ä\x04\x05òiã¨S«>ä]2ÁüSlMü]¾èÌü)\x16%)wI\x90|m#\x1bÍÈÕ\x89Ì-XISà<\x0fÕo\x8fnl\xad³_>üüõQJ\xadì\x81<\x00\x99\x1f\f÷\x9dáv\x9c0\fè¾(FQ$,\x1câ¼\x10,\x7f*R2ò\x88÷ØÃóðpG®ð\\\x1aìßa\x99Ôê\x9f\x8bÏ¿¿¾Íp\x1c{¹Ò@#ü\x86yÉ\x1c©ôX¯´z%³«ë04ã\t\fKå\x11\x8d{Å\x98\x9ck¦A\x9dZwPm×\x87\xad\x96A\\\x93\x8e\x8f\x01]4¥úØ\x8ak¹fT«Zå¢Û5\x83bÐ7\x9afÙ\x18\x9e\x9e«\x95V\x80\x92²·çÑ\x19j\x8f]=ì¸\x9acM\x82©\x1dÈ-wPñ\afDu_\a\x9e©\x9céI\x1cÊp|\x8f[·|/DÄÃ³ça\x1càÔí¥æ¿ï?\x8dïrkKgK\x84\r\x10¥\x91?\x1bþ\aÄ¥H/\x1a\x02\x00\x00'.encode()

response = requests.post('https://zhihu-web-analytics.zhihu.com/api/v3inv2/za/logs/batch', headers=headers, data=data)
print(response)