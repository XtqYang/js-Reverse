var types = require("@babel/types");
const fs = require("fs");
const babel = require('@babel/core');
const {default: generator} = require("@babel/generator");
const generate = require('@babel/generator').default;

// 读取js文件
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});


/**
 * 判断节点类型不符合指定类型直接返回空
 * @param node case里面的一个赋值表达式
 * @param name switch循环参数名o
 * @returns {*}
 */

function getJump(node, name) {
    //判断node节点是否是ExpressionStatement(表达式)节点， 如console.log()
    if (!types.isExpressionStatement(node)) return;
    // 当你调用 types.isExpressionStatement(node) 时，如果 node 代表 o = 88; 这个整体（包括分号），它返回 true。而当你访问 node 的 expression 属性并检查它是否是 AssignmentExpression 时，因为这个属性指向 o = 88 这个赋值表达式，types.isAssignmentExpression(expression) 也返回 true。
    let {expression} = node;
    // 判断expression节点是否是AssignmentExpression(赋值表达式)节点 如 a =3
    if (!types.isAssignmentExpression(expression)) return;
    //expression.left.name获取表达式左侧的o是否于switch的o相同
    if (expression.left.name !== name) return;
    return expression.right.value;
}

/**
 * 获取赋值表达式具体的值
 * @param map 是一个空{}
 * @param name 是switch(o)的循环参数
 * @param node  遍历的case节点
 */
function getCaseJump(map, name, node) {
    const {code} = generate(node);
    // test 是case 0的值0
    // consequent 整个case
    let {test, consequent} = node;
    let list = [];
    // 取case最后一个表达式
    let con = consequent[consequent.length - 1];
    // 如果是关于o的赋值表达式将返回其值
    let num = getJump(con, name);
    if (num !== undefined) {
        // 将值放入list
        list.push(num);
    }
    // 判断con节点是否是IfStatement(If控制流语句)节点
    if (types.isIfStatement(con)) {
        //consequent if主体部分
        //alternate if为else代码
        let {consequent, alternate} = con;
        // if入getJump
        let num = getJump(consequent, name);
        if (num !== undefined) {
            list.push(num);
        }
        // else入getJump
        num = getJump(alternate, name);
        if (num !== undefined) {
            list.push(num);
        }
    }
    //test 是case 0的值0 ，list是对应赋值表达式的值
    map[test.value] = list;
}

/**
 *
 * @param arr1 if主体部分
 * @param arr2 if为else代码
 * @returns {[]}
 */
function removeDuplicates(arr1, arr2) {
    let result = []; // 存储删除的元素的数组

    for (let i = 0; i < arr1.length; i++) {
        let found = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]); // 将相同的元素存储到结果数组中
                arr2.splice(j, 1); // 删除arr2中的相同元素
                found = true;
                break;
            }
        }
        if (found) {
            arr1.splice(i, 1); // 删除arr1中的相同元素
            i--; // 由于删除了元素，需要调整索引
        }
    }
    return result;
}

/**
 *
 * @param si switch(o)参数相关联o=2的值
 * @param map 当前switch下所有case表达式值集合
 * @param cases 所有switch节点数据
 * @param stack 空数组
 * @param body 空数组
 * @returns {[]|*} 返回重构后的节点
 */
function controlFlowStructure(si, map, cases, stack = [], body = []) {
    // 不存在map.loop将创建
    if (!map.loop) map.loop = [];
    // 检测si这个值/状态之前是否已经被考虑过了
    if (stack.includes(si)) {
        if (map.loop.indexOf(si) === -1) map.loop.push(si);
        return body;
    }
    // 根据si的值寻找switch对应的循环体item
    let item = map[si];
    // body.concat 添加到body数组的末尾
    body = body.concat(cases[si].consequent);
    switch (item.length) {
        case 0:
            return body;
        case 1:
            return controlFlowStructure(item[0], map, cases, stack, body);
        case 2:
            stack.push(si);
            // blockStatement(块语句)
            body[body.length - 1].consequent = types.blockStatement(
                controlFlowStructure(item[0], map, cases, stack, [])
            );
            if (map.loop.includes(si)) {
                let {test, consequent} = body[body.length - 1];
                body[body.length - 1] = types.whileStatement(test, consequent);
                body = body.concat(
                    controlFlowStructure(item[1], map, cases, stack, [])
                );
            } else {
                body[body.length - 1].alternate = types.blockStatement(
                    controlFlowStructure(item[1], map, cases, stack, [])
                );
                body = body.concat(
                    removeDuplicates(
                        body[body.length - 1].consequent.body,
                        body[body.length - 1].alternate.body
                    )
                );
            }
            stack.pop();
            return body;
    }
}

/**
 *
 * @type {{SwitchStatement(*): void}}
 */
const MergeCases = {
    /**
     *
     * @param path switch节点
     * @constructor
     */
    SwitchStatement: function (path) {
        //discriminant switch循环参数
        //cases 整个switch
        const {discriminant, cases} = path.node;
        // 获取循环参数名o
        const name = discriminant.name;
        // 获取循环参数具体值start = 2 var o = e || 2;
        let binding = path.scope.getBinding(name);
        let start = binding.path.node.init.right.value;
        let map = {};
        // 遍历当前switch下的所有case
        for (let i = 0; i < cases.length; i++) {
            getCaseJump(map, name, cases[i]);
        }
        // 替换当前节点
        path.replaceInline(controlFlowStructure(start, map, cases));
    },
};


const result = babel.transform(jscode, {
    plugins: [{
        visitor: {
            SwitchStatement(path) {
                const astNode = path.node;
                const {code} = generate(astNode);
                debugger;
                // 这里调用你的转换函数
                MergeCases.SwitchStatement(path);
            }
        }
    }]
});

// 写入新的文件
fs.writeFileSync("../code/demo.js", result.code, {encoding: "utf-8"});

// (function i(l, s, f, n, t, r, a, u) {
//     var o = e || 5;
//     for (; ;) {
//         switch (o) {
//             case 7:
//                 K++;
//                 o = 10;
//                 break;
//             case 8:
//                 return 18;
//             case 9:
//                 o = 7;
//                 break;
//             case 10:
//                 if (C = s || 0, p = f || l.length, j = l[C++], m = i(l, C, -2), C = m.i, m.n, x = 0, 13 == j || 48 == j ? x = 1 : 49 == j ? x = 2 : 23 == j && (x = 3), 13 == j || 48 == j || 49 == j || 23 == j) {
//                     o = 8;
//                 } else {
//                     o = 8;
//                 }
//                 break;
//             case 5:
//                 v.v = !1;
//                 o = 9;
//                 break;
//         }
//     }
// })([99, 116, 105, 118, 101]);


////(function i(l, s, f, n, t, r, a, u) {
// //     var o = e || 5;
// //     v.v = !1;
// //     o = 9;
// //     o = 7;
// //     K++;
// //     o = 10;
// //     if (C = s || 0, p = f || l.length, j = l[C++], m = i(l, C, -2), C = m.i, m.n, x = 0, 13 == j || 48 == j ? x = 1 : 49 == j ? x = 2 : 23 == j && (x = 3), 13 == j || 48 == j || 49 == j || 23 == j) {
// //         o = 8;
// //     } else {
// //         o = 8;
// //     }
// //     return 18;
// // })([99, 116, 105, 118, 101]);