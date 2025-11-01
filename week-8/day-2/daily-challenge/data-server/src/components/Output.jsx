import React from 'react'

const Output = ({message}) => {
  return (
    <div>
        <p>I received your POST request. This is what you sent me: {message}</p>
    </div>
  )
}

export default Output