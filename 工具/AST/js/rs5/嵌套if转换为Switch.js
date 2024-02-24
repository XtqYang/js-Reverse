var types = require("@babel/types");
const fs = require('fs');
const babel = require('@babel/core');
const generate = require('@babel/generator').default;


/**
 *
 * @param a
 * @param b
 * @returns {*} 返回多维switch代码
 */
function if_to_Switch(a, b) {
// 读取js文件
    var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});

    function ifToSwitchNode(path) {
        function list_right(list) {
            // 如果list的倒数第二个元素存在右值，则返回该值，否则返回默认值666
            if (list[list.length - 2].right) {
                return types.valueToNode(list[list.length - 2].right.value);
            }
            return types.valueToNode(666); // 默认情况
        }

        function getNodes(path, list = []) {
            // 非IfStatement情况，处理else部分，将其转换为SwitchCase节点
            if (!path.isIfStatement()) {
                list.push({
                    type: "SwitchCase",
                    // 在转换的SwitchCase的consequent数组中添加break语句
                    consequent: [...path.node.body, types.breakStatement()],
                    test: list_right(list)
                })
                return list;
            }

            const items = ["test", "consequent"];
            items.forEach(n => {
                let temp = path.get(n);
                list.push(temp.node);
            });

            // 递归处理alternate（else/else if部分）
            return getNodes(path.get("alternate"), list);
        }

        function reductionTest(test) {
            // 根据操作符调整case的test值
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

        let nodes = getNodes(path);

        let cases = [], count = Math.floor(nodes.length / 2);
        if (nodes.length % 2) cases.push(nodes.pop()); // 处理可能存在的default case

        for (let i = 0; i < count; i++) {
            let consequent = nodes.pop().body;
            // 确保每个case的最后都有一个break语句
            consequent.push(types.breakStatement());
            cases.push({
                type: "SwitchCase",
                consequent: consequent,
                test: reductionTest(nodes.pop())
            })
        }

        return {
            type: "SwitchStatement",
            discriminant: path.get("test.left").node,
            cases: cases.reverse()
        }
    }

    aaa = 0
    const ifToSwitch = {
        IfStatement(path) {

            let {node} = path;
            let {alternate} = node;
            if (alternate === null || path.node.test.type !== "BinaryExpression") return;
            aaa++;
            // 类型过虑
            if (path.node.test.type !== "BinaryExpression") return;
            // if (path.node.test.right.type !== "NumericLiteral") return;
            //
            if (path.node.test.expressions) return;
            if (path.node.test.operator === null) return;
            if (path.node.test.operator === "==") {
            } else {
                if (path.node.test.operator !== "<") return;
            }

            const astNode = path.node;
            const {code} = generate(astNode);
            console.log(generate(path.node.test).code)

            if (aaa > a && aaa < b) {
                console.log(aaa)
                let newNode = ifToSwitchNode(path);
                path.replaceWith(newNode);
            }

            // 用构造的SwitchStatement节点替换当前的IfStatement节点
        }
    }

    const result = babel.transform(jscode, {
        plugins: [{
            visitor: {
                IfStatement(path) {
                    debugger;
                    // 调用转换函数
                    ifToSwitch.IfStatement(path);
                }
            }
        }]
    });
    // 写入新的文件
    // fs.writeFileSync("../code/demo.js", result.code, {encoding: "utf-8"});
    return result.code;
}

if_to_Switch()
module.exports = {if_to_Switch};
