// 将 js 代码解析为 AST。
var parser = require("@babel/parser");
//遍历 AST 并在需要时进行修改
var traverse = require("@babel/traverse").default;
//用于创建、检查和修改 AST 节点的属性和类型
var types = require("@babel/types");
// 将修改后的 AST 转换回 JavaScript 代码
var generator = require("@babel/generator").default;
// 读取和写入文件
var fs = require("fs");
//读取js文件
var jscode = fs.readFileSync("./code/codes.js", {
    encoding: "utf-8"
});
//转换为ast
var ast = parser.parse(jscode);


// 遍历 AST 中的节点

traverse(ast, {
    FunctionDeclaration(path) {
        if (path.node.body && path.node.body.body[0]) {
            if (path.node.body.body[0].type === 'TryStatement') {
                const tryBody = path.node.body.body[0];
                //shift删除节点
                path.node.body.body.shift();
                //unshift插入
                path.node.body.body.unshift(...tryBody.block.body);
            }
        }
    }
});


// 将修改后的 AST 转换为代码
var gCode = generator(ast).code;
// 写入新的文件
fs.writeFileSync("./code/demo.js", gCode, {encoding: "utf-8"});
