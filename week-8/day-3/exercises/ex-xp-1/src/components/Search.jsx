import React ,{useContext} from 'react'
import {TasksContext} from "../App"

const Search = () => {
    const {filterTasks, showAll, showActive, showCompleted} = useContext(TasksContext)
  return (
  <div>
    <button onClick={()=>showCompleted()}>Show Completed</button>
    <button onClick={()=>showActive()}>Show Active</button>
    <button onClick={()=>showAll()}>Show All</button>
    <br />
    <span>Search By Name: </span><input name="taskName" type="text" placeholder="Task Name" onChange={(e) =>filterTasks(e)}/>
    
  </div>
    
  )
}

export default Search