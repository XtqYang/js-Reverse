
const acorn = require('acorn');
const estraverse = require('estraverse');
const astring = require('astring');

// 初始代码
const code = `
function f() {
    if (59 == j) {
        return we = i(l, C++, !0),
            Fe = i(l, C++, n), 
            we instanceof i.constructor
                ? i.apply.call(we, n[0].n, Fe)
                : (
                    be = we[0][we[1]],
                        we[0] instanceof i.g ?
                            i.apply.call(be, n.n, Fe) 
                            : i.apply.call(be, we[0], Fe));
    }
}

`;

// 解析代码到AST
const ast = acorn.parse(code, {ecmaVersion: 2020});

// 遍历AST并修改
estraverse.replace(ast, {
    enter: function (node, parent) {
        if (node.type === 'ReturnStatement') {
            const expressions = node.argument.expressions;
            if (expressions && expressions.length > 1) {
                const lastExpression = expressions.pop(); // 移除并保留最后一个表达式
                parent.body = expressions.map(expr => ({
                    type: 'ExpressionStatement',
                    expression: expr
                })).concat(parent.body); // 将移除的表达式作为新的语句添加到return前
                node.argument = lastExpression; // 将return语句的参数设置为原来的最后一个表达式
            }
        }
    }
});

// 从修改后的AST生成代码
const modifiedCode = astring.generate(ast);

console.log(modifiedCode);
