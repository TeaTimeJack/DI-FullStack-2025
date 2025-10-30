import {useContext} from 'react'
import {CounterContext} from "../App"

const CounterChangeHeader = () => {
    const {setHeader} = useContext(CounterContext)
  return (
    <>
    <input type="text" placeholder="Change the header" onChange={(e)=>setHeader(e.target.value)}/>
    </>
  )
}

export default CounterChangeHeader