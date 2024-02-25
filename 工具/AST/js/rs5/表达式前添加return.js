const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const fs = require("fs");
const acorn = require("acorn");
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});


// 解析代码到AST
const ast = acorn.parse(jscode, {ecmaVersion: 2020});

// 遍历AST
estraverse.traverse(ast, {
    enter: function (node, parent) {
        if (node.type === 'IfStatement') {
            // 检查 if 和 else if 块
            [node.consequent, node.alternate].forEach(block => {
                if (block && block.type === 'BlockStatement' && block.body.length > 0) {
                    // 获取第一个语句
                    const firstStatement = block.body[0];
                    if (firstStatement.type === 'ExpressionStatement') {
                        // 检查是否为 SequenceExpression 或其他不需要添加 return 的情况
                        if (firstStatement.expression.type !== 'SequenceExpression') {
                            // 不是 SequenceExpression，检查是否需要跳过添加 return
                            // 如果不需要跳过，执行添加 return 的逻辑
                            // 创建一个返回语句，其返回值为原先的表达式
                            const returnStatement = {
                                type: 'ReturnStatement',
                                argument: firstStatement.expression
                            };
                            // 用新的 return 语句替换原先的表达式语句
                            block.body[0] = returnStatement;
                        }
                        // 如果是 SequenceExpression 或其他特定情况，不添加 return，直接跳过
                    }
                }
            });
        }
    }
});

// 将修改后的AST转换回源代码
const modifiedCode = escodegen.generate(ast)


fs.writeFileSync("../code/demo.js", modifiedCode, {encoding: "utf-8"});
