import {useContext} from 'react'
// import {CounterContext} from "../App"
import {CounterContext} from "../App"

const CounterDisplay = (props) => {
     const {count} = useContext(CounterContext)

  return (
    // <h3>Count: {props.count}</h3>   this is for drilling props.....
    <h3>Count: {count}</h3>
  )
}

export default CounterDisplay