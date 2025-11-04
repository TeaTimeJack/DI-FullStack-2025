import { useState, useReducer, useRef } from 'react'
import './App.css'

/* 
const[state, dispatch] = useREducer (reducer, initalState)
*/

const reducer = (state, action)=>{
  console.log("State=>" , state);
  console.log("action=>" , action);

  if(action.type === "incress"){
    return {...state, count: state.count + 1}
  }else if(action.type === "decress"){ 
      return {...state, count: state.count - 1}
  }else if(action.type === "useInput"){ 
      return {...state, count: state.count +  Number(action.payload) }
  }
  return state
}


function App() {
  const [count, setCount] = useState(0)
  const [count2, dispatch2] = useReducer(reducer,{count:0 ,active:true})
  // console.log(count2);
  // console.log(dispatch2);
  const inputRef = useRef()
  

  return (
    <>
    <h2>useReducer Hook</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <div>
        <h2>Reducer counter: {count2.count}</h2>
        <button onClick={() =>dispatch2(1)}>+</button>
        <button onClick={() =>dispatch2(-1)}>-</button>
      </div> */}

       <div>
        <h2>Reducer counter: {count2.count}</h2>
        <button onClick={() =>dispatch2({type: "incress"})}>+</button>
        <button onClick={() =>dispatch2({type: "decress"})}>-</button>
      </div>

      <div>
        <input ref={inputRef}/>
        <button onClick={() =>dispatch2({type: "useInput" ,payload:inputRef.current.value})}>+ input num</button>
      </div>
    </>
  )
}

export default App
