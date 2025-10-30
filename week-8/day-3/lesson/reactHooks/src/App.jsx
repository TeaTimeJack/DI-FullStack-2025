import {useState, createContext, useRef } from 'react'
import './App.css'
import Counter from "./components/Counter"
import Posts from "./components/Posts"

export const CounterContext = createContext();
export const PostContext = createContext();

function App() {
  const [count, setCount] = useState(5)
  const [header, setHeader] = useState("Counter Game")

  const ref = useRef("Nothing")


  const changeRef =()=>{
    if(ref.current !== "AMIT"){
      ref.current = "AMIT"
      console.log((ref));
    }
  else{
    ref.current = "abc...."
    console.log((ref));
  }
}

  return (
    <>
     <h2>useContext / useRef / ClientServer / useReducer</h2>
     <div style={{border:"2px solid purple", margin:"10px"}}>
      <h2>Drilling dwon the PROPS</h2>
      {/* <Counter info = {{count, header, setCount}}/> This is for drilling PROPS*/}
     </div>

     <div style={{border:"2px solid purple",margin:"10px"}}>
      <h2>useContext + createContext</h2>
      <CounterContext.Provider value={{header,count,setCount,setHeader}}>
        <Counter />
      </CounterContext.Provider>
     </div>
     
     <div style={{border:"2px solid purple",margin:"10px"}}>
      <PostContext value={{title: "Post of the day!"}}>
        <Posts />
      </PostContext>
     </div>

     <div style={{border:"2px solid purple",margin:"10px"}}>
      <h2>useRef</h2>
      <h3>current: {ref.current}</h3>

      <button onClick={() => changeRef()}>Change</button>
      
     </div>
    </>
  )
}

export default App


/**
 * App  
 *  |__ Counter 
 *    |__ CounterHeader
 *    |__ CounterDisplay
 *    |__ CounterButton
 * 
 * CounterHeader - render a header title - <h2>{header}</h2>
 * CounterDisplay - render the count header - <h3>Count: {count}</h3>
 * CounterButton - render the increment button - <button> + </button>
 * 
 * All states should be on App Component
 */