// module.exports.'____' ---> in specified name it exports the specific content
// this file consists function declarations

// find -- any option that we give here gets filters ----> find({iscompleted:true}) ---> equivalent to select in DBMS 
// to retrieve all avaiable use find{}
const Todo = require('../models/todo');
module.exports.getAllTodos = async (req,res) =>{
    try{
        const todos= await Todo.find({});
        res.status(200).send(todos)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

module.exports.getTodoById = async (req,res) =>{
    const {id} = req.params;
    try{
        const todo = await Todo.findById(id);
        res.status(200).send(todo);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

module.exports.addTodo = async (req,res) =>{
    try{
        const todo = new Todo(req.body);
        await todo.save();
        res.status(200).send({msg:'Todo created successfully'});
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
}

module.exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByIdAndUpdate(id, req.body);
            res.status(200).send({ msg: "Todo updated successfully", todo }); 
            res.status(404).send({ msg: "Todo not found" }); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports.deleteTodo = async (req,res) =>{
    const {id} = req.params;
    try{
        const todo = await Todo.findByIdAndDelete(id)
        if(todo)
            res.status(200).send({msg:"Todo deleted Successfully"})
        else
            res.status(400).send({msg : "Todo not found"})
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

