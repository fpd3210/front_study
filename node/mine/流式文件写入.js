/*
	同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 */
var fs = require("fs");

//流式文件写入
//创建一个可写流
/*
	fs.createWriteStream(path[, options])
		- 可以用来创建一个可写流
		- path，文件路径
		- options 配置的参数
 */


var ws = fs.createWriteStream('hello4.txt',{flags:'w' })

ws.once('open',function () {
  console.log('流被打开了')
})

ws.once('close',function () {
  console.log('流被关闭了')
})



ws.write('今天天气不错')
ws.end('关闭读取方')

/*
ws.close('关闭接受方')
*/
