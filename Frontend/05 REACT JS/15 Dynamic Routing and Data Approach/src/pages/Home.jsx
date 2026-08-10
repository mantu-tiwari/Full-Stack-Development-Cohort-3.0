import React, { useContext, useEffect } from 'react'
import { MyStore } from '../context/MyContext'
import axios from 'axios' 

const Home = () => {

  const {productData,setProductData} = useContext(MyStore)

  let getProductData = async() => {
      try {
        let res = await axios('https://fakestoreapi.com/products')
        setProductData(res.data)
      } catch (error) {
        console.log('errors in API', error);
      }
  }
  // if we don't use useEffect here then the app freeze due to self calling
  useEffect(() => {
      getProductData()
  },[])

  return (
    <div>
      <h1 className='bg-green-600' >This is Home</h1>
    </div>
  )
}

export default Home
