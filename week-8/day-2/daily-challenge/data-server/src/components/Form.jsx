import React, {useState} from 'react'
import Output from "./Output"

const Form = () => {
    const [theInput, setTheInput] = useState("");

    const submitForm = (e) =>{
        e.preventDefault();
        // console.log(e.target.input.value);
        setTheInput(e.target.input.value)

        try{
          fetch("localhost:3802/api/world",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.strigify(theInput)
          })
          .then((res) =>res.json())
          .then((data)=>{
              return <Output input = {data.message} />
          })
          .catch((err)=>{
              console.log(`Ther was an error in Fetch-Post: ${err}`);
          })
          return <h3>Hello From Express</h3>
      }catch (error) {
          console.log(`Ther was an error in TRY-Post: ${error}`);
          return <h3>Hello From Express</h3>
          
      }
    }

    

  return (
    <div>
      <h2>Post to Server</h2>
      <form onSubmit={submitForm}>
        <input name="input" />
        <input type="submit"/>
      </form>
        {theInput? <Output input = {theInput} />: null}
    </div>
  )
}

export default Form