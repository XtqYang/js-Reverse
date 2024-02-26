const acorn = require("acorn");
const escodegen = require("escodegen");
const estraverse = require("estraverse");
const fs = require("fs");
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});
const ast = acorn.parse(jscode, { ecmaVersion: 2020 });

// 这部分代码执行完成后需要将返回的代码放入 表达式前添加return.js 进行下一步添加return操作否则代码逻辑是错误的
// 注意:与拆分逗号表达式为;.js组合使用
let ternaryExpressionCount = 0;

// 使用estraverse遍历AST
estraverse.replace(ast, {
    enter: function (node) {
        // 找到三元表达式节点
        if (node.type === 'ConditionalExpression') {
            // 递增三元表达式计数器
            ternaryExpressionCount++;

            // 1  100
            if (ternaryExpressionCount <= 100) {
                // 构建对应的if-else语
                const ifStatement = {
                    type: 'IfStatement',
                    test: node.test,
                    consequent: {
                        type: 'BlockStatement',
                        body: [{
                            type: 'ExpressionStatement',
                            expression: node.consequent
                        }]
                    },
                    alternate: null // 先设置为null，稍后处理
                };
                // 递归处理嵌套的三元表达式
                function handleAlternate(alternate) {
                    if (alternate.type === 'ConditionalExpression') {
                        // 如果是嵌套的三元表达式，则构建新的IfStatement
                        return {
                            type: 'IfStatement',
                            test: alternate.test,
                            consequent: {
                                type: 'BlockStatement',
                                body: [{
                                    type: 'ExpressionStatement',
                                    expression: alternate.consequent
                                }]
                            },
                            alternate: handleAlternate(alternate.alternate) // 递归处理
                        };
                    } else {
                        // 如果不是三元表达式，直接返回表达式语句
                        return {
                            type: 'BlockStatement',
                            body: [{
                                type: 'ExpressionStatement',
                                expression: alternate
                            }]
                        };
                    }
                }
                // 处理alternate部分
                ifStatement.alternate = handleAlternate(node.alternate);
                console.log(ternaryExpressionCount)
                return ifStatement; // 用构建好的ifStatement替换原来的三元表达式
            }
        }
    }
});

// 使用escodegen将修改后的AST转换回JavaScript代码
const output = escodegen.generate(ast);

// 假设我们要将转换后的代码写入`transformed.js`文件
fs.writeFileSync("../code/demo.js", output, {encoding: "utf-8"});
