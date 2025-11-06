import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

/* redux-thunk    IF USING CORE-NEED TO INSTAL IT   ----   Toolkit has it provided as - createAsyncThunk */
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      // return {...state, count: state.count+1}  NO NEED TO CLONE WHLIE USING createSlice
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
    reset: (state, action) => {
      state.count = 0;
    },
    addInput: (state, action) => {
      state.count += Number(action.payload);
    },
    add2Inputs: (state, action) => {
      const [num1, num2] = action.payload;
      state.count += Number(num1) + Number(num2);
    },
    add2InputsWithPreper: {
      reducer(state, action) {
        state.count += action.payload;
      },
      prepare(param1, param2, param3) {
        return { payload: Number(param1) + Number(param2) + param3 };
      },
    },

    incrementAfter5: (state) =>{
        setTimeout(() => {
            state.count++
        }, 5000);
    }
  },
});



export const { increment } = counterSlice.actions;
export const { decrement } = counterSlice.actions;
export const { reset } = counterSlice.actions;
export const { addInput } = counterSlice.actions;
export const { add2Inputs } = counterSlice.actions;
export const { add2InputsWithPreper } = counterSlice.actions;
export const { incrementAfter5 } = counterSlice.actions;

export default counterSlice.reducer;
