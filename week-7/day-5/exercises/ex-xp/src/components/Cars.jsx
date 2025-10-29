import {useState} from "react"
import Garage from "./Garage"

const Cars = (props) =>{
    const {name, model} = props.info
    const [color, setColor] = useState("red")

    if (color){
        return (
            <>
            <h3>name: {name}</h3>
            <p>model: {model}</p>
            <p>color: {color}</p>
            <Garage size ="small" />
        </> 
        )
                 
        }
    return (
        <>
            <p>name: {carInfo.name}</p>
            <p>model: {carInfo.model}</p>
            <Garage size ="small" />
        </>
    )
}

export default Cars