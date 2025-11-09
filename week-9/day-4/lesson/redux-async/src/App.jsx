import { useState } from 'react'
import './App.css'
import PostList from "./features/posts/PostList"
import UserBox from "./features/users/UserBox"

function App() {

  return (
    <>
      <h1>Redux - Thunk</h1>
      <UserBox />
      <PostList />

    </>
  )
}

export default App
