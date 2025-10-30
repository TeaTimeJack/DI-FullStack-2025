import React from 'react'
import data from "../helpers/data.json"

const PostList = () => {
  return (
    <>
        <h2>Hi This is a Title</h2>
        {data.map((item) =>{
            return(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
            )
        })}
    </>
    
  )
}

export default PostList