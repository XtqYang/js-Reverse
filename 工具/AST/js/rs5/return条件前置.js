const acorn = require('acorn');
const estraverse = require('estraverse');
const astring = require('astring');
const fs = require("fs");

var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});

// 解析代码到AST
const ast = acorn.parse(jscode, {ecmaVersion: 2020});

// 遍历AST并修改
estraverse.replace(ast, {
    enter: function (node, parent) {
        if (node.type === 'ReturnStatement' && node.argument != null && node.argument.type === 'SequenceExpression') { // 检查是否为SequenceExpression
            const expressions = node.argument.expressions;
            if (expressions.length > 1) {
                const lastExpression = expressions.pop(); // 移除并保留最后一个表达式
                const expressionStatements = expressions.map(expr => ({
                    type: 'ExpressionStatement',
                    expression: expr
                }));
                if (parent.type === 'BlockStatement') {
                    // 将移除的表达式作为新的语句添加到return前
                    parent.body = [...expressionStatements, ...parent.body];
                } else if (parent.type === 'SwitchCase') {
                    // 如果父节点是SwitchCase，需要处理不同的结构
                    const returnIndex = parent.consequent.indexOf(node);
                    parent.consequent.splice(returnIndex, 0, ...expressionStatements);
                }
                node.argument = lastExpression; // 将return语句的参数设置为原来的最后一个表达式
            }
        }
    }
});

// 从修改后的AST生成代码
const modifiedCode = astring.generate(ast);

fs.writeFileSync("../code/demo.js", modifiedCode, {encoding: "utf-8"});
