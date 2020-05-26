//引入
var mongoose = require('mongoose')
//连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{ useNewUrlParser: true })
mongoose.connection.once("open",function () {
  console.log("数据库连接成功")
})
mongoose.connection.once("close",function(){
  console.log("数据库连接已经断开~~~");
});
//断开数据库连接
//mongoose.disconnect();
//将mongoose。Schema赋值给一个变量
var Schema = mongoose.Schema

//创建Schema对象
var stuSchema = new Schema({
  name:String,
  age:Number,
  gender: {
    type:String,
    default: "female"
  },
  address:String
})

//通过Schema来创建Model
//Model代表的是数据库中的集合，通过Model才能对数据库进行操作
//mongoose.model(modelName, schema):
//modelName 就是要映射的集合名 mongoose会自动将集合名变成复数
var StuModel = mongoose.model("student",stuSchema)

//向数据库插入一个文档
StuModel.create({
  name:"白骨精",
  age:16,
  address:"白骨洞"
},function (err) {
  if(!err){
    console.log("插入成功~~~");
  }
});




