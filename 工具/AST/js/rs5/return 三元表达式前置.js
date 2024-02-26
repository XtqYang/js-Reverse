const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const t = require('@babel/types');

const fs = require("fs");
const acorn = require("acorn");
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});

// 解析代码为AST
const ast = parser.parse(jscode, {
  sourceType: 'module', // 使用ES模块
  plugins: ['jsx'] // 如果需要，可以开启JSX支持
});

// 遍历AST并修改
// 遍历AST并修改
traverse(ast, {
  ReturnStatement(path) {
    const argument = path.get('argument');
    if (argument.isConditionalExpression()) {
      const test = argument.node.test;
      const consequent = argument.node.consequent;
      const alternate = argument.node.alternate;

      let alternateStatements = [];
      // 检查alternate是否为序列表达式
      if (t.isSequenceExpression(alternate)) {
        // 如果是序列表达式，处理每个表达式
        alternate.expressions.forEach(expression => {
          alternateStatements.push(t.expressionStatement(expression));
        });
      } else {
        // 如果不是序列表达式，直接使用alternate
        alternateStatements.push(t.returnStatement(alternate));
      }

      // 创建一个新的IfStatement节点
      const ifStatement = t.ifStatement(
        test,
        t.blockStatement([t.returnStatement(consequent)]),
        t.blockStatement(alternateStatements)
      );

      // 用IfStatement替换原始的ReturnStatement
      path.replaceWith(ifStatement);
    }
  }
});

// 生成新代码
const output = generator(ast, {}, jscode);
// 假设我们要将转换后的代码写入`transformed.js`文件
fs.writeFileSync("../code/demo.js", output.code, {encoding: "utf-8"});
