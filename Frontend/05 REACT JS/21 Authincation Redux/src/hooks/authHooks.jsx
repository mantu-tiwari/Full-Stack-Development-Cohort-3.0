import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUserData")) || [],
  );
  console.log(registeredUser);

  let loginSubmit = (data) => {
    let user = registeredUser.find((e) => {
      return e.email === data.email && e.password === data.password;
    });
    reset();
    if (!user) return toast.error("Invalid Credential");
    dispatch(addUser(user));
    toast.success("Loggin Successully");
  };

  let registerSubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem("registeredUserData", JSON.stringify(arr));
    toast.success("User Registered Successfully");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginSubmit,
    registerSubmit,
  };
};
