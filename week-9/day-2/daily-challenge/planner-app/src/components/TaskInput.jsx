import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {addTask} from '../redux/actions.js'

const TaskInput = () => {
  const [name , setName] = useState("");
  const [date , setDate] = useState("");
  const dispatch = useDispatch()

  const addNewTask = () =>{
    if(name.trim() === "") return;
    dispatch(addTask(name, date))
  }
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)}/>
        <button onClick={()=> addNewTask()}>Add Task</button>
    </div>
  )
}

export default TaskInput