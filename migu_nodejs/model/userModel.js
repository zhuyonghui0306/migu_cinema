var mongoose =require("mongoose");
var Schema= mongoose.Schema; 
var  obj = {
	username:String,
	password:String,
	email:String
}
var model = mongoose.model("user" ,new Schema(obj));

module.exports = model;