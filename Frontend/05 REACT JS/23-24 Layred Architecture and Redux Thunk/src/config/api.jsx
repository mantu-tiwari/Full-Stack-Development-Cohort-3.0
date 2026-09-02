import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dummyjson.com',
    withCredentials: true  // this is mailnly used in backend 
})