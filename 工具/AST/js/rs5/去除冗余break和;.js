const parser = require('@babel/parser');
const fs = require("fs");
const acorn = require("acorn");
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
var jscode = fs.readFileSync("../code/codes.js", {encoding: "utf-8"});


const ast = parser.parse(jscode, {
  sourceType: 'module',
  plugins: ['jsx']
});

traverse(ast, {
  SwitchCase(path) {
    const statements = path.node.consequent;
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.type === 'IfStatement') {
        // Check the consequent part of the IfStatement
        const consequentStatements = statement.consequent.body;
        if (consequentStatements.length >= 2 &&
            consequentStatements[consequentStatements.length - 2].type === 'ReturnStatement' &&
            consequentStatements[consequentStatements.length - 1].type === 'BreakStatement') {
          consequentStatements.pop(); // Remove the last statement (break)
        }
        // Check the alternate part of the IfStatement (if it exists and is a BlockStatement)
        if (statement.alternate && statement.alternate.type === 'BlockStatement') {
          const alternateStatements = statement.alternate.body;
          if (alternateStatements.length >= 2 &&
              alternateStatements[alternateStatements.length - 2].type === 'ReturnStatement' &&
              alternateStatements[alternateStatements.length - 1].type === 'BreakStatement') {
            alternateStatements.pop(); // Remove the last statement (break)
          }
        }
      } else if (i < statements.length - 1 &&
                 statement.type === 'ReturnStatement' &&
                 statements[i + 1].type === 'BreakStatement') {
        statements.splice(i + 1, 1); // Remove the BreakStatement following a ReturnStatement
      }
    }
  }
});

const output = generator(ast, {}, jscode).code;
fs.writeFileSync("../code/demo.js", output, {encoding: "utf-8"});
