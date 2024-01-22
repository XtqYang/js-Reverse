import base64
import re

from jsmin import jsmin
from mitmproxy import http


# conda activate python3.9
# mitmdump -p 8889 -s mitmdump_.py
# 声明全局变量


def yuanrenxue():
    global js_content_escaped
    global decoded_string
    # 解密
    unicode_code_point = ""
    for i in range(318024):
        unicode_code_point += chr(ord(modified_string[i]) - i % yuanrenxue_59 - 50)
    # 解码
    decoded_string = base64.b64decode(unicode_code_point).decode('utf-8')
    with open('1.js', 'w') as file:
        file.write(decoded_string)


def w2ksph():
    # # 读取并处理第一个文件
    # with open("1.js", "r", encoding="gbk") as file:
    #     html_content = file.read()
    html_content = decoded_string
    pattern1 = r"_yrxa\$o\(_yrxtJ1\)\{var _yrxmbl=(\d{1,10})"
    pattern2 = r"_yrxVhD\(_yrxtJ1\)\{return (\d{1,10})"
    pattern3 = r"_yrxM3E\(_yrxvAM\)\{var _yrxC2_=(\d{1,10})"
    match1 = int(re.search(pattern1, html_content).group(1)) + yuanrenxue_59
    match2 = int(re.search(pattern2, html_content).group(1)) + yuanrenxue_59
    match3 = int(re.search(pattern3, html_content).group(1)) + yuanrenxue_59
    print("--------------------------------------------------------------------------------")
    print("----------------------match1 = " + match1.__str__() + "---------------------------------------")
    print("----------------------match2 = " + match2.__str__() + "---------------------------------------")
    print("----------------------match3 = " + match3.__str__() + "---------------------------------------")
    print("--------------------------------------------------------------------------------")

    # 读取并处理第二个文件
    with open("2.js", "r", encoding="utf-8") as file:
        html_content = file.read()
    pattern1 = r"_yrxa\$o\(_yrxtJ1\) \{\n\s*var _yrxmbl =(.*?);"
    pattern2 = r"_yrxVhD\(_yrxtJ1\) \{\n\s*return (.*?)}"
    pattern3 = r"_yrxM3E\(_yrxvAM\) \{\n\s*var _yrxC2_ = (.*?);"
    # 执行替换
    html_content = re.sub(pattern1, r"_yrxa$o(_yrxtJ1) {\n\t\t var _yrxmbl =" + str(match1) + ";", html_content,
                          flags=re.DOTALL)
    html_content = re.sub(pattern2, r"_yrxVhD(_yrxtJ1) {\n\t\t return " + str(match2) + r"\n\t}", html_content,
                          flags=re.DOTALL)
    html_content = re.sub(pattern3, r"_yrxM3E(_yrxvAM) {\n\t\t var _yrxC2_ = " + str(match3) + r";", html_content,
                          flags=re.DOTALL)

    # 将修改后的内容写回第二个文件
    with open("2.js", "w", encoding="utf-8") as file:
        file.write(html_content)


# def w2ksph1():
#     with open("2.js", 'r', encoding="utf-8") as file:
#         original_js = file.read()
#     compressed_js = jsmin(original_js)
#     with open("4.js", 'w', encoding="utf-8") as file:
#         file.write(compressed_js)


def w2ksph2():
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

    # if flow.request.pretty_url == "https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js":
    #     with open("jquery.min.js", "r", encoding="utf-8") as file:
    #         html_content = file.read()
    #     flow.response.text = html_content

    # if flow.request.pretty_url == "https://match.yuanrenxue.cn/api/offset":
    #     js_content = flow.response.text
    #     print("请求api/offset="+js_content.__str__())
    #     js_content = "js_content"+";debugger"
    #     flow.response.text = js_content

    # 检查请求的 URL 是否符合指定域名
    if flow.request.pretty_url == "https://match.yuanrenxue.cn/stati/mu/rsnkw2ksph":
        flow.response.encoding = 'gbk'
        js_content = flow.response.text
        flow.response.text = js_content
        # 去除前5个字符和最后一个字符
        modified_string = js_content[17:-1]
        # 解密
        yuanrenxue()
        # 提取1.js关键值替换到2.js(部分解密便于动态修改代码)
        w2ksph()
        # 压缩
        w2ksph2()
        # w2ksph1()

    if flow.request.pretty_url == "https://match.yuanrenxue.cn/match/10":
        global yuanrenxue_59
        js_content2 = flow.response.text
        # 使用正则表达式查找变量yuanrenxue_59的值
        yuanrenxue_59 = int(re.search(r"yuanrenxue_59=(\d{1,4})", js_content2).group(1))
        print("--------------------------------------------------------------------------------")
        print(
            "----------------------yuanrenxue_59 = " + yuanrenxue_59.__str__() + "---------------------------------------")
        print("--------------------------------------------------------------------------------")

        if yuanrenxue_59:
            # 获取yuanrenxue_59的值
            with open("10.html", "r", encoding="utf-8") as file:
                html_content = file.read()
            # 替换yuanrenxue_59的值
            updated_html_content = re.sub(r"yuanrenxue_59\s*=\s*\d{1,4}", f"yuanrenxue_59 = {yuanrenxue_59}",
                                          html_content)
            with open("10.html", "w", encoding="utf-8") as file:
                file.write(updated_html_content)
            flow.response.text = updated_html_content
            # 赋值给浏览器的本地替换
            # with open(r"C:\Users\21781\OneDrive\桌面\js\match.yuanrenxue.cn\match\10", "w", encoding="utf-8") as file:
            #     file.write(updated_html_content)

