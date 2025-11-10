import Heading from './components/Heading'
import Section from "./components/Section"
import List from './components/List'
import {useState , useRef, useEffect, createContext} from "react"
import type {ChangeEvent , ChangeEventHandler, MouseEvent,KeyboardEvent} from "react"
import './App.css'

type Users = {
  id: number,
  name: string
}

interface Auth{
  token: string,
  userId: string
}


const AuthContext = createContext<Auth | null>(null)

function App() {

  const [count, setCount] = useState<number | null>(null)
  const [users, setUsers] = useState<Users[]>([{id:1, name:"abc"}])

  const inputRef = useRef<HTMLInputElement>(null)
  const strRef = useRef<string>("password or somthing else")

  useEffect(() => {
  
    return ():void => {
      console.log("somthing like - Unmount");
      
    }
  }, [])
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>):void =>{
    console.log(e.target.value);
  }

   const handleChangeHandler:ChangeEventHandler<HTMLInputElement> = (e):void =>{
    console.log(e.target.value);
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void =>{
    console.log(e);
    console.log("the Button was clicked!");
  }

  return (
    <>
      <h2>React + TS</h2>
      <input onChange={(e)=>handleChange(e)} />
      <input onChange={(e)=>handleChangeHandler(e)} />
      <button onClick={() => setCount(count+1)}>Count: {count}</button>
      <button onClick={(e) => handleClick(e)}>Click Event</button>

      <Heading title={"What is TS?"} subtitle={"this must be a string type!"}/>
      <Section lang={"JavaScript"}>
        <h3>Child of Section component</h3>
      </Section>
      <List items = {["a","b","c"]}/>
    </>
  )
}

export default App
