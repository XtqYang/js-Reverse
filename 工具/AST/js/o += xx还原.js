var types = require("@babel/types");
const fs = require('fs');
const babel = require('@babel/core');
const generate = require('@babel/generator').default;
// 读取js文件
var jscode = fs.readFileSync("./code/codes.js", {encoding: "utf-8"});


const RestoreJump = {
  AssignmentExpression(path) {
    let { operator, left, right } = path.node;
    if (!(operator[1] === "=" && types.isNumericLiteral(right))) return;
    let caseNode = path.findParent((p) => p.isSwitchCase());
    let { consequent, test } = caseNode.node;
    // 构建 ast 节点  o -= xxx  改为 o - xxx ,
    let _node = types.assignmentExpression(
      "=",
      left,
      types.valueToNode(
        operator[0] === "-"
          ? test.value - right.value
          : test.value + right.value
      )
    );
    path.replaceInline(_node);
  },
};

const result = babel.transform(jscode, {
    plugins: [{
        visitor: {
            IfStatement(path) {
                // 这里调用你的转换函数
                RestoreJump.AssignmentExpression(path);
            }
        }
    }]
});
// 写入新的文件
fs.writeFileSync("./code/demo.js", result.code, {encoding: "utf-8"});
