import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

// credential = data and thunkApi = error

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credential, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credential);
      console.log(res);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue("login failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "/auth/hydration",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");
    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
        },
        
      });
      // console.log(res);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue('hydration error')
    }
  },
);
