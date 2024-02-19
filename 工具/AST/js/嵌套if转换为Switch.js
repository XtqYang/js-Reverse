var types = require("@babel/types");
const fs = require('fs');

const babel = require('@babel/core');
const {default: generator} = require("@babel/generator");
// 读取js文件
var jscode = fs.readFileSync("./code/codes.js", {encoding: "utf-8"});

// 转换为ast
function ifToSwitchNode(path, pathStr = "test.left") {
    function getNodes(path, list = []) {

        if (!path.isIfStatement()) {
            list.push({
                type: "SwitchCase",
                consequent: path.node.body,
                test: types.valueToNode(list[list.length - 2].right.value)
            })
            return list;
        }
        items.forEach(n => {
            let tmep = path.get(n);
            list.push(tmep.node);
        })
        return getNodes(path.get("alternate"), list);
    }

    function reductionTest(test) {
        switch (test.operator) {
            case "<":
                test = types.valueToNode(test.right.value - 1)
                break;
            case "===":
                test = types.valueToNode(test.right.value)
                break;
        }
        return test;
    }
    debugger;
    let items = ["test", "consequent"];
    let nodes = getNodes(path);

    let cases = [], count = Math.trunc(nodes.length / items.length);
    if (nodes.length % 2) cases.push(nodes.pop());
    for (let i = 0; i < count; i++) {
        cases.push({
            type: "SwitchCase",
            consequent: nodes.pop().body,
            test: reductionTest(nodes.pop())
        })
    }
    return {
        type: "SwitchStatement",
        discriminant: path.get(pathStr).node,
        cases: cases.reverse()
    }

}

const ifToSwitch = {
    IfStatement(path) {
        let {node} = path;
        let {alternate} = node;
        if (alternate === null) return;
        let newNode = ifToSwitchNode(path);
        // 替换当前节点
        path.replaceInline(newNode)
    }
}

const result = babel.transform(jscode, {
    plugins: [{
        visitor: {
            IfStatement(path) {
                // 这里调用你的转换函数
                ifToSwitch.IfStatement(path);
            }
        }
    }]
});
// 写入新的文件
fs.writeFileSync("./code/demo.js", result.code, {encoding: "utf-8"});
