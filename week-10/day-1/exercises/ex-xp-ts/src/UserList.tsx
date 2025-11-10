import {useState, useEffect} from 'react'

interface APIdata{
    id:number,
    name:string,
    username:string,
    email:string,
    phone: string

}

const UserList = () => {
 const [users, setusers] = useState<APIdata[]>([])
 const [isLoading, setIsLoading] = useState<boolean>(true); 
 const [error, setError] = useState<string | null>(null);

    useEffect(():void => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: APIdata[] = await response.json();
                setusers(data)
                
            } catch (err) {
                console.error("Failed to fetch users:", err);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
            } finally{
                setIsLoading(false)
            }
        }
        fetchUsers();
    }, [])

    if (isLoading) {
        return <h2>Loading Users...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }
    
    console.log(users);

  return (
    <div>
       <h2>User List</h2> 
        {
            users.length>0 && users.map((user:APIdata) =>{
                return(
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default UserList