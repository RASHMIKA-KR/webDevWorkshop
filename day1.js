// GET ---> The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect.

// POST ---> The POST method requests that the server accept the data enclosed in the request as a new object/entity of the resource identified by the URI.

// PUT ---> The PUT method requests that the server accept the data enclosed in the request as a modification to existing object identified by the URI. If it does not exist then the PUT method should create one.

// DELETE ---> The DELETE method requests that the server delete the specified resource.
const express = require("express")
const app=express()

app.use(express.json())

const todolist = [
    {
        name : 'to learn',
        iscompleted : false
    }
];

app.get('/',(req,res)=>{
    res.send(todolist);
  })

app.post('/',(req,res)=>{
    const newTodo = req.body;
    todolist.push(req.body);
    res.send("todo list added successfully")
})

// in the url whatever we pass after / becomes params here if we type 1 after / in localhost:3000 '/:id'

app.put('/:id',(req,res) =>             {
    const {id} = req.params;
    const {name , iscompleted} =req.body;
    if(todolist.length >id){
        todolist[id].name=name;
        todolist[id].iscompleted=iscompleted;
        res.status(200).send(todolist[id]);
    }
    else
    {
        res.status(400).send("Todo not found");
    }

});

app.delete('/:id',(req,res)=>{
    const {id}=req.params;
    if(todolist.length>id)
        {
            todolist=todolist.splice(id,1);
            res.status(200).send("Deleted Successfully");
        }
})
app.listen(3000,()=>{
    console.log("Sever started at 3000")
})



// const express = require("express")
// const app=express()

// app.use(express.json())

// const todolist = [
//     {
//         name : 'to learn',
//         iscompleted : false
//     }
// ];
// app.get('/',(req,res)=>{
//   res.send(todolist);
// })

// app.get('/:id',(req,res)=>{
//     const {id} = req.params;
//     if(todolist.length > id)
//         res.status(200).send(todolist[id]);
//     else
//         res.status(200).send("todo not found");
// })

// app.listen(3000,()=>{
//     console.log("Sever started at 3000")
// })