import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setToggle, setArr, arr, upadtedData }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: upadtedData,
  });

  const formSubmit = (data) => {
    //    console.log(data);
    if (upadtedData) {
      const updatedArr = arr.map((ele) => {
        return ele.id === upadtedData.id ? { ...ele, ...data } : ele;
      });
      setArr(updatedArr);
      localStorage.setItem("user", JSON.stringify(updatedArr));
    } else {
      const lsdArr = [...arr, { ...data, id: nanoid() }];
      setArr(lsdArr);
      localStorage.setItem("user", JSON.stringify(lsdArr));
    }

    setToggle((prev) => !prev);
    reset();
  };

  return (
    <div>
      <h1>React Hook form</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col border w-fit rounded-lg p-2"
      >
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="text" placeholder="email" />
        <input {...register("city")} type="text" placeholder="city" />
        <button className="cursor-pointer border px-2 w-fit self-center rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
