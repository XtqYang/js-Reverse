import requests


def send_request(stunum, password):
    # 多部分表单数据的边界标识
    boundary = '----WebKitFormBoundaryFkpXPOIIF8tIcLPo'

    # 带有占位符的多部分表单数据模板
    data_template = (
        f'--{boundary}\r\n'
        'Content-Disposition: form-data; name="platformCode"\r\n'
        '\r\n'
        'undefined\r\n'
        f'--{boundary}\r\n'
        'Content-Disposition: form-data; name="appCode"\r\n'
        '\r\n'
        'undefined\r\n'
        f'--{boundary}\r\n'
        'Content-Disposition: form-data; name="stunum"\r\n'
        '\r\n'
        '{stunum}\r\n'
        f'--{boundary}\r\n'
        'Content-Disposition: form-data; name="password"\r\n'
        '\r\n'
        '{password}\r\n'
        f'--{boundary}\r\n'
        'Content-Disposition: form-data; name="time"\r\n'
        '\r\n'
        '604800\r\n'
        f'--{boundary}\r\n'
        'Content-Disposition: form-data; name="openId"\r\n'
        '\r\n'
        'undefined\r\n'
        f'--{boundary}--\r\n'
    )

    # 用于多部分表单数据的头部信息
    headers = {
        'Content-Type': f'multipart/form-data; boundary={boundary}',
    }

    # 使用提供的学号和密码格式化数据
    data = data_template.format(stunum=stunum, password=password)

    # 发送 POST 请求
    response = requests.post('https://sso.lib.nsu.edu.cn/api/login/readerLogin', headers=headers, data=data)

    # 返回响应文本
    return response.text


# 示例使用：
stunum = '21067010821'  # 替换为实际的学号
password = 'qpFyNhegak3W0EsRPDVllQ=='  # 替换为实际的密码
response_text = send_request(stunum, password)
print(response_text)
