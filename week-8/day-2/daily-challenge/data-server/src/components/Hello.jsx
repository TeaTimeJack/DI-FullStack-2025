import React from 'react'

const Hello = () => {

    try{
        fetch("localhost:3802/api/hello")
        .then((res) =>res.json())
        .then((data)=>{
            return <h3>{data.message}</h3>
        })
        .catch((err)=>{
            console.log(`Ther was an error in Fetch: ${err}`);
        })
         return <h3>Hello From Express</h3>
    }catch (error) {
        console.log(`Ther was an error in TRY: ${error}`);
        return <h3>Hello From Express</h3>
        
    }

    // return (
    //     <>
    //     <h3>Hello From Express</h3>
    //     </>
    // )
}

export default Hello