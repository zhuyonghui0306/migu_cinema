
var express =require("express");
var userModel = require("../model/userModel");
var router = express.Router();
router.post("/",function(req,res){
	userModel.find({
		email:req.body.email
	},function(error,info){
		if(info.length==0){
			userModel.create({
				username:req.body.username,
				password:req.body.password,
				email:req.body.email
			},function(error,info){
				if(!error){
				res.json({result:1})
				}
			})
		}else{
					res.json({result:0})

		}
	})
})



module.exports=  router;
