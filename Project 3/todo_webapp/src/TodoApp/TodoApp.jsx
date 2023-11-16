
import { useState } from "react";
import './TodoApp.css'
function TodoApp(){
  const [todos,setTodos]=useState([])
  const [task,setTask]=useState("")
  

  function addTodo(){
    if(task){
      setTodos([...todos, {title:task,status:false}])
      setTask("")
    }
  }

  function toggleStatus(index){
    const newTodo=[...todos]
    newTodo[index].status=!newTodo[index].status;
    setTodos(newTodo)
  }

  function removeTodo(index){
    const fileredTodos=todos.filter((_,ind)=>ind!==index)
    setTodos(fileredTodos)
  }
  
  return(
    <>
    <div className="search">
      <input 
      type="text"
       placeholder="Enter your task.."
       value={task}
       onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
    </div>
    <ul>
       {
        todos.map((item,index)=>(
          <li key={index}>
            <h3>{index+1+'.'+' '+item.title}</h3>
            <p>Status: {item.status?'Completed':'Pending'}</p>
            <div className="buttons">
              <button onClick={()=>toggleStatus(index)}>Update Status</button>
              <button onClick={()=>removeTodo(index)}>Remove</button>
            </div>
            
          </li>
        ))
       }
    </ul>
    </>
  )
}

export default TodoApp;
