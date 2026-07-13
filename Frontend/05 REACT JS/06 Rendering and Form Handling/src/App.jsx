import React, { useState } from 'react'
import ProductCard from './ProductCard'
const App = () => {
const [data, setData] = useState([
  {
    "id": 1,
    "title": "Wireless Bluetooth Earbuds",
    "price": 49.99
  },
  {
    "id": 2,
    "title": "Ergonomic Office Chair",
    "price": 189.50
  },
  {
    "id": 3,
    "title": "Stainless Steel Water Bottle",
    "price": 24.95
  },
  {
    "id": 4,
    "title": "Mechanical Gaming Keyboard",
    "price": 89.99
  },
  {
    "id": 5,
    "title": "Ultra HD Dash Cam",
    "price": 119.00
  }
])
const deleteData = (id) => {
    let prod = data.filter((e) => e.id !== id)
    setData(prod)
}
const increasePrice = (id) => {
  const updateProd = data.map((e) => {
      if(e.id === id){
        return {
          ...e,
          price: e.price++
        }
      }
      return e
  })
  setData(updateProd)
}
  return (
    <div>
      <div className="container flex gap-1 flex-wrap">
        {
          data.map((e,i) => {
              return(
                <ProductCard key={e.id} product={e} del = {deleteData} incPrice ={increasePrice} />
              )
          })
        }
      </div>
    </div>
  )
}
export default App

