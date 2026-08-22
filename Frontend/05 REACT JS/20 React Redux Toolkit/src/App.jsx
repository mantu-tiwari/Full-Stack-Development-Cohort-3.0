import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";
const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counter);

  return (
    <div>
      <h1>My count is : {count} </h1>
      <button onClick={() => {
          dispatch(decrement())
      }} className="border px-2 ">decrease</button>
      <button onClick={() => {
          dispatch(increment())
      }} className="border px-2 ">Increase</button>
    </div>
  );
};
export default App;
