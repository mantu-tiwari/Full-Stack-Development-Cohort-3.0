import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/authApi";
import {useDispatch} from 'react-redux'
import { addUser } from "../state/authSlice";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();


  let loginSubmit = async (data) => {
    try {
        let response = await loginUserApi(data)
       dispatch(addUser(response))
    } catch (error) {
        console.log('login api error is: ', error);
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
