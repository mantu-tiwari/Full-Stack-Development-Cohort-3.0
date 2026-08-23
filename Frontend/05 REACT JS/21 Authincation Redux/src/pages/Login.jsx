import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { decrement, incByValue, increment } from '../features/counterSlice';
import { useState } from 'react';

const Login = () => {
  console.log('login rendering');
  const [value, setValue] = useState(null)
  let dispatch = useDispatch()
  let {count} = useSelector((store) => store.counter)
  return (
    <div>
      <h1>Count is : {count} </h1>
      <button onClick={() => {
          dispatch(decrement())
      }}>Decrement </button>
      <button onClick={() => {
          dispatch(increment())
      }}>Incerment </button>
      <input onChange={(e) => {
          setValue(e.target.value);
      }} type="number" placeholder='Enter number' />
      <button onClick={() => {
          dispatch(incByValue(Number(value)))
      }}>Increase By Value</button>
    </div>
  )
}

export default Login
