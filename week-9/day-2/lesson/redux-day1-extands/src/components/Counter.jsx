import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {incress, decress} from "../redux/actions.js"


const Counter = () => {
    const count = useSelector(state => state.counterReducer.count)
    console.log(count);
    const dispatch = useDispatch()
    
  return (
    <div>
        <h2>count : {count}</h2>
        <button onClick={() => dispatch(incress())}>+</button>
        <button onClick={() => dispatch(decress())}>-</button>
    </div>
  )
}

export default Counter