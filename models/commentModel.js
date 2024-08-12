
//step1: import mongoose
//2:route handler
//export

//1
const mongoose=require("mongoose");

const commentSchema= new mongoose.Schema({
    //post khud h object h to uski id ko ham refer karenge
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"//refernce to post model

    },

    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,

    }
    
});

//commentSchema ko comment naam se export kar liya

module.exports=mongoose.model("Comment",commentSchema);