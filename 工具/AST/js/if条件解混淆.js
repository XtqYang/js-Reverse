var types = require("@babel/types");
const fs = require('fs');
const babel = require('@babel/core');
const generate = require('@babel/generator').default;


var jscode = fs.readFileSync("./code/codes.js", {encoding: "utf-8"});



const if_disambiguation = {
    IfStatement(path) {
        // 检查if语句的测试条件是否包含逗号表达式
        if (path.node.test.type === 'SequenceExpression') {
            const expressions = path.node.test.expressions;
            const lastIndex = expressions.length - 1;

            // 保留最后一个表达式作为条件
            const conditionExpression = expressions[lastIndex];

            // 提取除了最后一个表达式之外的所有表达式，并将它们插入到if语句之前
            const precedingExpressions = expressions.slice(0, lastIndex);
            precedingExpressions.forEach(expression => {
                path.insertBefore(types.expressionStatement(expression));
            });

            // 创建一个唯一的标识符作为条件变量
            const conditionVar = path.scope.generateUidIdentifier("condition");

            // 创建一个变量声明，其初始化为最后的表达式（实际的条件）
            const varDeclaration = types.variableDeclaration("var", [types.variableDeclarator(conditionVar, conditionExpression)]);

            // 将变量声明插入到当前if语句之前
            path.insertBefore(varDeclaration);

            // 将if语句的测试条件替换为新的变量标识符
            path.node.test = conditionVar;
        }
    }
};

const result = babel.transform(jscode, {
    plugins: [{
        visitor: if_disambiguation
    }]
});

// 将转换后的代码写入新文件
fs.writeFileSync("./code/demo.js", result.code, {encoding: "utf-8"});
