import requests
cookies = {
                         # 2|1:0|10:1695368078|18:captcha_session_v2|88:bThCUXViNmdoVVR4V3ZlaWtVbmMzcmIzVXY1eEwxaDZLSk9walBRWmFKY2hIaGhoMXpJUFF4ZnYrNTlORTZFRQ==|8dad4d8f32cfb1c45a2be51cfd27fd7e7add6003220d989d951271f1d233efe1
                         # 2|1:0|10:1695368078|18:captcha_session_v2|88:bThCUXViNmdoVVR4V3ZlaWtVbmMzcmIzVXY1eEwxaDZLSk9walBRWmFKY2hIaGhoMXpJUFF4ZnYrNTlORTZFRQ==|8dad4d8f32cfb1c45a2be51cfd27fd7e7add6003220d989d951271f1d233efe1
    'captcha_session_v2': '2|1:0|10:1695374398|18:captcha_session_v2|88:bDVucFdsUzEwVHJabVhvUXE4aWowZVRzNjFQRm9TTWVVeTMwMVR2S3RKcXhlNXpTb29tNVltVEhLeUdidU5CTg==|9fc146cb4ef2f3ae3be25aa581b595d2c05d56de492d285f5ae5696eba588998',
                         # 2|1:0|10:1695368086|18:captcha_session_v2|88:b0lLWlJKR1dqaExCU0I4MVRDMVEvYTdKekcyTWkwMGZia1NmZ0xiZHlqUW92aVpPTllxMDBUaEJjckNTUW1uOA==|b339a9c34ec804db6843efd6b4fe08646c088a1ce2d8a81e363a8572e62fae42
                         # 2|1:0|10:1695368086|18:captcha_session_v2|88:b0lLWlJKR1dqaExCU0I4MVRDMVEvYTdKekcyTWkwMGZia1NmZ0xiZHlqUW92aVpPTllxMDBUaEJjckNTUW1uOA==|b339a9c34ec804db6843efd6b4fe08646c088a1ce2d8a81e363a8572e62fae42
}

headers = {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'x-zse-83': '3_3.0',
}

data = '+6eaRZdlgWZjgfB6MIly=3aOzdkfQri/ISjylbm4slX7p3WduBGrh3Dq7YT+PxLGJOeSnPK4Y/m/9=R+Q2TtPmb0uckRp=eDq5Vme64zg6pkKYl2e1ZAfZP6HppmscVxKR=RYXa3KV7aXDzL9bReRcJlNQd0VkpkNeKauiKLIz7pMs0Wji8c7t1RRVpL=eDiqWr49m9tHD+Hu+RTI18PNCYSqgPygyRWGuJFXhnD5yK5vfjhPx016QTtZsI635ycta7aM2pDtjUU0c1M/UQ3NPBm3/vOjw2PYdD9M8tzxs7Y13jfPmBuU4QwVTFiKeNtB51DFPz3DY7gQvrpeNHgY4ox+Yh1D7CnY8Djr1kf+XOkUSQTtolk+xoI6Gv4hCYUZsxwOCLlt7w9nmlG9PLSlF3wTF6t=peDQbbo4QHrZ9JRrKTWFBRShR2PV=92Qv3z0tuRUe6s71WyV4pcHpx6ODZm'

response = requests.post('https://www.zhihu.com/api/v3/oauth/sign_in', cookies=cookies, headers=headers, data=data)
print(response.text)
# 2|1:0|10:1695369263|18:captcha_session_v2|88:NG9LU25pOU5KODFuQVhiT1k5b1p1bVc3OFRzVm83eHRhSnlneTN1VjZPN0RDMDQ1d1ZBL3krdlJTbnRpLzJ3Zw==|ea3e362bf5872c2108ab5d56c52251402c1ee3302d0637387091d8ace8eb2d03
# 2|1:0|10:1695369263|18:captcha_session_v2|88:NG9LU25pOU5KODFuQVhiT1k5b1p1bVc3OFRzVm83eHRhSnlneTN1VjZPN0RDMDQ1d1ZBL3krdlJTbnRpLzJ3Zw==|ea3e362bf5872c2108ab5d56c52251402c1ee3302d0637387091d8ace8eb2d03

# 2|1:0|10:1695373773|18:captcha_session_v2|88:d3oyamZmM1RRZWN0aFljMEs5QlEvYU1nQjhxSzE3Z3lOMTdlT293L1drMWZ2bEUwWHd4YnBOM3hRVDlnQVQ4bA==|77f857d2e9c2f6b44b47a8e764acd05419bd171dee30538fa44c6d6ac5207b55
# 2|1:0|10:1695373699|18:captcha_session_v2|88:c3l1aFNCdnVPQWgrbkl4dXFXS2p3TEJ6TGMxcGV6bnVxK01BbFFXWTZpL2Foc29ucFI3N1pVdkl6ZkIvNjlSRA==|ee9e569dea82b4cd259def45e05716f3bc84c2c4d564eb4ed85341f5f670c256',
