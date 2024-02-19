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
    if flow.request.pretty_url == "https://download.python-spider.com/match2023/corejs/match3.js":
        # flow.response.encoding = 'utf-8'
        with open("1.js", "r", encoding="utf-8") as file:
            html_content = file.read()
        flow.response.text = html_content
        print("----------------------++++match3.js+++++++---------------------")
    # if flow.request.pretty_url == "https://lf-c-flwb.bytetos.com/obj/rc-client-security/c-webmssdk/1.0.0.22/webmssdk.js":
    #     # flow.response.encoding = 'utf-8'
    #     with open("2.js", "r", encoding="utf-8") as file:
    #         html_content = file.read()
    #     flow.response.text = html_content
    #     print("----------------------++++webmssdk.js+++++++---------------------")
    # if flow.request.pretty_url == "https://trendinsight.oceanengine.com/api/v2/index/get_portrait":
    #     # flow.response.encoding = 'utf-8'
    #     with open("3.js", "r", encoding="utf-8") as file:
    #         html_content = file.read()
    #     flow.response.text = html_content
    #     print("----------------------++++webmssdk.js+++++++---------------------")
