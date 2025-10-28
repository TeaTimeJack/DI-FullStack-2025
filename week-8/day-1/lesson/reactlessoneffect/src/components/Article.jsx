import React, {useState, useEffect} from 'react'

const Article = () => {
    const [articals, setArticals] = useState()
    const [userId, setUserId] = useState(1)
    useEffect(()=>{
        fetchPost(userId)
        // DONT CHANGE THE userId IN THIS FUNCTION- WILL MAKE INFINIT LOOP!!!!
    },[userId])

    const fetchPost=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => res.json())
        .then((data)=>{
            console.log(data);
            setArticals(data)
        })
    }

  return (
    <>
    <input type="number" onChange = {(e)=>setUserId(e.target.value)} />
     <button onClick={()=>fetchPost(userId)}>Fetch posts</button>
        {articals && articals.map((item,index) =>{
            return  (
                <div key = {index}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            )    
        })}
    </>  
  )
}

export default Article