import React from 'react'
import data2 from "../helpers/data2.json"

const Experiences  = () => {
  return (
    <div>
        <h1>Experiences</h1>
        {data2.Experiences.map((exp)=>{
            return (
                <div key={exp.companyName}>
                    <img src={exp.logo} alt="No Image Available" />
                    <p><a href={exp.url}>{exp.companyName}</a></p>
                    <p>{exp.roles[0].title}</p>
                    <p>{exp.roles[0].startDate} {exp.location}</p>
                    <p>{exp.roles[0].description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Experiences 