import React from 'react'
import data2 from "../helpers/data2.json"
import Skills from  "./Skills"
import Experiences from "./Experiences"

const SocialMedias = () => {
    
  return (
    <>
    <div>
      <h1>SocialMedias</h1>
      <ul>
          {data2.SocialMedias.map((link, index)=>{
            return <li key={index}>{link}</li>
          })}
      </ul>
    </div>
    <Skills />
    <Experiences />
    </>
    
    
  )
}

export default SocialMedias