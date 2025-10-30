import {useContext} from 'react'
import {CounterContext} from "../App"
import CounterChangeHeader from "./CounterChangeHeader"

const CounterHeader = (props) => {
    const {header} = useContext(CounterContext);
  return (
  <>
   {/* <h2>{props.head}</h2>  this is for drilling props..... */}
    <h2>{header}</h2>
    <CounterChangeHeader />
  </>
    

  )
}

export default CounterHeader