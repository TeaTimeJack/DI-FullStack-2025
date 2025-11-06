import { useState } from 'react'
import Counter from './fatures/counter/Counter'
import './App.css'
import {store} from "./app/store.js"
import { Provider } from "react-redux";

function App() {


  return (
    <>
      <h2>Redux Toolkit - RTK</h2>
      <Provider store={store}>
        <Counter />
      </Provider>
      
    </>
  )
}

export default App
