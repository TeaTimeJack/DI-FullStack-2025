import React from 'react'

const FormComponent = (props) => {
    const {firstName, lastName, age} = props.info
  return (
    <div>
        <h2>Entered Information</h2>
        <p>Your Name: {firstName} {lastName}</p>
        <p>Your Age: {age}</p>
        <p>Your Gender: {age}</p>
        <p>Your Destination: {age}</p>
        <p>Your Dietary Restrictions:</p>
        <ul>
            <li>Nuts Free: No</li>
            <li>Lactose Free: Yes</li>
            <li>Vegan Meal: No</li>
        </ul>
    </div>
  )
}

export default FormComponent