const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM("", {runScripts: "dangerously"});
global.window = window;


window.zhiyuan = "1234"
window.BCM = "2222222"

var xxx = ["emhpeXVhbg==", "QkNN"];

function x1(id) {
    return atob(xxx[id]);
}

console.log(window[x1(1)]); // 输出window[x1(1)]的值

//还原
console.log(window[atob("emhpeXVhbg==")])
//混淆
console.log(btoa("zhiyuan"))

console.log(atob("emhpeXVhbg=="))

// ###########################################################
// const jsdom = require("jsdom");
// const {JSDOM} = jsdom;
// const {window} = new JSDOM("", {runScripts: "dangerously"});
// global.window = window;
//
// window.zy = atob
// var xxx = ["enk=", "QkNN"];
//
// function x1(id) {
//     return atob(xxx[id]);
// }
//
// // window[x1(0)] = atob;
//
// // eval(atob("ZnVuY3Rpb24geHh4KCl7cmV0dXJuIGF0b2IoJ01USXonKX0gY29uc29sZS5sb2coeHh4KCkp=="))
// eval(window[x1(0)]("ZnVuY3Rpb24geHh4KCl7cmV0dXJuIGF0b2IoJ01USXonKX0gY29uc29sZS5sb2coeHh4KCkp=="))
// // eval(window[x1(0)])
// // console.log(btoa("function xxx(){return atob('MTIz')} console.log(xxx())"))
// // console.log(btoa("123456"))
// //
// // console.log(atob('MTIz'))

// ########################################AAOOjj混淆#####################################

//希腊文
// var άλφα = "123"
//
//
// function Function1(x) {
//     return eval("(function() {return " + x + "})")
// }
// console.log(Function1("1+1")())

// ########################################JSFUCK混淆#####################################

