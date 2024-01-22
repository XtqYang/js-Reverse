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
    return {"message": f"数据 '{decoded_data}' 已存储到文件中"}


@app.post("/callback")
async def handle_post(request: Request):
    # 从请求体中获取 JSON 数据
    json_data = await request.json()
    # 假设 JSON 数据是以键 'message' 发送的
    encoded_data = json_data.get("message", {})
    # 确保 encoded_data 是一个字典
    if not isinstance(encoded_data, dict):
        encoded_data = {}
    # 将字典转换为 JSON 字符串
    decoded_data = json.dumps(encoded_data)
    # 处理数据
    process_data(decoded_data)
    return {"message": f"数据 '{decoded_data}' 已存储到文件中"}


def process_data(data):
    # 在日志中记录收到的数据
    logging.info(f"收到的数据为: {data}")
    # 将数据存储到文件
    with open("data.js", "a") as file:
        file.write("a = "+data + "\n")


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
