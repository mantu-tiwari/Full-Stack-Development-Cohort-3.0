import { axiosInstance } from "../config/axiosInstance";

export const getProductData = async () => {
  try {
    let res = await axiosInstance.get("/products");
    console.log('api calling...');
    return res.data;
  } catch (error) {
    console.log("error is ", error);
  }
};
