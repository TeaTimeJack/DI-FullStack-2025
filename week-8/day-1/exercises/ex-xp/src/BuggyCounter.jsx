import React, {useState} from 'react'

const BuggyCounter = () => {

    const [counter, setCounter] = useState(0)
    const handleClick = () =>{
         setCounter(counter+1);
    }
    if(counter === 5) throw new Error("I Crashed!");
  return (
    
    <button onClick={() => handleClick()}>Count: {counter}</button>
  )
}

export default BuggyCounter