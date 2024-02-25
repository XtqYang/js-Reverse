const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;

// 原始代码
const code = ` if (59 == j) {
    (we = i(l, C++, (m = i(l, C, -3), C = m.i, m.n), n, !0), Fe = i(l, C++, (m = i(l, C, -3), C = m.i, m.n), n), we instanceof i.constructor ? i.apply.call(we, n[0].n, Fe) : (be = we[0][we[1]], we[0] instanceof i.g ? i.apply.call(be, n.n, Fe) : i.apply.call(be, we[0], Fe)));
  } `;

// 使用Babel解析器解析代码
const ast = parser.parse(code);

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
const output = generator(ast, {}, code);

console.log(output.code);
