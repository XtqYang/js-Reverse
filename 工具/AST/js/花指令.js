var parser = require("@babel/parser"); // 用于将 JavaScript 代码解析成 AST
var traverse = require("@babel/traverse").default; // 用于遍历和修改 AST
var t = require("@babel/types"); // 引入用于创建 AST 节点的模块
var generator = require("@babel/generator").default; // 用于将 AST 转换回 JavaScript 代码
var fs = require("fs"); // 用于文件系统操作
const {remove} = require("@babel/traverse/lib/path/removal"); // 用于在沙箱环境中执行代码
// 从文件读取 JavaScript 代码
var jscode = fs.readFileSync("codes.js", {encoding: "utf-8"});
// 将代码转换为 AST
var ast = parser.parse(jscode);

/**
 * 在沙箱环境中执行 JavaScript 代码。
 * @param {string} code - 要执行的 JavaScript 代码字符串。
 * @returns {any} - 执行代码后的返回值。
 */
const vm = require('vm');
function executeInSandbox(code) {
    // 创建沙箱上下文
    const sandbox = {result: null};
    vm.createContext(sandbox);

    // 在沙箱中执行代码
    try {
        vm.runInContext(`result = ${code}`, sandbox);
        return sandbox.result;
    } catch (e) {
        console.error('Error executing code in sandbox:', e);
        return null;
    }
}


/**
 * 字符串函数转换函数
 * @param functionString - 字符串
 * @param args - 参数
 * @returns {*} - 结果
 */
function executeFunctionFromString(functionString, args) {
    // 提取函数体和参数部分
    var functionBody = functionString.substring(functionString.indexOf('{') + 1, functionString.lastIndexOf('}'));
    var params = functionString.substring(functionString.indexOf('(') + 1, functionString.indexOf(')'));

    // 创建新函数
    var func = new Function(params, functionBody);

    // 调用函数并传递参数
    // return func.apply(null, args);
    return func;
}

var _0xObj = {}
var fun_name
// 遍历并修改 AST
traverse(ast, {
    FunctionExpression(path) {
        // 遍历当前 FunctionExpression 节点的子节点
        path.traverse({
            //遍历目标函数(寻找所有对象数据并存储在_0xObj中)
            VariableDeclarator(innerPath) {
                //筛选目标对象
                if (innerPath.node.init && innerPath.node.init.properties && innerPath.node.init.properties.length >= 3) {
                    //获取对象数名
                    fun_name = innerPath.node.id.name;
                    let obj_length = innerPath.node.init.properties.length;
                    //获取对象值
                    for (i = 0; i < obj_length; i++) {
                        //如果值是字符串
                        if (innerPath.node.init.properties[i].value.type === "StringLiteral") {
                            key = innerPath.node.init.properties[i].key.value
                            value = innerPath.node.init.properties[i].value.value
                            _0xObj[key] = value
                        }
                        // 如果值是函数
                        if (innerPath.node.init.properties[i].value.type === "FunctionExpression") {
                            key = innerPath.node.init.properties[i].key.value
                            value = generator(innerPath.node.init.properties[i].value).code;
                            //处理函数
                            _0xObj[key] = value
                        }
                    }
                    //删除当前节点
                    innerPath.remove()
                }
            },
            //替换(字符串类型)
            MemberExpression(param) {
                let key = param.node.property.value;
                if (_0xObj[key] && _0xObj[key].length < 20 && param.node.object.name === fun_name && param.node.property.type === "StringLiteral") {
                    let value1 = _0xObj[key];
                    // console.log(value1)
                    // 创建一个表示 value1 值的节点
                    let newNode;
                    newNode = t.stringLiteral(value1);
                    // 用新节点替换当前的 MemberExpression 节点
                    // console.log(newNode)
                    param.replaceWith(newNode);
                }
            },
            //替换(比较类型><||&&-+)返回true||false
            CallExpression(parameter) {
                if (parameter.node.callee.object.name === fun_name && parameter.node.callee.property.type === "StringLiteral") {
                    `寻找参数key(x,y)`
                    let length = parameter.node.arguments.length;
                    //键key
                    let key = parameter.node.callee.property.value;
                    // console.log(key)
                    //参数(x,y)
                    let codes = [], cons;
                    for (i = 0; i < length; i++) {
                        let arguments = parameter.node.arguments[i];
                        let code = generator(arguments).code;
                        codes.push(code);
                    }
                    // 根据参数数量决定输出格式
                    if (codes.length === 1) {
                        cons = `(${codes[0]})`
                    } else if (codes.length > 1) {
                        cons = `(${codes.join(',')})`
                    }
                    `运行`
                    let value1 = _0xObj[key];
                    let newVar = value1 + cons;
                    // console.log(newVar)
                    // let executeInSandbox1 = executeInSandbox(newVar);
                    // console.log(executeInSandbox1)
                    //替换
                }
            }

            //替换(return _0x35895d()执行参数)

            //替换(return _0x5d94a3(_0x26dddd))

            //替换(return _0xe5b858(_0x2d26a2, _0x13cbc8))


        });
    }
});

console.log(_0xObj)


// 将修改后的 AST 转换回 JavaScript 代码
var gCode = generator(ast).code;
// 将生成的代码写入新文件
fs.writeFileSync("demo.js", gCode, {encoding: "utf-8"});
