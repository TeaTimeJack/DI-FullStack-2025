import { createSlice,combineReducers, configureStore} from "@reduxjs/toolkit";
import {getDataFromApi} from '../api/apt'

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

const store = configureStore({
  reducer: appReducer,
  //middleware - reed about this on your own time - how to add them
});


export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;