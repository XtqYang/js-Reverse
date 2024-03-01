import json

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request
from urllib.parse import unquote
import logging
import uvicorn

app = FastAPI()
# 添加 CORS 中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有域
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有方法
    allow_headers=["*"],  # 允许所有头部
)


@app.get("/callback")
async def handle_get(request: Request):
    # 从请求中获取查询参数
    query_params = request.query_params
    encoded_data = query_params.get("message", "默认消息")
    # 对编码的字符串进行解码
    decoded_data = unquote(encoded_data)
    # 处理数据
    process_data(decoded_data)
    return "get请求成功"


@app.post("/callback")
async def handle_post(request: Request):
    # 从请求体中获取 JSON 数据
    json_data = await request.json()
    process_data(json_data['message'])
    return "post请求成功"


def process_data(data):
    # 将数据转换为 JSON 格式的字符串
    data_str = json.dumps(data)
    # 将转换后的字符串写入文件
    with open("data.js", "a") as file:
        file.write("a = " + data_str + "\n")


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
