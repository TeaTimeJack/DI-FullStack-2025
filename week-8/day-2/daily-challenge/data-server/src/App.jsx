import { useState } from 'react'
import './App.css'
import Hello from "./components/Hello";
import Form from "./components/Form";

function App() {

  /**
   
Part I
Create a server folder, containing a server.js file. 
Create a GET request to the /api/hello route that sends the message “Hello From Express”.

Create a React App in a client folder. 
In the App.js file, use the componentDidMount() method and async await to fetch the message from the /api/hello route, 
and display it as a header.


Part II
In the App.js file create a form. 
You will type something in the input field and submit the form. 
Use async await to POST the input value to the Express server.

In the server.js file, create a POST request, that will call the /api/world route.
This request will retrieve the body and respond with a message “I received your POST request. 
This is what you sent me: <value of the input field>“
  
   */

  return (
    <>
      <Hello />
      <Form />
    </>
  )
}

export default App
