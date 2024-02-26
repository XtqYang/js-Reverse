const babel = require('@babel/core');
const parser = require('@babel/parser');
const fs = require("fs");
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});

// 使用 @babel/parser 生成 AST
const ast = parser.parse(jscode);

// 遍历 AST，查找特定的模式，并替换为 if 语句
traverse(ast, {
    enter(path) {
        if (
            path.node.type === 'ExpressionStatement' &&
            path.node.expression.type === 'LogicalExpression' &&
            path.node.expression.operator === '&&'
        ) {
            const test = path.node.expression.left;
            const consequent = babel.types.blockStatement([
                babel.types.expressionStatement(path.node.expression.right),
            ]);
            const ifStatement = babel.types.ifStatement(test, consequent);
            path.replaceWith(ifStatement);
        }
    },
});

// 将修改后的 AST 转换回源代码
const output = generate(ast, {}, jscode);

fs.writeFileSync("../code/demo.js", output.code, {encoding: "utf-8"});
