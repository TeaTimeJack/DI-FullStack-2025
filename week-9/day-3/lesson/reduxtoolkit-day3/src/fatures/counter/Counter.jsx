import React, {useState, useRef} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement,reset, addInput,add2Inputs,add2InputsWithPreper, incrementAfter5} from './counterSlice.js'

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.count)
    const dispatch = useDispatch()
    const refInput1 = useRef()
    const refInput2 = useRef()
    const refInput3 = useRef()
    const refInput4 = useRef()
    const refInput5 = useRef()

    const addOne5sec =()=>{
        setTimeout(() => {
            dispatch(increment())
        }, 5000);
    }
  return (
    <>
    <h2>Counter</h2>
    <h3>Count: {count}</h3>
    <div>
        <button onClick={()=>dispatch(incrementAfter5())}>increment by 1 afetr 5 seconds</button>
    </div>
    
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    <div>
        <input ref={refInput1} type="number"/>
        <button onClick={()=>dispatch(addInput(refInput1.current.value))}>Add</button>
    </div>
    <div>
        <input ref={refInput2} type="number"/>
        <input ref={refInput3} type="number"/>
        <button onClick={()=>dispatch(add2Inputs([refInput2.current.value,refInput3.current.value]))}>Add 2 inputs</button>
    </div>
    <div>
        <input ref={refInput4} type="number"/>
        <input ref={refInput5} type="number"/>
        <button onClick={()=>dispatch(add2InputsWithPreper(refInput4.current.value,refInput5.current.value,7))}>Add 2 inputs With Preper</button>
    </div>

    </>
  )
}

export default Counter