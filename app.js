// Basic Lib Import
const express=require('express');
const router=require('./src/route/api');
const app=new express();
const ratelimit=require('express-rate-limit');
const helmet=require('helmet');
const hpp=require('hpp');
const cors=require('cors');
const mongoose=require('mongoose');


// Cors Open
app.use(cors());

// Security Implementation
app.use(helmet());
app.use(hpp());
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({extended:true}));
const limiter=ratelimit({windowMs:15*60*1000,max:3000});
app.use(limiter);


//Database Connection Impement


//let URL="mongodb://localhost:27017/taskmern5"
//let OPTION={user:"",pass:"",autoIndex:true}
mongoose.connect("mongodb+srv://himelhimo269:4K5GZdIBZR2o5J54@todo-web.4clzcne.mongodb.net/taskmern5").then((res)=>{

  console.log("Database Connected");
}).catch((err)=>{
  console.log(err);

})
//Route Implement
app.use("/api",router);


app.use("*",(req,res)=>{
  res.status(404).json({data:"Not found"})
})

module.exports=app;





