const babel = require("@babel/core");
const fs = require("fs");


var jscode = fs.readFileSync("./code/codes.js", {encoding: "utf-8"});


const addBracesPlugin = {
  visitor: {
    IfStatement(path) {
      if (path.node.consequent.type !== "BlockStatement") {
        path.node.consequent = {
          type: "BlockStatement",
          body: [path.node.consequent],
        };
      }
      if (path.node.alternate && path.node.alternate.type !== "BlockStatement") {
        path.node.alternate = {
          type: "BlockStatement",
          body: [path.node.alternate],
        };
      }
    },
  },
};


// 使用Babel转换代码
const output = babel.transform(jscode, { plugins: [addBracesPlugin] });
// 将转换后的代码写入新文件
fs.writeFileSync("./code/demo.js", output.code, {encoding: "utf-8"});
