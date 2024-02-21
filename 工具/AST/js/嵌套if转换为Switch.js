var types = require("@babel/types");
const fs = require('fs');

const babel = require('@babel/core');
const generate = require('@babel/generator').default;

// 读取js文件
var jscode = fs.readFileSync("./code/codes.js", {encoding: "utf-8"});

// 转换为ast
function ifToSwitchNode(path, pathStr = "test.left") {

    function list_right(list) {
        if (list[list.length - 2].right) {
            return types.valueToNode(list[list.length - 2].right.value);
        }
        return types.valueToNode(666);
    }

    function getNodes(path, list = []) {
        const astNode = path.node;
        const {code} = generate(astNode);

        // push else设置为case
        if (!path.isIfStatement()) {
            // "case 2:if(o<3){o+=243;}else{L=Y||l.length;o+=4}"
            // try {
            //     console.log(list[list.length - 2].right.value)
            // }catch (e) {
            //     debugger;
            // }

            list.push({
                type: "SwitchCase",
                consequent: path.node.body,
                test: types.valueToNode(list[list.length - 2].right.value)
            })
            return list;
        }
        // push if条件和if内容
        items.forEach(n => {
            // o < 2 得到if循环条件
            //"{if(o<1){o+=88}else{v.v=!1;o+=226}}" 得到if条件的循环体
            let tmep = path.get(n);
            list.push(tmep.node);
        })
        // 获取else部分,再次执行
        return getNodes(path.get("alternate"), list);
    }

    function reductionTest(test) {
        switch (test.operator) {
            case "<":
                // test.right.value获取符号右边的值
                test = types.valueToNode(test.right.value - 1)
                break;
            case "===":
                test = types.valueToNode(test.right.value)
                break;
        }
        return test;
    }

    // test循环条件
    // consequent循环体
    let items = ["test", "consequent"];
    let nodes = getNodes(path);

    let cases = [], count = Math.trunc(nodes.length / items.length);
    // 从 nodes 数组中移除最后一个元素，并将该元素添加到 cases 数组的末尾
    if (nodes.length % 2) cases.push(nodes.pop());
    for (let i = 0; i < count; i++) {
        cases.push({
            type: "SwitchCase",
            consequent: nodes.pop().body,
            test: reductionTest(nodes.pop())
        })
    }
    return {
        // 构造switch
        type: "SwitchStatement",
        // 获取switch条件
        discriminant: path.get(pathStr).node,
        cases: cases.reverse()
    }

}
var aaa = 0;
const ifToSwitch = {
    IfStatement(path) {
        // debugger;
        let {node} = path;
        let {alternate} = node;
        if (alternate === null) return;
        // console.log(path.node.test.type)
        // if (path.node.test.type === "Identifier") return;
        // if (path.node.test.type === "MemberExpression") return;
        if (path.node.test.type !== "BinaryExpression") return;
        aaa++;
        // if(aaa<10) return;
        console.log(aaa)
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
