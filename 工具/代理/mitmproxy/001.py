from mitmproxy import http


# conda activate python3.9
# mitmdump -p 8889 -s 001.py
# 声明全局变量

# 请求
def request(flow: http.HTTPFlow) -> None:
    # 检查是否为特定 URL 的请求
    if flow.request.pretty_url == "https://match2023.yuanrenxue.cn/topic/1":
        # 检查请求体是否为空
        print("原始请求体:", flow.request.text)


# 响应
def response(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_url == "https://download.python-spider.com/match2023/corejs/match2.js":
        # flow.response.encoding = 'utf-8'
        with open("1.js", "r", encoding="utf-8") as file:
            html_content = file.read()
        flow.response.text = html_content
        print("----------------------++++match2.js+++++++---------------------")

# if flow.request.pretty_url == "https://match.yuanrenxue.cn/match/10":
#     global yuanrenxue_59
#     js_content2 = flow.response.text
#     # 使用正则表达式查找变量yuanrenxue_59的值
#     yuanrenxue_59 = int(re.search(r"yuanrenxue_59=(\d{1,4})", js_content2).group(1))
#     print(yuanrenxue_59)
#     if yuanrenxue_59:
#         # 获取yuanrenxue_59的值
#         with open("1.html", "r", encoding="utf-8") as file:
#             html_content = file.read()
#         # 替换yuanrenxue_59的值
#         updated_html_content = re.sub(r"yuanrenxue_59\s*=\s*\d{1,4}", f"yuanrenxue_59 = {yuanrenxue_59}",
#                                       html_content)
#         flow.response.text = updated_html_content
#         with open("1.html", "w", encoding="utf-8") as file:
#             file.write(updated_html_content)
#         flow.response.text = updated_html_content
#         # 赋值给浏览器的本地替换
#         with open(r"C:\Users\21781\OneDrive\桌面\js\match.yuanrenxue.cn\match\10", "w", encoding="utf-8") as file:
#             file.write(updated_html_content)
