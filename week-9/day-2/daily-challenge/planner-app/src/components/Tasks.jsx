import React from 'react'
import TaskInput from './TaskInput'
import TaskList from './TasksList'

const Tasks = () => {
  return (
    <>
    <h2>Tasks Planner</h2>
    <TaskInput />
    <TaskList />
    </>
    
  )
}

export default Tasks