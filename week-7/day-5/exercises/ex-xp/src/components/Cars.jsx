import {useState} from "react"

const Cars = (props) =>{
    const {name, model} = props.info
    const [color, setColor] = useState("red")

    if (color){
        return (
            <>
            <h3>name: {name}</h3>
            <p>model: {model}</p>
            <p>color: {color}</p>
        </> 
        )
                 
        }
    return (
        <>
            <p>name: {carInfo.name}</p>
            <p>model: {carInfo.model}</p>
        </>
    )
}

export default Cars