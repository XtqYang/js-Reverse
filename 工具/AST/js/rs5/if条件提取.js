var types = require("@babel/types");
const fs = require('fs');
const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

// 读取 JavaScript 文件
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});

// 使用 Babel 解析代码
var ast = babel.parse(jscode);

// 遍历 AST，查找不符合特定条件形式的 if 语句
traverse(ast, {
    IfStatement(path) {
        const astNode = path.node;
        const {code} = generate(astNode);
        debugger;
        console.log(generate(path.node.test).code)
    }
});

// 生成修改后的代码
var result = generate(ast, {}, jscode);

// 写入新的 JavaScript 文件
fs.writeFileSync("../code/demo.js", result.code, {encoding: "utf-8"});
