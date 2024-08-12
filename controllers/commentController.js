
//import model
const Post=require('../models/postModel');
const Comment=require('../models/commentModel');

//business logic
//create karna ke liye
//m1:ham ak create function banate the
//m2:yaha use karenge yisme khud k ak object banyenge comment naame se and uspe save() function k use karenge
  

exports.createComment= async (req,res)=>{
    try{
        //fetch data from req body
        const{post,user,body}=req.body;
         // create a comment object
         const comment = new Comment({
          post , user , body
         });
         //save the new comment into the database
         const saveComment=await comment.save();
         //find the post by id and the new comment to its comment array
         //ab jo upar newcooment aa gaya usko POst m bhi to update karna hoga na to usko serch by id and then update
         const updatedPost=await Post.findByIdAndUpdate(post,{ $push: { comments: saveComment._id}},{new:true})
         .populate("comments")//populate the comment array with comment document upar wale se sirf id aayega .populate karne par document aa jayega
         .exec();//execute kar diya
         //new:true means jo updated file h wo return ho reha h if not then purena wala hi update hoga
res.json({
    post:updatedPost,
});
    }

    catch(error)
    { return res.status(500).json({
        error:"error while creating comment",
    });

    }
} 