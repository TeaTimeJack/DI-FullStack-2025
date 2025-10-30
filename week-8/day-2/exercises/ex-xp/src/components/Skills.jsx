import React from 'react'
import data2 from "../helpers/data2.json"

const Skills  = () => {
  return (
    <div>
        {data2.Skills.map((cattegory)=>{
            return (
                <div key={cattegory.Area}>
                    <h1>{cattegory.Area}</h1>
                    <ul>
                        {cattegory.SkillSet.map((item)=>{
                            return <li key={item.Name}>{item.Name}</li>
                        })}
                    </ul>
                </div>
            )
        })}
    </div>
  )
}

export default Skills 