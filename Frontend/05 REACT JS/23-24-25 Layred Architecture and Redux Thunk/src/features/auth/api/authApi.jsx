// import { api } from "../../../config/api";

// ye post api hai yaha credential pass hoga
// export const loginUserApi = async (credential) => {
//   try {
//     let res = await api.post("/auth/login", credential);
//     console.log(res);
//     localStorage.setItem("accessToken", res.data.accessToken);
//     return res.data;
//   } catch (error) {
//     console.log("Login Api error is :", error);
//   }
// };

// export const hydrateUser = async () => {
  // let token = localStorage.getItem("accessToken");
  // try {
  //   let res = await api.get("/auth/me", {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
  //     },
  //   });
  //   // console.log(res);
  //   return res.data;
  // } catch (error) {
  //   console.log("Login Api error is :", error);
  // }
// };
