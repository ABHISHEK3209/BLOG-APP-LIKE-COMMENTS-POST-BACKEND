
const mongoose=require("mongoose");

require("dotenv").config();

const connectWithDb =()=>{
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }
    )
  // also working  mongoose.connect(process.env.DATABASE_URL)
.then(console.log("DB successfully connected"))
.catch((error) =>{
    console.log("problem in db");
    console.log(error);
    process.exit(1);//abnormal termination
}
)
};
 module.exports=connectWithDb;