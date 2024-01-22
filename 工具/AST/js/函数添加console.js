var parser = require("@babel/parser");
var traverse = require("@babel/traverse").default;
var t = require("@babel/types");
var generator = require("@babel/generator").default;
var fs = require("fs");
// 读取js文件
var jscode = fs.readFileSync("./code/codes.js", {
    encoding: "utf-8"
});
// 转换为ast
var ast = parser.parse(jscode);

function addConsoleLog(ast) {
    let counter = 0; // 初始化计数器
    traverse(ast, {
        FunctionDeclaration(path) {
            counter++; // 对每个函数声明计数
            if (counter > 50) {
                // 创建 console.log 表达式
                const consoleLog = t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(t.identifier('console'), t.identifier('log')),
                        [t.numericLiteral(counter)] // console.log 中显示的数字
                    )
                );
                // 将 console.log 插入到函数体的开始位置
                path.node.body.body.unshift(consoleLog);
            }
        }
    });

    return ast;
}
// 添加 console.log 到函数定义
ast = addConsoleLog(ast);
// 将ast转换回js代码
let {code} = generator(ast, {jsescOption: {"minimal": true}});
// 将修改后的代码写入文件
fs.writeFile('./code/demo.js', code, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been saved with console.log statements.');
});
