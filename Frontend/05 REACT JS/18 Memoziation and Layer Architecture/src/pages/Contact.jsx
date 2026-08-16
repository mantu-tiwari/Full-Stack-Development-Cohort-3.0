import React from 'react'

const Contact = ({test}) => {
    console.log('contact is rendering');
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

export default React.memo(Contact)
