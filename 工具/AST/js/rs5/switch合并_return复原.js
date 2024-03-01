const fs = require("fs");
const acorn = require("acorn");
const astring = require("astring");
const estraverse = require("estraverse");

// 假设的JavaScript代码字符串
var jscode = `
function f() {
    switch (o) {
        case 3:
            z = C++;
            return a + b;
            break
        case 9:
            if (n) {
                return i(l, C++, n);
            } else {
                m = i(l, ++C, -3);
                return i(l, C++, n);
            }
            ;
            break
        case 12:
            try {
                if (n.a) {
                    return ne;
                }
            } catch (e) {
                if (n.a) {
                    return te;
                }
            } finally {
                re = n.a;
                if (n.a) {
                    return ae;
                }
                n.a = re;
            }
            o = 212;
            break
        case 54:
            o = 3;
            break;
        case 34:
            o = 12;
            break;
        case 200:
            if (-2 == f) {
                o = 9;
            } else {
                o = 54;
            }
            break;
        case 212:
            return;
    }
}
`;

// 使用acorn解析JavaScript代码，生成AST
const ast = acorn.parse(jscode, {ecmaVersion: 2020});

// 存储所有case的主体内容
let caseContentsMap = new Map();

// 第一次遍历AST，记录所有case的主体内容
estraverse.traverse(ast, {
    enter: function (node) {
        if (node.type === 'SwitchCase' && node.test) {
            // 记录当前case的值和主体内容
            caseContentsMap.set(node.test.value, node.consequent);
        }
    }
});

// 第二次遍历AST，查找case中包含特定赋值语句并替换其内容
estraverse.replace(ast, {
    enter: function (node, parent) {
        // 检查节点是否为SwitchCase且具有test属性（即case值）
        if (node.type === 'SwitchCase' && node.test) {
            // 遍历当前case的内容，查找特定的赋值语句
            for (let consequent of node.consequent) {
                if (consequent.type === 'ExpressionStatement' &&
                    consequent.expression.type === 'AssignmentExpression' &&
                    consequent.expression.right.type === 'Literal' &&
                    caseContentsMap.has(consequent.expression.right.value)) {
                    // 如果找到特定的赋值语句且其值对应之前记录的某个case的值，则用该case的内容替换当前case的内容
                    return {
                        type: 'SwitchCase',
                        test: node.test,
                        consequent: caseContentsMap.get(consequent.expression.right.value)
                    };
                }
            }
        }
    }
});

// 使用astring根据修改后的AST生成新的代码字符串
const modifiedCode = astring.generate(ast);

console.log(modifiedCode);

// 将修改后的代码写回文件（根据你的需求进行调整）
// fs.writeFileSync("../code/demo.js", modifiedCode, {encoding: "utf-8"});
