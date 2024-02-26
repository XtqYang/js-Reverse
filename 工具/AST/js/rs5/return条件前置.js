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
        if (node.type === 'ReturnStatement' && node.argument != null) { // 添加了对 node.argument 的空值检查
            const expressions = node.argument.expressions;
            if (expressions && expressions.length > 1) {
                const lastExpression = expressions.pop(); // 移除并保留最后一个表达式
                parent.body = expressions.map(expr => ({
                    type: 'ExpressionStatement',
                    expression: expr
                })).concat(parent.body); // 将移除的表达式作为新的语句添加到return前
                node.argument = lastExpression; // 将return语句的参数设置为原来的最后一个表达式
            }
        }
    }
});

// 从修改后的AST生成代码
const modifiedCode = astring.generate(ast);

fs.writeFileSync("../code/demo.js", modifiedCode, {encoding: "utf-8"});
