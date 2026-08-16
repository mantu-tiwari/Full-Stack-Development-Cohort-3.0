import React from 'react'


// second process to implement memoziation
const About = () => {
    console.log('About is rendering');
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About)
