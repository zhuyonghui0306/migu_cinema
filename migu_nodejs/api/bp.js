
var express =require("express");
var userModel = require("../model/userModel");
var router = express.Router();
router.post("/",function(req,res){

	// req.body
	// 
	userModel.find({
		email:req.body.email,
		password:req.body.password
	},function(error, result){
		//result 数组长度  0？用户或密码  1
		if(result.length==0){
			res.json({rel:0})
		}else{
res.json({rel:1})
		}
 	})
})




module.exports=  router;
