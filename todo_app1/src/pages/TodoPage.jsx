import axios from  'axios'
import {useEffect,useState} from 'react';
function TodoPage(){
    const [todolist,setTodolist]=useState([]);
async function getTodoList() {
    const res = await axios.get('http://localhost:3000/api/todo');
    console.log(res)
    setTodolist(res.data);
}
useEffect(()=>{
    getTodoList();
},[]);

    return(
        <div>
            {
                todolist.map((todo,index)=>
                        (<div key={index} style={{display:"flex"}}>
                            <input type="checkbox"
                            checked={todo.iscompleted ? true : false}/>
                            <p>{todo?.name}</p>
                        </div>)
                )
            }
        </div>
    )
}
  export default TodoPage
  //state variable has getter and setter