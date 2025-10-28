import {useState} from "react"

const Phone = () =>{

    const [info, setInfo] = useState({brand: "Samsung",model: "Galaxy S20",color: "Black",year: 2020})
    const changeColor =()=>{
        if(info.color === "Black"){
            setInfo({...info,color:"Blue"})
        }else{
            setInfo(({...info,color:"Black"}))
        }
    }
    return (
        <>
            <div style={{border:"1px solid purple",padding:"10px", margin:"10px"}}>
                <h2>My Phone is {info.brand}</h2>
                <p>It is a {info.color} {info.model} from {info.year}</p>
                <button onClick={changeColor}>Change color</button>
            </div>
            
        </>
    )
}

export default Phone