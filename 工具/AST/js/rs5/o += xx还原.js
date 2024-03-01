const acorn = require('acorn');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
const fs = require("fs");

var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});

// 解析代码为AST
const ast = acorn.parse(jscode, { ecmaVersion: 2020 });

// 遍历AST并修改
estraverse.replace(ast, {
    enter: function (node) {
        if (node.type === 'SwitchStatement') {
            node.cases.forEach(caseNode => {
                // 处理case内部的直接操作
                processStatements(caseNode.consequent, caseNode);

                // 处理case内部的if语句
                caseNode.consequent.forEach(statement => {
                    if (statement.type === 'IfStatement') {
                        processIfStatement(statement, caseNode);
                    }
                });
            });
        }
    }
});

// 用于处理IfStatement的函数
function processIfStatement(ifStatement, caseNode) {
    // 处理IfStatement的每个分支
    [ifStatement.consequent, ifStatement.alternate].forEach(branch => {
        if (branch && branch.type === 'BlockStatement') {
            processStatements(branch.body, caseNode);
        }
    });
}

// 用于处理语句数组的函数
function processStatements(statements, caseNode) {
    statements.forEach(statement => {
        if (statement.type === 'ExpressionStatement' &&
            statement.expression.type === 'AssignmentExpression' &&
            statement.expression.left.type === 'Identifier' &&
            statement.expression.left.name === 'o') {
            updateExpression(statement.expression, caseNode);
        }
    });
}

// 用于更新表达式的函数
function updateExpression(expression, caseNode) {
    const operation = expression.operator;
    const value = expression.right.value;

    let newValue;
    switch (operation) {
        case '-=':
            newValue = caseNode.test.value - value;
            break;
        case '+=':
            newValue = caseNode.test.value + value;
            break;
        default:
            newValue = value; // 如果不是加法或减法操作，则直接使用原始值
            break;
    }

    // 更新为直接赋值操作
    expression.operator = '=';
    expression.right = {
        type: 'Literal',
        value: newValue,
        raw: String(newValue)
    };
}

// 从修改后的AST生成新代码
const newCode = escodegen.generate(ast);
fs.writeFileSync("../code/demo.js", newCode, {encoding: "utf-8"});
