var fs = require('fs');
const {VM} = require('vm2');
const vm = new VM();
let data = fs.readFileSync("./code.js", "utf8");
vm.run(data);
