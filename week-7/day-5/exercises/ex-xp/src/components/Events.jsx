import { useState } from "react";

const Events = () =>{
    
    const [isToggleOn, setIsToggleOn] = useState("ON")

    const clickMe = () =>{
        alert("I Was Clicked!")
    }

    const handleKeyDown = (e) =>{
        if(e.key ==="Enter"){
            alert(`The ${e.key} Key was pressed, Your input is ${e.target.value}`)
        };
        
    }

    const clickMeToggle =()=>{
        if(isToggleOn === "ON"){
            setIsToggleOn("OFF");
        }else{
            setIsToggleOn("ON");
        }
    }

    return (
        <>
            <button onClick={clickMe}>Click Me!</button>
            <br/>
            <input onKeyDown={handleKeyDown} placeholder="Press Enter"></input>
            <br/>
            <br/>
            <button onClick={clickMeToggle}>{isToggleOn}</button>
        </>
    )
}

export default Events