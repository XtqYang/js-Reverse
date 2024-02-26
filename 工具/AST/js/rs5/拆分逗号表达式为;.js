const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const fs = require('fs');
// 读取js文件
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});

// 使用Babel解析器解析代码
const ast = parser.parse(jscode);

// 遍历AST节点
traverse(ast, {
  enter(path) {
    if (path.node.type === 'SequenceExpression') {
      const expressions = path.node.expressions.map(expression => ({
        type: 'ExpressionStatement',
        expression,
      }));
      path.replaceWithMultiple(expressions);
      path.skip(); // 跳过替换后的节点，防止无限递归
    }
  }
});

// 生成修改后的代码
const output = generator(ast, {}, jscode);

// 写入新的 JavaScript 文件
fs.writeFileSync("../code/demo.js", output.code, {encoding: "utf-8"});
