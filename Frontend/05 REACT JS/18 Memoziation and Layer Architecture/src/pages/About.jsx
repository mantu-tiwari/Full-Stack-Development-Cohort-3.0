import React from 'react'


// second process to implement memoziation (recommended)
const About = ({str}) => {
    console.log('About is rendering');
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About, (prevProps, nextProps) => {
   return prevProps.str.id === nextProps.str.id 
})
