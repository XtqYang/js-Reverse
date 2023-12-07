import re
from mitmproxy import http
import re
import base64
import requests

import re
import base64
import requests


# mitmdump -p 8889 -s 001.py
# 声明全局变量


def yuanrenxue():
    new_value = yuanrenxue_59
    html_content = modified_string

    # 解密
    def unicode_code():
        ksph = html_content
        unicode_code_point = ""
        for i in range(318024):
            # for i in range(3):
            #     print("i="+str(i))
            #     print(ksph[i])
            #     print(ord(ksph[i]) - i % new_value - 50)
            #     print(chr(ord(ksph[i]) - i % new_value - 50))
            unicode_code_point += chr(ord(ksph[i]) - i % new_value - 50)
            # print(unicode_code_point)
            # print("---")
        return unicode_code_point

    # print(unicode_code())
    # 解码
    decoded_bytes = base64.b64decode(unicode_code())
    decoded_string = decoded_bytes.decode('utf-8')
    # print(decoded_string)
    # # # 转义
    global js_content_escaped
    # js_content_escaped = decoded_string.replace("\\", "\\\\").replace("'", "\\'")
    js_content_escaped = decoded_string
    # print(js_content_escaped)
    with open('1.js', 'w') as file:
        file.write(js_content_escaped)


def w2ksph():
    with open("1.js", "r", encoding="gbk") as file:
        html_content = file.read()
    pattern1 = r"_yrxa\$o\(_yrxtJ1\)\{var _yrxmbl=(\d{1,10})"
    pattern2 = r"_yrxVhD\(_yrxtJ1\)\{return (\d{1,10})"
    pattern3 = r"_yrxM3E\(_yrxvAM\)\{var _yrxC2_=(\d{1,10})"
    match1 = int(re.search(pattern1, html_content).group(1)) + yuanrenxue_59
    match2 = int(re.search(pattern2, html_content).group(1)) + yuanrenxue_59
    match3 = int(re.search(pattern3, html_content).group(1)) + yuanrenxue_59
    w2ksph2(match1, match2, match3)
    w2ksph3()


def w2ksph2(match1, match2, match3):
    with open("2.js", "r", encoding="utf-8") as file:
        html_content = file.read()
    pattern1 = r"_yrxa\$o\(_yrxtJ1\) \{\n\s*var _yrxmbl =(.*?);"
    pattern2 = r"_yrxVhD\(_yrxtJ1\) \{\n\s*return (.*?)}"
    pattern3 = r"_yrxM3E\(_yrxvAM\) \{\n\s*var _yrxC2_ = (.*?);"
    # 执行替换，注意使用 re.DOTALL
    html_content = re.sub(pattern1, r"_yrxa$o(_yrxtJ1) {\n\t\t var _yrxmbl =" + str(match1) + ";", html_content,
                          flags=re.DOTALL)
    html_content = re.sub(pattern2, r"_yrxVhD(_yrxtJ1) {\n\t\t return " + str(match2) + r"\n\t}", html_content,
                          flags=re.DOTALL)
    html_content = re.sub(pattern3, r"_yrxM3E(_yrxvAM) {\n\t\t var _yrxC2_ = " + str(match3) + r";", html_content,
                          flags=re.DOTALL)
    # 将修改后的内容写回文件
    with open("2.js", "w", encoding="utf-8") as file:
        file.write(html_content)


def w2ksph3():
    with open('2.js', 'r', encoding="utf-8") as file:
        original_js = file.read()
    # 移除换行符
    compressed_js = original_js.replace('\n', '')
    # 可选：移除多余的空格（只保留一个空格）
    compressed_js = ' '.join(compressed_js.split())
    js_content_escaped = compressed_js.replace("\\", "\\\\").replace("'", "\\'")
    with open('3.js', 'w', encoding="utf-8") as file:
        file.write(js_content_escaped)


def response(flow: http.HTTPFlow) -> None:
    global modified_string
    # 检查请求的 URL 是否符合指定域名
    if flow.request.pretty_url == "https://match.yuanrenxue.cn/stati/mu/rsnkw2ksph":
        flow.response.encoding = 'gbk'
        js_content = flow.response.text
        flow.response.text = js_content
        # 去除前5个字符和最后一个字符
        modified_string = js_content[17:-1]
        # 替换eval核心
        yuanrenxue()
        w2ksph()

        # updated_html_content2 = re.sub(r"aaaaaaaa\s*=\s*.*?;debugger;",f"aaaaaaaa = '{js_content4}';debugger;",js_content3)
        # with open("1.html", "w", encoding="utf-8") as file:
        #     file.write(updated_html_content2)

    if flow.request.pretty_url == "https://match.yuanrenxue.cn/match/10":
        global yuanrenxue_59
        js_content2 = flow.response.text
        # 使用正则表达式查找变量yuanrenxue_59的值
        yuanrenxue_59 = int(re.search(r"yuanrenxue_59=(\d{1,4})", js_content2).group(1))
        print(yuanrenxue_59)
        if yuanrenxue_59:
            # 获取yuanrenxue_59的值
            with open("1.html", "r", encoding="utf-8") as file:
                html_content = file.read()
            # 替换yuanrenxue_59的值
            updated_html_content = re.sub(r"yuanrenxue_59\s*=\s*\d{1,4}", f"yuanrenxue_59 = {yuanrenxue_59}",
                                          html_content)
            flow.response.text = updated_html_content
            with open("1.html", "w", encoding="utf-8") as file:
                file.write(updated_html_content)
            flow.response.text = updated_html_content
            # 赋值给浏览器的本地替换
            with open(r"C:\Users\21781\OneDrive\桌面\js\match.yuanrenxue.cn\match\10", "w", encoding="utf-8") as file:
                file.write(updated_html_content)
