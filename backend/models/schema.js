// install and import mongoose
const mongoose=require("mongoose")
// Schema in post batch
const Schema=mongoose.Schema;
// create schema in batch
var SchemaObj=new Schema({
    batchname:{
        type:String,
        required:true,

    },
    fromdate:{
        type:Number,
        required:true
    },
    todate:{
        type:Number,
        required:true,
    }
})
// exports schema 
module.exports=mongoose.model('admin',SchemaObj)