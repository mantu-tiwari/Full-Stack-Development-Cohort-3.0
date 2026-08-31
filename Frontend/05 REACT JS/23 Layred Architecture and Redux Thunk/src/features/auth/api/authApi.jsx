import { api } from "../../../config/api";

// ye post api hai yaha credential pass hoga
export const loginUserApi = async (credential) => {
  try {
    let res = await api.post("/auth/login", credential);
    console.log(res);
    return res.data
  } catch (error) {
    console.log("Login Api error is :", error);
  }
};
