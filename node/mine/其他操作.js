var fs = require('fs')

/*
验证路径是否存在
 */

/*
fs.exists('笔记.txt',function (exists) {
  console.log(exists)
})

fs.stat('a.txt',function (err,stats) {
  if(!(stats===undefined)){
    console.log(stats)
  }
})
*/


/*
删除文件
*/
/*
fs.unlink('1.txt',(err)=>{
    if(!err){
      console.log('文件已删除')
    }
})*/


/*
列出文件夹
*/

/*fs.readdir('E:/promote/尚硅谷/前端',(err,files)=>{

  console.log(files);
})*/

/*
截取文件
*/
/*fs.truncate('1.txt',10,(err)=>{
  if (!err){
    console.log('截取成功');
  }
})*/

/*
建立目录
*/
fs.mkdir('./one/two',{ recursive: true },(err)=>{
  if(!err){
    console.log('创建成功')
  }else{
    console.log(err);
  }
})
/*fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});*/


/*
修改文件
*/
/*fs.rename('1.txt','2.txt',(err) => {
  if (err) throw err;
  console.log('重命名完成');
});*/

/*
监视文件
*/
/*fs.watchFile('1.txt', (curr, prev) => {
  console.log(`当前的最近修改时间是: ${curr.mtime}`);
  console.log(`之前的最近修改时间是: ${prev.mtime}`);
});*/






/*fs.readFile('笔记.txt',(err,data)=>{
  if(!err){
    fs.writeFile('1.txt',data,()=>{
      console.log(arguments)
    })
  }
})*/

