const acorn = require("acorn");
const escodegen = require("escodegen");
const fs = require("fs");

var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});
const ast = acorn.parse(jscode, {ecmaVersion: 6});

// 递归函数，用于将三元运算符表达式替换为 if-else 语句
function replaceTernary(node) {
    if (node.type === 'ConditionalExpression') {
        const {test, consequent, alternate} = node;
        const ifStatement = {
            type: 'IfStatement',
            test,
            consequent: {
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: replaceTernary(consequent)
                    }
                ]
            },
            alternate: {
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: replaceTernary(alternate)
                    }
                ]
            }
        };
        return ifStatement;
    }
    return node;
}

// 替换 AST 中的所有三元运算符表达式
const newAST = replaceTernary(ast.body[0].expression);

// 创建新的 AST 节点
const newNode = {
    type: 'ExpressionStatement',
    expression: newAST
};

// 替换原始的三元运算符节点
ast.body[0] = newNode;

const output = escodegen.generate(ast);
fs.writeFileSync("../code/demo.js", output, {encoding: "utf-8"});
