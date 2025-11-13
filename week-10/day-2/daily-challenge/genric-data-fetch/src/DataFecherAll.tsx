import { createSlice,combineReducers, configureStore,createAsyncThunk} from "@reduxjs/toolkit";
import {useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'


interface CHAMP_INFO{
    attack: number,
    defense: number,
    magic: number,
    difficulty: number
}

interface CHAMP_IMAGE{
    full: string,
    group:string,
    h: number,
    sprite: string,
    w: number,
    x: number,
    y: number
}

interface CHAMP_STATS{
    armor: number
    armorperlevel: number
    attackdamage: number
    attackdamageperlevel:number
    attackrange: number
    attackspeed: number
    attackspeedperlevel: number
    crit:number
    critperlevel:number
    hp: number
    hpperlevel: number
    hpregen:number
    hpregenperlevel: number
    movespeed: number
    mp:number
    mpperlevel:number
    mpregen:number
    mpregenperlevel:number
    spellblock: number
    spellblockperlevel: number
}

interface API_ITEM{
    blurb: string
    id: string
    image:CHAMP_IMAGE 
    info: CHAMP_INFO
    key: string
    name: string
    partype: string
    stats: CHAMP_STATS
    tags: string[]
    title: string
    version: string
}

const getDataFromApi = createAsyncThunk("api/fetch", async()=>{
        let latestVersion:string=''
        try {
            const versions_URL = "https://ddragon.leagueoflegends.com/api/versions.json"
            const versions = await fetch(versions_URL);
            const latest = await versions.json()
            latestVersion=latest[0];
            // console.log(latest[0]);
        } catch (error) {
            throw new Error("Couldnt find the lateset version");
        }

        try {
            const Api_Url = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
            const response = await fetch(Api_Url);
            const data = await response.json()
            // console.log(data.data);
            return data.data
            
        } catch (error) {
            throw new Error("Couldnt find this API"); 
        }
})

const initialState = {
  data: null,
  status: "", //loading, success, failed
};


const theApiSlice = createSlice({
    name:"apiData",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(getDataFromApi.pending, (state, action) => {
        state.status = "loading";
        }),
        builder.addCase(getDataFromApi.fulfilled, (state, action) => {
            state.status = "success";
            state.data = action.payload;
        }),
        builder.addCase(getDataFromApi.rejected, (state, action) => {
        state.status = "failed";
      });
    }
});

const appReducer = combineReducers({
  theApiReducer: theApiSlice.reducer
});

export const store = configureStore({
  reducer: appReducer,
  //middleware - reed about this on your own time - how to add them
});


export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = typeof store.dispatch;


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