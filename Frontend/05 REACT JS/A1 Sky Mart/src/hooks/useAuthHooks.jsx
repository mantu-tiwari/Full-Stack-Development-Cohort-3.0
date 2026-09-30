import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useAuth = () => {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const loginSubmit = (loginData) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      toast.error("Please Create an Account First");
      return;
    }
    if (
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
      toast.success("Login Successfully");
      localStorage.setItem("isLoggedIn", "true");
      navigate('/main')
    //   setCurrentPage("home");
    } else {
      toast.error("Invalid Email or Password");
    }
    reset();
  };

  const registerSubmit = (RegistrationData) => {
    console.log(RegistrationData);
    localStorage.setItem("user", JSON.stringify(RegistrationData));
    toast.success("Account Created Successfully");
    navigate('/')
    reset();
  };

  return {
    navigate,
    register,
    errors,
    handleSubmit,
    loginSubmit,
    registerSubmit,
    watch
  };
};
