import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const Home = () => {

    console.log('home rendering...');
    const {count, setCount} = useContext(MyStore)

  return (
    <div>
      <h1>Home</h1>

      <h1>Count : {count} </h1>
      <button onClick={() => {
          setCount(count+ 1)
      }} className='border rounded-lg px-2' >Increase</button>
    </div>
  )
}

export default Home
