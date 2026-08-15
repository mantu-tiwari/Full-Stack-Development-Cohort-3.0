import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosInstance';

const ProductPage = () => {

    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    console.log('Product api response',productData);
    
    const getProductData = async () => {
        try {
            let res = await axiosInstance('/products')
            setProductData(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log('product data erro is ', error);
        }
    }
    useEffect(() => {
        getProductData()
    },[])

    if(isLoading) return <h1 className='text-4xl '>Loading...</h1>

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4'>
      {
        productData.map((e) => {
            return <ProductCard key={e.id} product={e} />
        })
      }
    </div>
  )
}

export default ProductPage
