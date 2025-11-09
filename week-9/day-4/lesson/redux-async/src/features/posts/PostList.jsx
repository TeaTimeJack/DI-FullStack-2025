import {useEffect} from "react";
import {fetchPosts} from "./state/slice.js";
import {useSelector, useDispatch} from 'react-redux'
import PostLikeButton from './PostLikeButton'

import React from 'react'

const PostList = () => {
    const posts = useSelector((state) => state.postsReducer.posts);
    const status = useSelector((state) => state.postsReducer.status);
    // console.log("Posts:" + posts);
    // console.log("Statuse:" + status);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

    if(status === "loading") return <h2> loading...</h2>;
    if(status === "failed") return <h2>Opps....</h2>
    
  return (
    <>
    <h2>PostList</h2>

    <section>
        {
            posts && posts.map(item =>{
                // console.log(item);
                
                return(
                    <article key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <PostLikeButton key={item.id} id={item.id} reactions={item.reactions}/>
                    </article>
                )
            })
        }

    </section>
    </>
    
  )
}

export default PostList