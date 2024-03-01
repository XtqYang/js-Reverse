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
                const consequent = caseNode.consequent;
                const lastStatement = consequent.find(statement =>
                    statement.type === 'ExpressionStatement' &&
                    statement.expression.type === 'AssignmentExpression' &&
                    statement.expression.left.type === 'Identifier' &&
                    statement.expression.left.name === 'o'
                );

                if (lastStatement) {
                    const operation = lastStatement.expression.operator;
                    const value = lastStatement.expression.right.value;

                    // 根据操作类型计算新值
                    let newValue;
                    switch (operation) {
                        case '-=':
                            newValue = caseNode.test.value - value;
                            break;
                        case '+=':
                            newValue = caseNode.test.value + value;
                            break;
                        default:
                            // 如果不是加法或减法操作，则直接使用原始值
                            newValue = value;
                            break;
                    }

                    // 更新为直接赋值操作
                    lastStatement.expression.operator = '=';
                    lastStatement.expression.right = {
                        type: 'Literal',
                        value: newValue,
                        raw: String(newValue)
                    };
                }
            });
        }
    }
});

// 从修改后的AST生成新代码
const newCode = escodegen.generate(ast);
fs.writeFileSync("../code/demo.js", newCode, {encoding: "utf-8"});
