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

    // async function fetchData() {
    //     const apiUrl = "http://localhost:3802/api/hello";

    //     try {
    //         const response = await fetch(apiUrl);
    //         if (!response) {
    //             console.error(`HTTP error! Status: ${response.status}`);
    //             return <h3 style={{ color: 'red' }}>Error fetching data. Check console.</h3>;
                
    //         }
    //         const data = await response.json();
    //         return <h3>API Message: {data.message}</h3>;

    //     } catch (error) {
    //         console.error(`There was an error: ${error.message}`);
    //         return <h3 style={{ color: 'red' }}>Error fetching data. Check console.</h3>;
           
    //     }
    //     return <h3 style={{ color: 'red' }}>Error fetching data. Check console.</h3>;
    // }
    // fetchData()
    //  return  <h3 style={{ color: 'red' }}>Hello From Express</h3>; 
    
}

export default Hello