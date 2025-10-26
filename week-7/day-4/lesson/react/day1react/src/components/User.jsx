import "./user.css"
import Button from '@mui/material/Button';



const User =(props) =>{
    const {name, username, email} = props.userdata
    const userStyle = {
            display: "inline-block",
            border: "1px solid red",
            padding: "10px",
            margin: "10px",
            textAlign: "center"
    }
    return (
        <>
        {/* <div style ={userStyle}> */}
        <div className = "box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <Button>Press Me</Button>
        </div>

        </>
    )
}

export default User