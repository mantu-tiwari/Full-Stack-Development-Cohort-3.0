import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assignNum, decrement, increment } from '../features/counterSlice'
// import { store } from '../app/store'

const About = () => {
    const dispatch = useDispatch()
    const data= useSelector((store) => store.counter)
    console.log(data);
  return (
    <div>
      <h1>this is about</h1>
      <h1>count is : {} </h1>
      <button onClick={() => {
          dispatch(decrement())
        }}> Decrement</button>
        <button onClick={() => {
            dispatch(increment())
        }}> Increment</button>
        <button onClick={() => {
            dispatch(assignNum('34'))
        }}>Assign</button>
    </div>
  )
}

export default About
