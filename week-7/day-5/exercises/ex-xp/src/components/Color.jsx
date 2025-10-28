import {useState} from "react";

const Color =()=>{
    const [favoriteColor, setFavoriteColor] = useState("red");

    const changeY =()=>{
        if(favoriteColor !== "yellow"){
            setFavoriteColor("yellow")
        }
    }
    const changeB =()=>{
        if(favoriteColor !== "blue"){
            setFavoriteColor("blue")
        }
    }
    const changeR =()=>{
        if(favoriteColor !== "red"){
            setFavoriteColor("red")
        }
    }

    return (
        <>
            <h2>My Favorite Color is <span style={{color:`${favoriteColor}`}}>{favoriteColor}</span></h2>
            <button style={{margin: "5px", color:"yellow"}} onClick={changeY}>Yellow</button>
            <button style={{margin: "5px", color:"blue"}} onClick={changeB}>Blue</button>
            <button style={{margin: "5px", color:"red"}} onClick={changeR}>Red</button>
        </>
    )
}

export default Color
