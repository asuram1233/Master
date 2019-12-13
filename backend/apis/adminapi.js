// install and import express
const exp=require("express")
const adminapi=exp.Router()


// install and import body-parser
const bodyParser=require("body-parser")
// user body parser
adminapi.use(bodyParser.json())
// install and import mongoose
const mongoose=require("mongoose")
// import Schema 
const Schema=require("../models/schema")



// connection to cloud data base url
var dburl="mongodb+srv://vasukbkr:sivajI@123@cluster0-xrnqp.mongodb.net/IMS?retryWrites=true&w=majority"

mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
const connection=mongoose.connection;
// check for connected event
connection.on('connected',()=>{
    console.log("connection  database Successfully");
    
})
// check for disconnected event
connection.on('disconnected',()=>{
    console.log("connection di");
    
})
// check for error event
connection.on('error',(err)=>{
    console.log("error in database connection",err);
    
})

// post method in req handler
adminapi.post("/post",(req,res)=>{
    console.log("data in adminapi is",req.body);
    
    // Schema.findOne({batchname:req.body.batchname}).exec()
    // .then().catch()
    
})





























































// exports in adminapi
module.exports=adminapi;


