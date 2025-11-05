import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {editTask} from '../redux/actions.js'

const EditTask = ({id}) => {
  const [name , setName] = useState("");
  const [date , setDate] = useState("");
  const dispatch = useDispatch()

  const editTheTask = () =>{
    if(name.trim() === "") return;
    dispatch(editTask(name, date, id))
  }
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)}/>
        <button onClick={()=> editTheTask()}>Edit Task</button>
    </div>
  )
}

export default EditTask