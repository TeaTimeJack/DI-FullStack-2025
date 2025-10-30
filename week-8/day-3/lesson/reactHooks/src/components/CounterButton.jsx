import {useContext} from 'react'
import {CounterContext} from "../App"

const CounterButton = (props) => {
    const {setCount} = useContext(CounterContext)
  return (
    // <button onClick={()=>props.set((prev) =>prev+1)}> + </button>

    <button onClick={()=>setCount((prev) =>prev+1)}> + </button>
  )
}

export default CounterButton