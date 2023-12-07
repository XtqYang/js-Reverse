// 将 js 代码解析为 AST。
var parser = require("@babel/parser");
//遍历 AST 并在需要时进行修改
var traverse = require("@babel/traverse").default;
//用于创建、检查和修改 AST 节点的属性和类型
var t = require("@babel/types");
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

/***
 *应该存在检测，替换后请求失败
 */

// traverse(ast, {
//     Literal(path) {
//         if (path.node.extra && path.node.extra.raw && path.node.extra.rawValue) {
//             // let value = path.node.extra.rawValue;
//             let value = path.node.value;
//             // 检查值类型
//             if (typeof value !== 'string') {
//                 value = String(value);
//             }
//             // path.replaceWith用来替换当前path对应的AST节点。// t.stringLiteral会生成一个新的字符串字面量AST节点。
//             path.replaceWith(t.stringLiteral(value));
//         }
//     }
// });
//

function decry_str(ast) {
    //数字与字符还原
    traverse(ast, {
        'StringLiteral|NumericLiteral|DirectiveLiteral'(path) {//迭代字符串|迭代数组匹配--16进制文本还原
            delete path.node.extra; //删除节点的额外部分-触发原始值处理
        },
    });
    return ast;
}


ast = decry_str(ast)//进制数字还原与字符还原
// 将ast转成js代码，{jsescOption: {"minimal": true}} unicode -> 中文
let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./code/demo.js', code, (err) => {
});