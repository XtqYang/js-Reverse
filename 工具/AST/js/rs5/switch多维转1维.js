var types = require("@babel/types");
const fs = require("fs");
const babel = require('@babel/core');
const {default: generator} = require("@babel/generator");


/**
 *
 * @param path
 * @param code
 * @returns {*} 多维转换为一维switch
 * @constructor
 */
function Switch_merge(path, code) {
// 读取js文件
//     var jscode = fs.readFileSync(`./code/${path}`, {encoding: "utf-8"});
    var jscode = code || fs.readFileSync(`../code/${path}`, {encoding: "utf-8"});

    function ensureBreakStatement(cases) {
        return cases.map(caseNode => {
            const body = caseNode.consequent;
            if (body.length === 0 || !types.isBreakStatement(body[body.length - 1])) {
                body.push(types.breakStatement());
            }
            return caseNode;
        });
    }

    function getCaseAll(cases, caseAll = []) {
        if (!types.isSwitchStatement(cases[0].consequent[0])) return ensureBreakStatement(cases);
        for (let i = 0; i < cases.length; i++) {
            let caseNode = cases[i];
            if (!types.isSwitchStatement(caseNode.consequent[0])) {
                if (types.isSwitchStatement(cases[i - 1].consequent[0])) caseAll.push(caseNode);
                break;
            }
            caseAll = caseAll.concat(getCaseAll(caseNode.consequent[0].cases));
        }
        return ensureBreakStatement(caseAll);
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
                    mergeSwitch.SwitchStatement(path);
                }
            }
        }]
    });

    return result.code
}

let switchMerge = Switch_merge("codes.js");
// 写入新的文件
fs.writeFileSync("../code/demo.js", switchMerge, {encoding: "utf-8"});

module.exports = {Switch_merge};
