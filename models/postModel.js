
//step1: import mongoose
//2:route handler
//export

//1
const mongoose=require("mongoose");

const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
        //likes array ki form m hoga jisme bahut saree likes honge
     likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
     }],
     comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
     }]
    
    
});

//commentSchema ko comment naam se export kar liya

module.exports=mongoose.model("Post",postSchema);