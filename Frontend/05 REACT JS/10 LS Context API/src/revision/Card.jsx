import React from 'react'
const Card = ({user}) => {
  return (
    <div className='border w-fit rounded-lg p-2 bg-red-200'>
      <h1>Name : {user.name} </h1>
      <h1>Email : {user.email} </h1>
      <h1>City : {user.city} </h1>
    </div>
  )
}
export default Card
