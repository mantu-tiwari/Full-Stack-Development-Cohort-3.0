import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

axiosInstance.interceptors.response.use(
    (response) => {
        console.log('in interceptor' ,response); 
        return response // jab tak return nhi karenge tab tak data nhi aayega
    },
    (error) => {
        console.log(error);
    }
)