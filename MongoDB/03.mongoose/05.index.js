require("./tools/conn_mongo")
var student  = require("./models/student")

student.find({},(err,docs)=>{
  if(!err){
    console.log(docs)
  }
})
