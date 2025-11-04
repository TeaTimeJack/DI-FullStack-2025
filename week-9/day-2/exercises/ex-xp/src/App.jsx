import { useState } from 'react'
import './App.css'
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Tasks from "./components/Tasks"

const initialState ={todos:[
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
  ]}
export const ADD_TO_DO = "addTodo"
export const REMOVE_TO_DO = "removeTodo"
export const CHANGE_COMPLETE = "changeComplete"

export const todoReducer =(state = initialState, action)=>{
      if(action.type === ADD_TO_DO){
        const tempTodo = state.todos.push(action.payload)
        return {...state, todos: tempTodo } 
      }else if(action.type === REMOVE_TO_DO){
        console.log(state.todos);
        console.log("trying to remove...");
        const removeIndex = state.todos.findIndex(todo => todo.id === action.payload)        
        state.todos.splice(removeIndex,1)
        console.log(state.todos);
        return {...state, todos: state.todos } 
        
      }else if(action.type === CHANGE_COMPLETE){
        const tempTodo = state.todos
        const changeIndex = tempTodo.findIndex(todo => todo.name === action.payload)
        tempTodo[changeIndex].completed=!state.todos[changeIndex].completed
        return {...state, todos: tempTodo } 
      }
      return state
    }

const store = configureStore({
  reducer:{
   todoReducer
  }
})

function App() {
  

  return (
    <>
      <Provider store ={store}>
        <Tasks />
      </Provider>
    </>
  )
}

export default App
