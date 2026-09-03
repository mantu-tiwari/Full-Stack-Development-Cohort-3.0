import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
// import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
import { loginUserAction } from "../state/useAction";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let loginSubmit = async (data) => {
    try {
      dispatch(loginUserAction(data))
      toast.success('Loggin Successfully')
    } catch (error) {
      console.log("login api error is: ", error);
    }

    reset();
  };

  let registerSubmit = (data) => {
    console.log("register data ", data);

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
