import React, { useContext, useEffect } from 'react'
import { MyStore } from '../context/MyContext'
import axios from 'axios' 
import ProductsCard from '../components/ProductsCard'

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
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4' >
      {
        productData.map((e) => {

            return <ProductsCard key={e.id} product={e} />
        })
      }
    </div>
  )
}

export default Home
