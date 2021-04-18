var fs = require('fs')




fs.open('file2.txt','w',function (err,fd) {
    if(!err){
      fs.write(fd,"这是异步写入的内容",function (err) {
        if(!err){
          console.log("写入成功···")
        }
        
        fs.close(fd,function (err) {
          if(!err){
            console.log('写入成功关闭文件···')
          }
        })
      })
    }else{
      console.log(err)
    }
})


console.log('向下执行')