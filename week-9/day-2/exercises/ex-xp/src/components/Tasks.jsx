import React ,{ useState, useRef} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {ADD_TO_DO, REMOVE_TO_DO, CHANGE_COMPLETE , todoReducer} from "../App"

const Tasks = () => {
    const tasks = useSelector((state) => state.todoReducer.todos)
    const dispatch = useDispatch();
    console.log(tasks);
    
    
    const editRef = useRef(null);
    // const saveEditTask =(id)=>{
    //     if(editRef.current){
    //         const tempTasks = [...tasks]
    //         const indexOfId = tempTasks.findIndex((task) => task.id === id)
    //         tempTasks[indexOfId].name = editRef.current.value;
    //         tempTasks[indexOfId].isEditing = !tempTasks[indexOfId].isEditing
    //         setTasks(tempTasks)
    //         setMachingTasks(tasks)
    //     }
    // }
  return (
    <div>
        <h4>List of Tasks:</h4>
        <table>
            <tbody>
                {tasks.map((task)=>{
                return <tr key={`task-id${task.id}`} id={`task-id${task.id}`}>
                        <>
                        <td>
                            <p>{task.name}</p>
                        </td>
                        <td>
                            <button>Edit Name</button>
                        </td>
                        </>
                    
                        {task.completed?(
                            <td><button onClick={()=>dispatch({type:CHANGE_COMPLETE, payload:task.name})}>Completed!</button></td>
                        ):(
                        <td><button onClick={()=>dispatch({type:CHANGE_COMPLETE, payload:task.name})}> Not Complete</button></td>
                        )}

                        <td><button onClick={()=>dispatch({type:CHANGE_COMPLETE, payload:task.name})}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Tasks