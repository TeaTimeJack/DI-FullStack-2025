import { useState, createContext, useRef } from 'react'
import './App.css'
import Search from "./components/Search"
import Tasks from "./components/Tasks"

export const TasksContext = createContext();

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      name:"wash dishes",
      completed: false,
      isEditing: false
    },
    {
      id:2,
      name:"sleep",
      completed: true,
      isEditing: false
    },
    {
      id:3,
      name:"clean room",
      completed: false,
      isEditing: false
    }
  ]);

  const [machingTasks, setMachingTasks] = useState(tasks);
  const showAll = ()=>{
    setMachingTasks(tasks)
  }

  const showActive = ()=>{
    const tempMachingTasks = tasks.filter((task) =>{if(!task.completed){
      return task
    }})
    console.log(tempMachingTasks);
    setMachingTasks(tempMachingTasks);
  }

  const showCompleted=()=>{
    const tempMachingTasks = tasks.filter((task) =>{if(task.completed){
      return task
    }})
    console.log(tempMachingTasks);
    setMachingTasks(tempMachingTasks);
  }

  const filterTasks =(e) =>{
    const search = e.target.value;
    if(search ===""){
      setMachingTasks(tasks)
    }
    console.log(search);
    const tempMachingTasks = tasks.filter((task) =>{if(task.name.includes(search)){
      return task
    }})
    console.log(tempMachingTasks);
    setMachingTasks(tempMachingTasks);
  };

  const completeTask = (id) =>{
    const tempTasks = [...tasks]
    const indexOfId = tempTasks.findIndex((task) => task.id === id)
    tempTasks[indexOfId].completed = !tempTasks[indexOfId].completed
    setTasks(tempTasks)
    setMachingTasks(tasks)
  };

  const deleteTask = (id) =>{
    const tempTasks = [...tasks];
    const indexOfId = tempTasks.findIndex((task) => task.id === id)
    tempTasks.splice(indexOfId,1)
    setTasks(tempTasks)
    setMachingTasks(tasks)
  };

  const editTask = (id) =>{
    const tempTasks = [...tasks]
    const indexOfId = tempTasks.findIndex((task) => task.id === id)
    tempTasks[indexOfId].isEditing = !tempTasks[indexOfId].isEditing
    setTasks(tempTasks)
    setMachingTasks(tasks)
  };
  

  return (
    <>
    <div>
      <h1>Tasks Maneger</h1>
      <TasksContext value = {{tasks, machingTasks, filterTasks, completeTask, deleteTask, editTask, showAll, showActive, showCompleted}} >
        <Search />
        <Tasks />
      </TasksContext>
      
    </div>
      

      
        
    </>
  )
}

export default App
