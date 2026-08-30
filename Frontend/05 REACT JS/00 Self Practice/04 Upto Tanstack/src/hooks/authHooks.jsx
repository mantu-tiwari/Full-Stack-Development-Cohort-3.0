import { data, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [registerUserData, setRegisterUserData] = useState(
    JSON.parse(localStorage.getItem("lsRegisterUserData")) || [],
  );
  console.log(registerUserData);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let loginSubmit = (data) => {
    let loginUserData = registerUserData.find((e) => {
      return e.email === data.email && e.password === data.password;
    });
    if (!loginUserData) {
      toast.error("Invlaid Credential");
      return;
    }
    toast.success("logged in successfully");
    dispatch(addUser(loginUserData));
    localStorage.setItem("lsLoginUserData", JSON.stringify(loginUserData));
    reset();
  };

  let registerSubmit = (data) => {
    let arr = [...registerUserData, data];
    setRegisterUserData(arr);
    toast.success("User Registered Successfully");
    localStorage.setItem("lsRegisterUserData", JSON.stringify(arr));
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    loginSubmit,
    registerSubmit,
  };
};
