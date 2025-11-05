import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {taskReducer} from './reducers'


const appReducer = combineReducers({
    taskReducer
})

export const store = configureStore({
    reducer:appReducer
})