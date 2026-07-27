import React from 'react'
import CartCard from '../components/CartCard'

const CartScreen = ({cartItem}) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 '>
      {cartItem.map((e) => {
         return <CartCard key={e.id} product={e} />
      })}
    </div>
  )
}

export default CartScreen
