const mongoose = require('mongoose');
const schema = mongoose.Schema
const UserSchema = new  schema({
    username:{
        type:String,
        require: true,unique:true
    } ,
    password:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        require:true
    }
})
module.exports = mongoose.model("users",UserSchema);