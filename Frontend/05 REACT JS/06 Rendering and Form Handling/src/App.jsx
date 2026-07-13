// import React, { useState } from 'react'
// import ProductCard from './ProductCard'
// const App = () => {
// const [data, setData] = useState([
//   {
//     "id": 1,
//     "title": "Wireless Bluetooth Earbuds",
//     "price": 49.99
//   },
//   {
//     "id": 2,
//     "title": "Ergonomic Office Chair",
//     "price": 189.50
//   },
//   {
//     "id": 3,
//     "title": "Stainless Steel Water Bottle",
//     "price": 24.95
//   },
//   {
//     "id": 4,
//     "title": "Mechanical Gaming Keyboard",
//     "price": 89.99
//   },
//   {
//     "id": 5,
//     "title": "Ultra HD Dash Cam",
//     "price": 119.00
//   }
// ])
// const deleteData = (id) => {
//     let prod = data.filter((e) => e.id !== id)
//     setData(prod)
// }
// const increasePrice = (id) => {
//   const updateProd = data.map((e) => {
//       if(e.id === id){
//         return {
//           ...e,
//           price: e.price++
//         }
//       }
//       return e
//   })
//   setData(updateProd)
// }
//   return (
//     <div>
//       <div className="container flex gap-1 flex-wrap">
//         {
//           data.map((e,i) => {
//               return(
//                 <ProductCard key={e.id} product={e} del = {deleteData} incPrice ={increasePrice} />
//               )
//           })
//         }
//       </div>
//     </div>
//   )
// }
// export default App

// change name logic
import React, { useState } from 'react'

const App = () => {
  console.log('app is rendering....');
  const [count, setCount] = useState(0)
  console.log(count);
  const [user, setUser] = useState({
    name: 'Aman',
    age: 34
  })
  console.log(user.name);
  return (
    <div>
      <h1>count is : {count} </h1>
      <h1>Name is : {user.name} </h1>
      <button onClick={() => {
          setCount(count+1)
      }} className='border-2 p-1 rounded-lg m-2' >Increase</button>
      <button onClick={() => {
          let changeName = user.name = 'batman'
          console.log(changeName);
      }} className='border-2 p-1 rounded-lg'>Change Name</button>
    </div>
  )
}

export default App



