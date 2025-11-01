import React from 'react'

const Output = ({input}) => {
  return (
    <div>
        <p>I received your POST request. This is what you sent me: {input}</p>
    </div>
  )
}

export default Output