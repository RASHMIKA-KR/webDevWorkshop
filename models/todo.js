// this file consist of the schema of the mongodb database that we will connect to

// to learn more about the definitions in mongodb -- visit mongoose db docs

const mongoose = require('mongoose')
const Todomodel = new mongoose.Schema({
    name:{
        type:String,
    },
    iscompleted:{
        type: Boolean,
        default:false
    }
})

module.exports=mongoose.model("Todo", Todomodel)

