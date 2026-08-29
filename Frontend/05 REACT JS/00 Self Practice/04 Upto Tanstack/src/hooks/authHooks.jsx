import { data, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

export const useAuth = () => {
  let navigate = useNavigate();
  const [registerUserData, setRegisterUserData] = useState([]);
  console.log(registerUserData);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let loginSubmit = (data) => {
    console.log(data);

    reset();
  };

  let registerSubmit = (data) => {
    let arr = [...registerUserData, data];
    setRegisterUserData(arr);
    toast.success("User Registered Successfully");
    localStorage.setItem('lsRegisterUserData', JSON.stringify(arr))
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
