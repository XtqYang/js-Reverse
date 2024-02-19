var types = require("@babel/types");
const fs = require("fs");
const babel = require('@babel/core');
const {default: generator} = require("@babel/generator");
// 读取js文件
var jscode = fs.readFileSync("./code/codes.js", {encoding: "utf-8"});
// 转换为ast


function getCaseAll(cases, caseAll = []) {
    if (!types.isSwitchStatement(cases[0].consequent[0])) return cases;
    for (let i = 0; i < cases.length; i++) {
        let caseNode = cases[i];
        if (!types.isSwitchStatement(caseNode.consequent[0])) {
            if (types.isSwitchStatement(cases[i - 1].consequent[0])) caseAll.push(caseNode);
            break;
        }
        caseAll = caseAll.concat(getCaseAll(caseNode.consequent[0].cases));
    }
    return caseAll;
}

const mergeSwitch = {
    SwitchStatement(path) {
        if (path.parentPath.isSwitchCase()) return;
        let nextPath = path.get("cases.0.consequent.0");
        if (!types.isSwitchStatement(nextPath)) return;
        path.node.cases = getCaseAll(path.node.cases);
    }
}

const result = babel.transform(jscode, {
  plugins: [{
    visitor: {
      SwitchStatement(path) {
        // 这里调用你的转换函数
        mergeSwitch.SwitchStatement(path);
      }
    }
  }]
});

// 写入新的文件
fs.writeFileSync("./code/demo.js", result.code, {encoding: "utf-8"});
