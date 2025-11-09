import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/state/slice";
import usersReducer from "../features/users/state/userSlice";

const appReducer = combineReducers({
  postsReducer,
  usersReducer,
});

const store = configureStore({
  reducer: appReducer,
  //middleware - reed about this on your own time - how to add them
});

export default store;
