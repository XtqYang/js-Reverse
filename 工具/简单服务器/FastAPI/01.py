from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request
from urllib.parse import unquote
import logging
import uvicorn

app = FastAPI()
# 添加 CORS 中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有域，这对于公共 API 是合适的。如果需要更严格的安全控制，请指定允许的域。
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
    # 在日志中记录收到的 GET 请求和查询参数
    logging.info(f"收到了 GET 请求，查询参数为: {query_params}")
    # 将解码后的数据存储到文件
    with open("data.txt", "a") as file:
        file.write(decoded_data)
    return {"message": f"数据 '{decoded_data}' 已存储到文件中"}

@app.post("/callback")
async def handle_post():
    return {"message": "这是一个 POST 响应"}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
