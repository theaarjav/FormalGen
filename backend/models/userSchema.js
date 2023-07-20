const mongoose=require('mongoose');

const UserSchema={
    googleId:{
        type:String, 
        required:true
    },
    email:{
        type:String,
        required:true
    }
} 

module.exports = mongoose.model("User", UserSchema);