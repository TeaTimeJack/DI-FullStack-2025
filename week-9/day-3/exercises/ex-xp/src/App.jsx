import { useState,useRef } from 'react'
import {configureStore} from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import {store, addTodo, toggleTodo, removeTodo} from "./toolkit/toolkit.js"
import './App.css'

function App() {
  
    const tasks = useSelector((state) => state.tasksReducer.todos)
    const dispatch = useDispatch();
    const refInput1 = useRef()
    console.log(tasks);
  return (
    <>
        <div>
            <h4>List of Tasks:</h4>
            <div>
              <input ref={refInput1} />
              <button onClick={()=>dispatch(addTodo(refInput1.current.value))}>Add Task</button>
            </div>
            <table>
                <tbody>
                    {tasks.map((task)=>{
                    return <tr key={`task-id${task.id}`} id={`task-id${task.id}`}>
                            <>
                            <td>
                                <p>{task.name}</p>
                            </td>
                            </>
                            {task.completed?(
                                <td><button onClick={()=>dispatch(toggleTodo(task.id))}>Completed!</button></td>
                            ):(
                            <td><button onClick={()=>dispatch(toggleTodo(task.id))}> Not Complete</button></td>
                            )}

                            <td><button onClick={()=>dispatch(removeTodo(task.id))}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default App
