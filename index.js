const express = require("express")  //imports express
const mongoose =require("mongoose")     //imports mongoose
const app=express() // creates a application uaing the imported express
const todoRouter=require("./router/todo")
app.use(express.json())

const cors=require('cors')
app.use(cors())

app.use('/api/todo',todoRouter)

const url="mongodb://localhost:27017/web_dev"
mongoose.connect(url)
.then((_)=>{
    console.log("Connected Succesfully");
}).catch((err)=>{
    console.log(err.message);
})



app.listen(3000,()=>{
    console.log("Server started at 3000")
})


                                                                                               