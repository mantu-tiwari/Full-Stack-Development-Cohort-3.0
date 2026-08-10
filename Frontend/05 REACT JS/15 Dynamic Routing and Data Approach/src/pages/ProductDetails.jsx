import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {

   const data =  useParams()
   console.log(data);

  return (
    <div>
      <h1>This is the product details page </h1>
    </div>
  )
}

export default ProductDetails
