import {useContext} from 'react'
import {PostContext} from "../App";

const Posts = () => {
    const {title} = useContext(PostContext) 
  return (
    <>
    <h2>Posts</h2>
    <h3>{title}</h3>
    </>
    

  )
}

export default Posts