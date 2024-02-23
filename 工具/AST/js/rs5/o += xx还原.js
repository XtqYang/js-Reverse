const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generate = require('@babel/generator').default;
const fs = require('fs');
// 读取js文件
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});


// 解析代码为AST
const ast = parser.parse(jscode, {
  sourceType: "module",
  plugins: []
});

const updateAssignment = {
  AssignmentExpression(path) {
    // 检查是否为+=操作符
    if (path.node.operator === '+=') {
      // 获取左侧和右侧的节点
      const left = path.node.left;
      const right = path.node.right;

      // 查找当前路径的父SwitchCase节点
      const switchCase = path.findParent((p) => p.isSwitchCase());
      if (switchCase && types.isNumericLiteral(switchCase.node.test)) {
        const caseValue = switchCase.node.test.value;

        // 根据case的值调整右侧的值
        let adjustedValue;
        if (types.isNumericLiteral(right)) {
          adjustedValue = types.numericLiteral(caseValue + right.value);
        } else {
          // 如果右侧不是数字字面量，这里需要更复杂的逻辑来处理
          console.warn("Right side of the assignment is not a numeric literal.");
          return;
        }

        // 创建新的赋值表达式节点
        const newAssignment = types.assignmentExpression("=", left, adjustedValue);

        // 用新节点替换旧节点
        path.replaceWith(newAssignment);
      }
    }
  }
};

// 使用traverse遍历和更新AST
traverse(ast, updateAssignment);

// 将AST转换回代码
const { code } = generate(ast, {});

// 写入新的文件，如果需要
// 写入新的 JavaScript 文件
fs.writeFileSync("../code/demo.js", code, {encoding: "utf-8"});
