var fs = require('fs')

var fd = fs.openSync('hello.txt','w')

fs.writeSync(fd,'今天天气真好',2)