import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthincated: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthincated = true;
    },
    removeUser: (state) => {
        state.user = null,
        state.isAuthincated = false
    }
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
