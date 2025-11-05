import { useState } from 'react'
import { Provider } from "react-redux";
import {store} from "./redux/store.js"
import Tasks from './components/Tasks'
import './App.css'

function App() {


  return (
    <>
    <Provider store={store}>
      <Tasks />
    </Provider>
    </>
  )
}

export default App
