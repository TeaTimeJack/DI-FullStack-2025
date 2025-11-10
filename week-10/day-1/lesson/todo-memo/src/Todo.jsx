import React, {memo} from 'react'

const Todo = ({todos, addTask}) => {
    console.log('Render Todo Component');
    

  return (
    <>
    <h2>Todo</h2>
    <button onClick={() =>addTask()}>Add Task</button>
    {
        todos&& todos.map((item, indx) =>{
            return (
                <div key={indx}>
                    {item}
                </div>
            )
        })
    }
    </>
  )
}

export default memo(Todo) 