import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [registeredData, setRegisteredData] = useState(
    JSON.parse(localStorage.getItem("registeredData")) || [],
  );
  console.log(registeredData);
  let navigate = useNavigate();
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmit = (data) => {
    let loginData = registeredData.find((e) => {
      return e.email === data.email && e.password === data.password;
    });
    if (!loginData) {
      toast.error("Invalid User");
      return;
    }
    toast.success("logged In Successfully");
    reset();
  };

  const registerSubmit = (data) => {
    let arr = [...registeredData, data];
    setRegisteredData(arr);
    localStorage.setItem("registeredData", JSON.stringify(arr));
    toast.success("Registered Successfully")
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    loginSubmit,
    handleSubmit,
    registerSubmit,
  };
};
