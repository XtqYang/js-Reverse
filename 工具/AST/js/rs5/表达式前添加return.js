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
            const blocks = [node.consequent];
            if (node.alternate && node.alternate.type !== 'IfStatement') {
                blocks.push(node.alternate);
            }

            blocks.forEach(block => {
                if (block && block.type === 'BlockStatement' && block.body.length > 0) {
                    // 获取最后一个语句
                    const lastStatement = block.body[block.body.length - 1];
                    // 对于非 IfStatement 的最后一个语句，添加 return
                    if (lastStatement.type !== 'IfStatement') {
                        // 创建一个返回语句，其返回值为原先的表达式（如果是表达式语句的话）
                        if (lastStatement.type === 'ExpressionStatement') {
                            const returnStatement = {
                                type: 'ReturnStatement',
                                argument: lastStatement.expression
                            };
                            // 用新的 return 语句替换原先的表达式语句
                            block.body[block.body.length - 1] = returnStatement;
                        }
                    }
                }
            });
        }
    }
});

// 将修改后的AST转换回源代码
const modifiedCode = escodegen.generate(ast)


fs.writeFileSync("../code/demo.js", modifiedCode, {encoding: "utf-8"});
