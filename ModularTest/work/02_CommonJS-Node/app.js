/**
 1. 定义暴露模块:
 module.exports = value;
 exports.xxx = value;
 2. 引入模块:
 var module = require(模块名或模块路径);
 */

let uniq = require('uniq');

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');


module1.foo();
module2();
module3.bar();

let result = uniq(module3.arr);
console.log(result)