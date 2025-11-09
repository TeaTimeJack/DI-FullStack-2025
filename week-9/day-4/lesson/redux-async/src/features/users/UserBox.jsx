import React, {useEffect} from 'react'
import {fetchUsers} from "./state/userSlice.js"
import {useSelector, useDispatch} from 'react-redux'

const UserBox = () => {

        const users = useSelector((state) => state.usersReducer.users);
        const status = useSelector((state) => state.usersReducer.status);
        // console.log("Statuse:" + status);

        const dispatch = useDispatch();

        useEffect(()=>{
            dispatch(fetchUsers())
        },[])

        if(status === "loading") return <h2> loading...</h2>;
        if(status === "failed") return <h2>Opps....</h2>

  return (
    <>
     <h2>UserBox</h2>
     <select>
        <option value={-1}>Select A Writer</option>
        {
            users && users.map(user=>{  
                return(
                    <option key={user.id} value={user.id}>{user.name}</option>
                )
            })
        } 
     </select>
    </>
    
  )
}

export default UserBox