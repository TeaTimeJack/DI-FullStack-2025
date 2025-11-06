import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../fatures/counter/counterSlice";

const appReducer = combineReducers({
  counterReducer,
});

export const store = configureStore({
  reducer: appReducer,
});
