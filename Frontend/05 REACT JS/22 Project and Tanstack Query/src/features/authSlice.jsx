import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null,
        isAuthincated: false
    },
    reducers: {
        addUser: (state,action) => {
            state.data = action.payload
            state.isAuthincated = true
        },
        removeUser: (state,action) => {
            state.data = null
            state.isAuthincated = false
        }
    }
})

export const {addUser, removeUser} = authSlice.actions
export default authSlice.reducer