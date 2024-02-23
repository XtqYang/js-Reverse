const fs = require('fs');

const utils = require('./嵌套if转换为Switch.js');
const utils2 = require('./switch多维转1维.js');
let ifToSwitch = utils.if_to_Switch(0, 300);
// console.log(ifToSwitch)
let switchMerge = utils2.Switch_merge("demo.js", ifToSwitch);
// 定义输出文件的路径
const outputPath = 'D:\\code\\pythonProject\\逆向\\工具\\代理\\mitmproxy\\1.js';
// 将字符串写入文件
fs.writeFileSync(outputPath, switchMerge);

