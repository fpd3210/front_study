var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/mongoose_test");
mongoose.connection.once("open",function () {
  console.log("数据库连接成功~~~");
});

var Schema = mongoose.Schema;

var stuSchema = new Schema({

  name:String,
  age:Number,
  gender:{
    type:String,
    default:"female"
  },
  address:String

});

var StuModel = mongoose.model("student" , stuSchema);


/*
	Document 和 集合中的文档一一对应 ， Document是Model的实例
		通过Model查询到结果都是Document
 */

//创建一个Document
var stu = new StuModel({
  name:"奔波霸",
  age:48,
  gender:"male",
  address:"碧波潭"
});

/*
	document的方法
 		Model#save([options], [fn])
 */

/*
stu.save((err)=>{
  if(!err){
    console.log("保存成功。。。。")
  }
})*/

StuModel.findOne({name:"奔波霸"},(err,docs)=>{
  if(!err){
    //console.log(docs)
    /*
		 	update(update,[options],[callback])
		 		- 修改对象
		 	remove([callback])
		 		- 删除对象
		 */
    /*docs.update({$set:{age:111}},(err)=>{
      if(!err){
        console.log("修改成功")
      }
    })*/
    /*  docs.age = 100
      docs.save()
    */
    
    docs.remove((err)=>{
      if(!err){
        console.log("删除成功")
      }
    })
    
    
  }
})
