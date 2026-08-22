import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    // This is state for holding data
    initialState: {
        count : 0
    },
    // here is action for updating the state
    reducers: {
        // isme jo state hai wo initialState ko point karta hai
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
    }
})

console.log('counter slice ', counterSlice);
export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer