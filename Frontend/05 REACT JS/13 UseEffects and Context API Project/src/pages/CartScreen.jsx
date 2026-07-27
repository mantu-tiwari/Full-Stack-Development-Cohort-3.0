import React, { useContext } from 'react'
import CartCard from '../components/CartCard'
import { MyStore } from '../context/MyContext'

const CartScreen = () => {

   const {cartItem} =  useContext(MyStore)

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 '>
      {cartItem.map((e) => {
         return <CartCard key={e.id} cartProduct={e} />
      })}
    </div>
  )
}

export default CartScreen
