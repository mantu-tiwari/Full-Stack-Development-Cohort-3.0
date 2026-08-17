import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [productData, setProductData] = useState([])
  const [searchData, setSearchData] = useState(null)
  console.log(productData);
  console.log(searchData);

  const getProductData = async () => {
    try {
      let res = await axios.get('https://fakestoreapi.com/products')
      setProductData(res.data)
    } catch (error) {
      console.log('the error is : ', error);
    }
  }
  useEffect(() => {
      getProductData()
  },[])

  return (
    <div className='p-4'>
      <input onChange={(e) => {
          setSearchData(e.target.value)
      }} className='border p-2 rounded-lg' type="text" placeholder='Search' />
      <div className='p-4'>
        {
          productData.map((e) => {
              return <h1 key={e.id} >{e.title} </h1>
          })
        }
      </div>
    </div>
  )
}

export default App
