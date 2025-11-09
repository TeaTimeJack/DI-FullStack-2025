import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const USERS_URL = "https://jsonplaceholder.typicode.com/users/";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(USERS_URL)
  // const response = await fetch(USERS_URL);
  // const data = await response.json();
  return response.data;
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

export const {} = usersSlice.actions;
export default usersSlice.reducer;
