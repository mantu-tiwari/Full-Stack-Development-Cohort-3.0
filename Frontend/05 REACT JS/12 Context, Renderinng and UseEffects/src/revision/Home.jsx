import React, { useContext } from 'react'
import { RevStore } from '../context/RevContext'

const Home = ({setToggle}) => {

  const datawa = useContext(RevStore)
 

  return (
    <div>
      <h1>This is home</h1>
      <button onClick={() => {
          // setToggle(false)
          console.log(datawa);
      }} className='border p-2 rounded-lg bg-amber-400 cursor-pointer'>Add to Cart</button>
    </div>
  )
}

export default Home
