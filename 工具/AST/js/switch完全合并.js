var types = require("@babel/types");
const fs = require("fs");
const babel = require('@babel/core');
const {default: generator} = require("@babel/generator");
const generate = require('@babel/generator').default;

// 读取js文件
var jscode = fs.readFileSync("./code/codes.js", {encoding: "utf-8"});

// 转换为ast


function getJump(node, name) {
    //types.isExpressionStatement(node)判断node节点是否是ExpressionStatement(表达式)节点
    if (!types.isExpressionStatement(node)) return;
    // 同node
    let {expression} = node;
    // 判断expression节点是否是AssignmentExpression(赋值表达式)节点
    if (!types.isAssignmentExpression(expression)) return;
    //expression.left.name获取表达式左侧的o
    if (expression.left.name !== name) return;
    return expression.right.value;
}

/**
 * 获取赋值表达式具体的值
 * @param map
 * @param name
 * @param node
 */
function getCaseJump(map, name, node) {
    let {test, consequent} = node;
    let list = [];
    // 取case最后一个表达式
    let con = consequent[consequent.length - 1];
    // 如果是关于o的赋值表达式将具体值返回
    let num = getJump(con, name);
    if (num !== undefined) {
        // 将值放入list
        list.push(num);
    }
    // 判断con节点是否是IfStatement(If控制流语句)节点
    if (types.isIfStatement(con)) {
        let {consequent, alternate} = con;
        let num = getJump(consequent, name);
        if (num !== undefined) {
            list.push(num);
        }
        num = getJump(alternate, name);
        if (num !== undefined) {
            list.push(num);
        }
    }
    map[test.value] = list;
}

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

function controlFlowStructure(si, map, cases, stack = [], body = []) {
    // 不存在map.loop将创建
    if (!map.loop) map.loop = [];
    if (stack.includes(si)) {
        if (map.loop.indexOf(si) === -1) map.loop.push(si);
        return body;
    }
    let item = map[si];
    body = body.concat(cases[si].consequent);
    switch (item.length) {
        case 0:
            return body;
        case 1:
            return controlFlowStructure(item[0], map, cases, stack, body);
        case 2:
            stack.push(si);
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

const MergeCases = {
    SwitchStatement(path) {

        /**
         * discriminan switch循环参数
         * cases 整个switch
         */
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
fs.writeFileSync("./code/demo.js", result.code, {encoding: "utf-8"});
