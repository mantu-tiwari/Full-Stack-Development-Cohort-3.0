import axios from "axios";

export const getProductApi = async (limit, pageParam) => {
  try {
    console.log(pageParam);
    let res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`,
    );
    return res.data;
  } catch (error) {
    console.log("error in getproductApi", error);
  }
};
