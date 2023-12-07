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

let jscode = fs.readFileSync("./test/demo.js", {
    encoding: "utf-8"
});

let ast = parse(jscode);

const visitor =
    {
        EmptyStatement(path)
        {
            path.remove();
        },
    }


//some function code


traverse(ast,visitor);
let {code} = generator(ast);
// console.log(code);

fs.writeFile('./test/newdemo.js', code, (err)=>{});
