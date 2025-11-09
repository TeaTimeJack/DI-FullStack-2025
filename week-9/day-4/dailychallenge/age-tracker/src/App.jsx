import { useState, useEffect } from 'react'
import {useSelector, useDispatch, Provider} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import './App.css'


const ageUpAsync = createAsyncThunk("ageUp/async", setTimeout(()=>{
  console.log("up");
  
  return "up";
},3000));
const ageDownAsync = createAsyncThunk("ageDown/async", setTimeout(()=>{
  return "down";
},3000));



const initialState = {
  age: 5,
  status: "", //loading, success, failed
};

const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(ageUpAsync.pending, (state, action) => {
        state.status = "loading";
    }),
      builder.addCase(ageUpAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.age++
      }),
      builder.addCase(ageUpAsync.rejected, (state, action) => {
        state.status = "failed";
      });
          builder.addCase(ageDownAsync.pending, (state, action) => {
        state.status = "loading";
    }),
      builder.addCase(ageDownAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.age--
      }),
      builder.addCase(ageDownAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

const {} = ageSlice.actions;

const appReducer = combineReducers({
  ageReducer: ageSlice.reducer
});

export const store = configureStore({
  reducer:appReducer,
});


function App() {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.ageReducer.age)
  const status = useSelector((state) => state.ageReducer.status);
  const [buttonUpClicked, setButtonUpClicked] = useState(false);
  const [buttonDownClicked, setButtonDownClicked] = useState(false);

  console.log(age);
  
  useEffect(()=>{
    if(buttonUpClicked){
      console.log("Button Up was clicked! Performing side effect...");
      dispatch(ageUpAsync())
      setButtonUpClicked(false)
      console.log("Button Up was clicked was changed to FALSE")
    }else if(buttonDownClicked){
      console.log("Butto Down was clicked! Performing side effect...");
      dispatch(ageDownAsync())
      setButtonDownClicked(false)
      console.log("Button Down was clicked was changed to FALSE")
    }
      
  },[buttonUpClicked,buttonDownClicked ]);

    const handleClickUp = () => {
    setButtonUpClicked(true);
  };

    const handleClickDown = () => {
    setButtonDownClicked(true);
  };

  if(status === "loading") console.log("loading...");
  if(status === "failed") console.log("OPPS...");

  return (
      <>
      <h1>Age Tracker with Redux</h1>
      <h2>Age: {age}</h2>
      <button onClick={handleClickUp}>Age Up</button>
      <button onClick={handleClickDown}>Age Down</button>
      </>
   
  )
}

export default App
