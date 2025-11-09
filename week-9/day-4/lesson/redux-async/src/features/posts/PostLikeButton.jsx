import React from 'react'
import {useDispatch} from "react-redux"
import {addlike} from './state/slice.js'

const likeEmoji = {like: "👍"};

const PostLikeButton = ({id, reactions}) => {
    const dispatch = useDispatch()
    const renderLikeButton = Object.entries(likeEmoji).map(([name,emoji])=>{
        return(  
            <div key={id} onClick={() =>dispatch(addlike({id, name}))}>{emoji} {reactions[name]}</div>
        )
    });
  return (
    <div>{renderLikeButton}</div>
  )
}

export default PostLikeButton