import React from 'react'

const Card = ({user}) => {
  return (
    <div >
      {/* <h1>welcome to cards</h1> */}
          <div className='border w-fit'>
            <h1>Name: {user.name} </h1>
            <h1>email: {user.email} </h1>
            <h1>city: {user.city} </h1>
          </div>
    </div>
  )
}

export default Card
