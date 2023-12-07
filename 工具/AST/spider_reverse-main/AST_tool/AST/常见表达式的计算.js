/*
author  : 寒菱
date    : 2020/8/11
desc    : 
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

// let jscode = "var a = 123 + 456;\n" +
//     "var b = 456 - 123;\n" +
//     "var ab= a + b;\n" +
//     "var c = !![];";

let jscode = fs.readFileSync("./test/demo.js", {
    encoding: "utf-8"
});

let ast = parse(jscode);

const visitor =
    {
        "UnaryExpression|BinaryExpression|Identifier"(path){
            let {confident, value} = path.evaluate();
            // console.log(path.type, confident, value)
            if(confident){
                // console.log(path.node);
                path.replaceInline(t.valueToNode(value))

            }
        }
    }


//some function code


traverse(ast,visitor);
let {code} = generator(ast);
// console.log(code);
fs.writeFile('./test/newdemo.js', code, (err)=>{});

// 可替换类型参考 node_modules\@babel\traverse\lib\path\evaluation.js
// _evaluate 方法