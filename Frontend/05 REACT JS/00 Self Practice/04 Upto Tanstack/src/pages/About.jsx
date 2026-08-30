import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../app/store'
import { decrement, increment } from '../features/counterSlice'

const About = () => {
  const {count} = useSelector((store) => store.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>count is : {count} </h1>
      <button onClick={() => {
          dispatch(decrement())
      }}>Decrement</button>
      <button onClick={() => {
          dispatch(increment())
      }}>Increment</button>
    </div>
  )
}

export default About
