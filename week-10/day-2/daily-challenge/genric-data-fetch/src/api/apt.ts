import {createAsyncThunk } from "@reduxjs/toolkit";

export const getDataFromApi = createAsyncThunk("api/fetch", async()=>{
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
