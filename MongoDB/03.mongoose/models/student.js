require("mongoose")
/*
  用来定义student模型
*/

//引入
var mongoose = require("mongoose");

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
//定义模型
var StuModel = mongoose.model("student" , stuSchema);



/*
exports.model = StuModel
导入 var stu = require(./models/student).model
*/

module.exports = StuModel