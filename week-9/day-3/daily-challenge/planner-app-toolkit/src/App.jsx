import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addTask,toggleTask, removeTask,toggleEdit,editTask} from './toolkit/toolkit.js'
import './App.css'

function App() {
    const tasks = useSelector((state) => state.tasksReducer.tasks)
    const [name , setName] = useState("");
    const [date , setDate] = useState("");
    const [name2 , setName2] = useState("");
    const [date2 , setDate2] = useState("");
    const dispatch = useDispatch()

    const addNewTask = () =>{
      if(name.trim() === "") return;
      dispatch(addTask({name, date}))
    }
    const editTheTask = (id) =>{
    if(name2.trim() === "") return;
    dispatch(editTask({name2, date2, id}))
  }

  return (
    <>
    <h1>Planner Application</h1>
     <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)}/>
        <button onClick={()=> addNewTask()}>Add Task</button>
    </div>
    <div>
      <h2>Tasks List</h2>
    {tasks && tasks.map(item =>{
     return (
      <div key={item.id}>
        {!item.isEditing?(
          <>
          <span 
          onClick={() => dispatch(toggleTask(item.id))}
          style={{
            color: item.completed? "green": "red",
            textDecoration: item.completed? "none": "line-through"
          }}>
            {item.name} {item.date}
          </span> 
          <div>
            <button onClick={() =>dispatch(removeTask(item.id))}>Delete</button>
            <button onClick={() =>dispatch(toggleEdit(item.id))}>Edit</button>
          </div>
        </>
        ):(
          <>
          <div>
              <input type="text" onChange={(e) => setName2(e.target.value)}/>
              <input type="date" onChange={(e) => setDate2(e.target.value)}/>
              <button onClick={()=> dispatch(editTheTask(item.id))}>Edit Task</button>
          </div>
          </>
        )
        
      }
        </div>
      )
    })}
    </div>

    </>
  )
}

export default App
