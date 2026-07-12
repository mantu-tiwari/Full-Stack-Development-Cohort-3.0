import React from 'react'

const ProductCard = ({product ,del}) => {
    console.log(del);
  return (
    <div className='flex gap-1 '>
      <div className='bg-amber-300 border-2 rounded-xl p-2 ' >
          <h2>Title: {product.title} </h2>
          <h2>Price: {product.price}  </h2>
          <div className='flex'>
              <button onClick={() => {
                  console.log(product.price++);
              }} className="px-3 border-2 rounded-lg bg-blue-600 text-white" >Click</button>
              <button onClick={() => {
                  del(product.id)
              }} className="px-3 border-2 rounded-lg bg-red-600 text-white" >Delete</button>
          </div>
      </div>
     
    </div>
  )
}

export default ProductCard
