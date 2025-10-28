import {useState} from "react"

const Counter = ()=>{
    // const [state , setState] = useState()
    const [counterVal, setCounterVal] = useState(0)
   
    const addToCounter = ()=>{
        console.log("adding");
        setCounterVal(counterVal +1)
    }
    return (
        <>
            <h2>Count: {counterVal}</h2>
            <button onClick={addToCounter}>Add</button>
        </>
    )
}

export default Counter