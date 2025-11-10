import {useState} from 'react'

const Counter = () => {

    const [counter, setCounter] = useState<number>(0);
    const [lastAction, setLastAction] = useState<string>("None");

    const handleUp=():void=>{
        setLastAction("Up");
        setCounter(counter+1);
    }

    const handleDown=():void=>{
        setLastAction("Down");
        setCounter(counter-1);
    }
  return (
    <>
    <h2>Counter</h2>
    <h3>Count: {counter}  Last Action: {lastAction}</h3>
    <button onClick={()=>handleUp()}>+</button>
    <button onClick={()=>handleDown()}>-</button>
    </>
    
  )
}

export default Counter