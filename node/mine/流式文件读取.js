/*
	流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

var fs = require("fs");

//创建一个可读流
var rs = fs.createReadStream("笔记.txt");
//创建一个可写流
var ws = fs.createWriteStream("aa.txt");

rs.once('open',function () {
  console.log('可读流打开')
})
rs.once('close',function () {
  console.log('可读流关闭。。')
})

ws.once('open',function () {
  console.log('写入流打开')
})
ws.once('close',function () {
  console.log('写入流关闭。。')
})


//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on('data',function (data) {
  ws.write(data)
})