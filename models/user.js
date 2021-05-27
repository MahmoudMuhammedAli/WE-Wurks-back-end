const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String,required: true ,unique: true },
  password: String,
  isManager:Boolean,
});

UserSchema.pre ("save" ,function (callback)  {
  this.email==="mahmoud@gmail.com"?  this.isManager = true:this.isManager=false
  callback();
})



const User = mongoose.model("User", UserSchema);
module.exports = User;
