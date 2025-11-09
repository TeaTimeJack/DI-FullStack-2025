import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts/";

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  // const response = await axios.get(POST_URL)
  const response = await fetch(POST_URL);
  const data = await response.json();
  return data;
});

const initialState = {
  posts: [],
  status: "", //loading, success, failed
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addlike:(state, action) =>{
      const {id, name} = action.payload;
      const post = state.posts.find(post => post.id == id)
        if(post){
          post.reactions[name]++
        }
      
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "loading";
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        const reactions = {
          like: 0,
        };
        const postsWithReactions = action.payload.map((post) => {
          return { ...post, reactions };
        });
        state.posts = postsWithReactions;
      }),
      builder.addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {addlike} = postSlice.actions;
export default postSlice.reducer;
