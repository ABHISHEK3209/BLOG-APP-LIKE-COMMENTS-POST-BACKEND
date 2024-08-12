
// const express=require("express");
// const app=express();

// app.listen(3330,()=>{
//     console.log("seccessfully");
// })


// //set deafult browser
// app.get("/",(rew,res)=>{
//     res.send(`<h1>homepage</h1>`);
// })

//server create karna ha
const express=require("express");
const app=express();

require("dotenv").config();
const  PORT =process.env.PORT ||4000;
//middleware
app.use(express.json());

//routes
const blog=require("./routes/blog");
//mount
app.use("/api/v1",blog);

//fetch dab
const connectWithDb=require("./config/database");
connectWithDb();

//start the server
 app.listen(PORT,()=>{
    console.log(`App is started at port no: ${PORT}`);
 })
 
//default route seeting homepage pe ye likha hoga

 app.get("/",(req,res)=>{
    res.send(`<h1>homepage</h1>`);
})