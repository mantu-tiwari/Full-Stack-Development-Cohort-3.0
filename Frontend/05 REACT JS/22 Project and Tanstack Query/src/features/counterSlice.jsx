import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    assignNum: (state,action) => {
        state.count = action.payload
        console.log(state.count);
    }
  },
});

export const {increment, decrement,assignNum} = counterSlice.actions
export default counterSlice.reducer