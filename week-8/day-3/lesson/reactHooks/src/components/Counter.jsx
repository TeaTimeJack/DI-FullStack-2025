import React from 'react'
import CounterHeader from "./CounterHeader"
import CounterDisplay from "./CounterDisplay"
import CounterButton from "./CounterButton"


const Counter = (props) => {
    const {info} = props
  return (
    <>
    {/* <CounterHeader head={info.header}/>
    <CounterDisplay count={info.count}/>
    <CounterButton set={info.setCount}/> */}

    <CounterHeader />
    <CounterDisplay />
    <CounterButton />
    
    </>
    

  )
}

export default Counter