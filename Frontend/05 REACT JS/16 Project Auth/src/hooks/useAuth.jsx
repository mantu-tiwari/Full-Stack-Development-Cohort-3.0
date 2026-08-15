import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthShop } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useAuth = () => {
  const {
    loggedInData,
    setLoggedInData,
    registrationData,
    setRegistrationData,
  } = useContext(AuthShop);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   Registration logic
  const registerFormSubmit = (data) => {
    const arr = [...registrationData, data];
    setRegistrationData(arr);
    toast.success("Registered Successfully");
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    reset();
  };

  //   Login Logic
  const loginFormSubmit = (data) => {
    let user = registrationData.find((e) => {
      return e.email === data.email && e.password === data.password;
    });
    if (!user) {
      toast.error("Invalid Credintial");
      reset();
      return;
    }
    setLoggedInData(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("Logged in Successfully");
    navigate("/main");
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    loginFormSubmit,
    registerFormSubmit,
    navigate,
  };
};
