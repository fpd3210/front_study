var fs = require("fs");

//创建一个可读流
var rs = fs.createReadStream("笔记.txt");
//创建一个可写流
var ws = fs.createWriteStream("aac.txt");

rs.pipe(ws)