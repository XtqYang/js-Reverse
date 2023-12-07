import re


def add_console_log_to_functions(js_content):
    # 正则表达式来匹配函数定义
    # 这个正则表达式简单地匹配形如 'function functionName() {' 的模式
    function_pattern = r'(function\s+\w+\s*\([^)]*\)\s*{)'

    # 初始化计数器
    i = 1

    # 定义一个替换函数
    def replace_function(match):
        nonlocal i
        # 在函数定义后添加 console.log(i)
        replacement = f"{match.group(1)}\n  console.log({i});"
        i += 1
        return replacement

    # 使用正则表达式替换所有匹配的函数定义
    modified_content = re.sub(function_pattern, replace_function, js_content)

    return modified_content


with open('2.js', 'r', encoding="utf-8") as file:
    original_js = file.read()

# 对示例内容应用函数
modified_js_content = add_console_log_to_functions(original_js)
print(modified_js_content)