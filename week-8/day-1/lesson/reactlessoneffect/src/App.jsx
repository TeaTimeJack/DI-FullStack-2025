import { useState } from 'react'
import './App.css'
import Article from "./components/Article"

function App() {
  const [show, setShow] = useState(true)
  const chaangeShow=()=>{
    setShow(!show)
  }
  return (
    <>
    <button onClick={chaangeShow}>{show? "Remove this" : "Show This"}</button>
    {show?
      <>
        <br />
        <Article />
      </>
      : null
    }
    
    </>
  )
}

export default App
