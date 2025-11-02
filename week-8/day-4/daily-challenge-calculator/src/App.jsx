import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const inputTopRef = useRef(null)
  const inputBottomRef = useRef(null)

  const add = ()=>{
    if(inputTopRef.current && inputBottomRef.current){
      setResult(Number(inputTopRef.current.value) + Number(inputBottomRef.current.value))
    }else if(!inputTopRef.current){
      setResult(Number(inputBottomRef.current.value))
    }else if(!inputBottomRef.current){
      setResult(Number(inputTopRef.current.value))
    }else{
      setResult(0)
    }
  }

  const substract = ()=>{
    if(inputTopRef.current && inputBottomRef.current){
      setResult(Number(inputTopRef.current.value) - Number(inputBottomRef.current.value))
    }else if(!inputTopRef.current){
      setResult(Number(inputBottomRef.current.value))
    }else if(!inputBottomRef.current){
      setResult(Number(inputTopRef.current.value))
    }else{
      setResult(0)
    }
  }

  const multiply = ()=>{
    if(inputTopRef.current && inputBottomRef.current){
      setResult(Number(inputTopRef.current.value) * Number(inputBottomRef.current.value))
    }else{
      setResult(0)
    }
  }

  const clear = ()=>{
    inputTopRef.current.value = null
    inputBottomRef.current.value = null
    setResult(0)
  }
  return (
    <div>
      <h1>Calculator</h1>
      <input ref={inputTopRef} type="number" />
      <input ref={inputBottomRef} type="number" />
      <br />
      <button onClick={()=>clear()}>Clear</button>
      <button onClick={()=>add()}>Add Them!</button>
      <button onClick={()=>substract()}>Substract Them!</button>
      <button onClick={()=>multiply()}>Multiply Them!</button>
      <h1>{result}</h1>
    </div>
  )
}

export default App
