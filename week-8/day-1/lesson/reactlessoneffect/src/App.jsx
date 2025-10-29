import { useState } from 'react'
import './App.css'
import Article from "./components/Article"

function App() {
  // const [show, setShow] = useState(true)
  // const chaangeShow=()=>{
  //   setShow(!show)
  // }

  const [num,setNum]=useState();

  const hendleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.username.value);
    console.log(e.target.selectValue.value, num);
    
  }
  return (
    <>
    {/* <button onClick={chaangeShow}>{show? "Remove this" : "Show This"}</button>
    {show?
      <>
        <br />
        <Article />
      </>
      : null
    } */}

    <form onSubmit={hendleSubmit}>
      <input type="text" placeholder="username" name="username"/>
      <br/>
      <select name="selectValue" onChange={(e)=>setNum(e.target.value)}>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <input type="submit" />
    </form>
    
    </>
  )
}

export default App
