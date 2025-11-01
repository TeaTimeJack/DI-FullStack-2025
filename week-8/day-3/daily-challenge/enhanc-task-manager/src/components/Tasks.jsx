import React ,{useContext, useState} from 'react'
import {TasksContext} from "../App"

const Tasks = () => {
    const {tasks , machingTasks, completeTask, deleteTask,editTask} = useContext(TasksContext)
  return (
    <div>
        <h4>List of Tasks:</h4>
        <table>
            <tbody>
                {machingTasks.map((task)=>{
                return <tr key={`task-id${task.id}`} id={`task-id${task.id}`}>
                    {!task.isEditing?(
                        <>
                        <td>
                            <p>{task.name}</p>
                        </td>
                        <td>
                            <button onClick={()=>editTask(task.id)}>Edit Name</button>
                        </td>
                        </>
                    ):(
                        <>
                        <td>
                            <input id={`edit-task-${task.id}`} type="text" />
                        </td>
                        <td>
                            <button onClick={()=>saveEditTask(task.id)}>Save Name</button>
                        </td>
                        </>  
                    )}
                        {task.completed?(
                            <td><button onClick={()=>completeTask(task.id)}>Completed!</button></td>
                        ):(
                        <td><button onClick={()=>completeTask(task.id)}> Not Complete</button></td>
                        )}

                        <td><button onClick={()=>deleteTask(task.id)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Tasks