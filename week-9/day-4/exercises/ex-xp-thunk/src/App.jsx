import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import './App.css'

const USERS_URL = "https://jsonplaceholder.typicode.com/users/";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch(USERS_URL);
  const data = await response.json();
  return data;
});

const initialState = {
  users: [],
  status: "", //loading, success, failed
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload
      }),
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

const {} = usersSlice.actions;

const appReducer = combineReducers({
  usersReducer: usersSlice.reducer
});

export const store = configureStore({
  reducer:appReducer,
});


function App() {
  const users = useSelector((state) =>state.usersReducer.users)
  const status = useSelector((state) => state.usersReducer.status);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
  },[]);

  if(status === "loading") return <h2> loading...</h2>;
  if(status === "failed") return <h2>Opps....</h2>

  return (
    <>
      <h1>User Data with Redux Thunk</h1>
      <div>
        {users && users.map(user =>{
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Website: <a>{user.website}</a></li>
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
