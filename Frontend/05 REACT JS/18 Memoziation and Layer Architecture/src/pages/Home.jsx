import React from 'react'

// first method to implement memoziation
const Home = React.memo(() => {
    console.log('home is rendering');
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
})

export default Home
