const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
const fs = require("fs");
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});


// 注意使用后想要将生成的函数手动放在同作用域下
let ast = esprima.parseScript(jscode);

// 遍历 AST，寻找所有的 ForInStatement 节点
estraverse.replace(ast, {
    enter: (node, parent) => {
        if (node.type === 'ForInStatement') {
            // 生成随机函数名
            const functionName = generateRandomFunctionName();

            // 创建新的函数声明节点
            const functionDeclaration = {
                type: 'FunctionDeclaration',
                id: {type: 'Identifier', name: functionName},
                params: [],
                body: {
                    type: 'BlockStatement',
                    body: [
                        // 创建一个返回语句，返回原始 ForInStatement 的 right 部分
                        {
                            type: 'ReturnStatement',
                            argument: node.right // 使用原始 ForInStatement 的 right 部分
                        }
                    ]
                },
                generator: false,
                expression: false,
                async: false
            };

            // 将新函数添加到 AST 的顶部
            ast.body.unshift(functionDeclaration);

            // 将原始 ForInStatement 的 right 部分替换为对新函数的调用
            node.right = {
                type: 'CallExpression',
                callee: {type: 'Identifier', name: functionName},
                arguments: [] // 新函数不接受任何参数
            };
        }
    }
});

// 使用 escodegen 将修改后的 AST 转换回代码字符串
let modifiedCode = escodegen.generate(ast, {
    format: {
        compact: true, // 设置为 true 以生成更紧凑的代码
        // 其他可能的格式化选项，如需要
    }
});
fs.writeFileSync("../code/demo.js", modifiedCode, {encoding: "utf-8"});

// 生成随机函数名的函数
function generateRandomFunctionName() {
    const prefix = 'func_';
    const randomSuffix = Math.random().toString(36).substring(2, 7);
    return prefix + randomSuffix;
}
