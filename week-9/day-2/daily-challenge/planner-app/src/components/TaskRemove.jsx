import React from 'react'
import {useDispatch} from "react-redux"
import {removeTask, changeIsEditing} from "../redux/actions.js"

const TaskRemove = ({id}) => {
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() =>dispatch(removeTask(id))}>Delete</button>
      <button onClick={() =>dispatch(changeIsEditing(id))}>Edit</button>
    </>
  )
}

export default TaskRemove