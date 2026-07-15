import React from 'react'

const CardRevision = ({user}) => {
  return (
    <div className='border w-fit'>
      <h1>Cards</h1>
        <h2>Name: {user.name} </h2>
        <h2>Email: {user.email} </h2>
        <h2>Gender: {user.gender} </h2>
    </div>
  )
}

export default CardRevision
