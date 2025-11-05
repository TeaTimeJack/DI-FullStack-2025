import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import TaskRemove from './TaskRemove'
import {changeComplete} from "../redux/actions.js"
import EditTask from './EditTask'

const TasksList = () => {

  const tasks = useSelector((state)=>state.taskReducer.tasks)
  console.log(tasks);
  const dispatch = useDispatch()
  return (
    <>
    <h2>Tasks List</h2>
    {tasks && tasks.map(item =>{
     return (
      <div key={item.id}>
        {!item.isEditing?(
          <>
          <span 
          onClick={() => dispatch(changeComplete(item.id))}
          style={{
            color: item.active? "green": "red",
            textDecoration: item.active? "none": "line-through"
          }}>
            {item.name} {item.date}
          </span> 
          <TaskRemove id={item.id}/>
        </>
        ):(
          <>
          <EditTask id={item.id}/>
          </>
        )
        
      }
        
        </div>
      )
    })}
    </>
  )
}

export default TasksList