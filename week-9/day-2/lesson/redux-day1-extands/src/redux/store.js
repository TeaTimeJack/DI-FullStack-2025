import {configureStore} from "@reduxjs/toolkit";
// import {createStore} from "redux"

import {counterReducer} from "./reducers";

const store = configureStore({
    reducer:{
        counterReducer
    }
})

export default store;