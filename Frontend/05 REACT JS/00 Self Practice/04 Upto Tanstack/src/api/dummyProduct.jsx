import axios from "axios";

export const getDummyData = async (limit, pageParam) => {
  try {
    let res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`,
    );
    return res.data;
  } catch (error) {
    console.log("error in dummy data", error);
  }
};
