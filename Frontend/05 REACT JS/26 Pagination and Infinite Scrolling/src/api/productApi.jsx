// for Tanstack.jsx file

import axios from "axios";
export const getProduct = async (limit, page) => {
  try {
    console.log('api is rendering');
    let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page*limit}`);
    return res.data;
  } catch (error) {
    console.log("product api error", error);
  }
};
