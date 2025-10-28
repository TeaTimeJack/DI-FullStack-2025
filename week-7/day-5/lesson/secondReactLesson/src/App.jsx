
import './App.css'
import User from "./components/User"
import  users  from "./user.json";
import Counter from "./components/Counter"
import CounterClass from "./components/CounterClass"



function App() {

  const handleClick = ()=>{
    alert("hi from button")
  };

  const handleInput =(e)=>{
    console.log(e.target.value); 
  };

  return (
    <>
      <h2>Events / Re-render / Side Effects/ more ...</h2>
      <Counter />
      <CounterClass />
      <div>
        <input onChange = {handleInput} />
        <button onClick={handleClick}>Click!</button>
      </div>

      {
        users.map((item, index)=>{
          return <User userinfo={item} key={index}/>
        })
      }
      
    </>
  )
}

export default App
