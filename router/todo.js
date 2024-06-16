// this has function call using router
// '.' means current folder, '..' means parent folder (that is one step back)
const express = require("express")  // require means it imports express to our file
const router =  express.Router();   // creates a router application and saves it to router variable

const {
    getAllTodos,
    getTodoById ,
    addTodo,
    updateTodo,
    deleteTodo
}=require('../controller/todo.js');

router.get('/',getAllTodos)
router.get('/:id',getTodoById)
router.post('/',addTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)

module.exports = router // exports as default equivalent to export default(this is only on client side)