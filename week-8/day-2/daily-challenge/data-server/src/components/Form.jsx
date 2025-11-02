import React, {useState} from 'react'
import Output from "./Output"

const Form = () => {
    const [theInput, setTheInput] = useState("");

    const submitForm = (e) =>{
        e.preventDefault();
        // console.log(e.target.input.value);
        setTheInput(e.target.input.value)

        try{
          fetch("http://localhost:3802/api/world",{
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
         
      }catch (error) {
          console.log(`Ther was an error in TRY-Post: ${error}`)  
      }
    }

    // const submitForm = async (e) => {
    //     e.preventDefault();
        
    //     const inputValue = e.target.input.value;
    //     setTheInput(inputValue); 
        
    //     try {
    //         const dataToSend = { input: inputValue };
    //         const response = await fetch("http://localhost:3802/api/world", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(dataToSend) 
    //         });

    //         if (!response.ok) {
    //             console.error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         setOutputMessage(`I received your POST request. This is what you sent me: ${theInput}`);

    //     } catch (error) {
    //         console.error(`There was an error in Fetch-Post: ${error.message}`);
    //         setOutputMessage(`Error: ${error.message}. Check console.`);
    //     }
        
    // };


  return (
    <div>
      <h2>Post to Server</h2>
      <form onSubmit={submitForm}>
        <input name="input" />
        <input type="submit"/>
      </form>
        {theInput? <Output message ={theInput} />: null}
    </div>
  )
}

export default Form