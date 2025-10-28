import { useState } from 'react'

import './App.css'

function App() {
  const [languages, setLanguages] = 
  useState([
      {name: "Php", votes: 0},
      {name: "Python", votes: 0},
      {name: "JavaSript", votes: 0},
      {name: "Java", votes: 0}
    ])

    const add = (i)=>{   
        const newLanguages = [...languages]; 

        newLanguages[i] = {...newLanguages[i], votes: newLanguages[i].votes + 1 };

        setLanguages(newLanguages);
    }

  return (
    <>
    <div style={{disply:"flexbox"}}>
      {languages.map((lan, index)=>{
        
        return (
        <div key={index} style={
          {display:"flex",
            flexDirection:"row", 
            alignItems: "center",
            gap:"10px",
            border:"1px sold black", 
            backgroundColor:"yellow", 
            margin:"10px", 
            padding:"20px"}
          }>
          <div style={{color:"black"}}><h3>{lan.votes}</h3></div>
          <div style={{color:"black"}}>{lan.name}</div>
          <button onClick={()=>add(index)}>Click Here</button>
        </div>
        )
      })}
      </div>
    </>
  )
}

export default App
