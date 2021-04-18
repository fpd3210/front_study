/*
    定义一个模块用来连接MongoDB数据库
*/

//引入
var mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test" , { useMongoClient: true});

mongoose.connection.once("open",function(){
  console.log("数据库连接成功~~~");
});

mongoose.connection.once("close",function(){
  console.log("数据库连接已经断开~~~");
});

