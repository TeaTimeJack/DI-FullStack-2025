
import './App.css'
import Hello from "./Hello"
import User from "./components/User"
// import {fragment} from "react"
import users from "./user.json"

// const users = [
//   {id:1, name:'John', email:'jjj@gamil.com', username:'jjj'},
//   {id:2, name:'Anne', email:'aaa@gamil.com', username:'aaa'},
//   {id:3, name:'Marry', email:'mmm@gamil.com', username:'mmm'},
//   {id:4, name:'Dan', email:'ddd@gamil.com', username:'ddd'},
// ]

function App() {
  
  return (
    <>
      <h2>Welcome To ReactJS </h2>
      <Hello/>
      {/* <User name={"John"} email={"john@email.com"} username="JohnJohn"/>
      <User name={"Amit"} email={"amit@email.com"} username="AmitAmit"/> */}
      {
        users.map((item, index) =>{
          return <User userdata={item} key={index}/>
        })
      }
    </>
  )
}

export default App
