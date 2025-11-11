import {useEffect } from 'react'
import {getDataFromApi} from '../api/apt.ts'
import {useSelector, useDispatch} from 'react-redux'
import type {RootState, AppDispatch} from '../features/dataSlice.ts'
import type {API_ITEM} from "../types/types.ts"


const DataFetcher = () => {   
  const apiData:any = useSelector((state: RootState)=>state.theApiReducer.data)
  const status = useSelector((state: RootState)=>state.theApiReducer.status)
  const dispatch:AppDispatch = useDispatch();
  
  useEffect(()=>{
   dispatch(getDataFromApi());
  },[])

    if(status === "loading") return <h2> loading...</h2>;
    if(status === "failed") return <h2>Opps....</h2>
  console.log(apiData);

  return (
        <>
          <h1>Content of Api Data</h1>
          <div style={{display:"grid", gridTemplateColumns:" repeat(6, 1fr)" }}>
            {
              apiData && Object.entries(apiData).map(([item,value]:any)=>{
                const champ:API_ITEM = value
                return (
                  <div key={item} style={{border:"1px solid purple"}}>
                    <h3>{champ.name}</h3>
                    <p>{champ.tags.join(" + ")}</p>
                  </div>
                )
              }) 
            }
          </div>
        </>
  )
}

export default DataFetcher
