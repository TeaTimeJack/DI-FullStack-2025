
import  "./user.css";

const User = ({userinfo}) =>{
    const {name, email, id} = userinfo;
    if(id>5){
        return (
        <>
            <div className = "userCard">
                <h2>{name}</h2>
            </div>  
        </>
    )
    }
    return (
        <>
            <div className = "userCard">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>  
        </>
    )
}

export default User