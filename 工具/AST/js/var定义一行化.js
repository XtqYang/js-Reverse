const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require("fs");

const jscode = fs.readFileSync("./code/codes.js", { encoding: "utf-8" });
const ast = parser.parse(jscode);

function mergeVarDeclarations(ast) {
  let varDeclarations = [];
  traverse(ast, {
    VariableDeclaration(path) {
      if (path.node.kind === "var") {
        varDeclarations.push(...path.node.declarations);
        path.remove();
      }
    },
    Program: {
      exit(path) {
        if (varDeclarations.length > 0) {
          const mergedVarDeclaration = t.variableDeclaration("var", varDeclarations);
          path.node.body.unshift(mergedVarDeclaration);
        }
      },
    },
  });
}

mergeVarDeclarations(ast);

let { code } = generator(ast, { jsescOption: { "minimal": true } });

// 去除换行
code = code.replace(/,\s+/g, ', ');

fs.writeFile('./code/demo.js', code, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
