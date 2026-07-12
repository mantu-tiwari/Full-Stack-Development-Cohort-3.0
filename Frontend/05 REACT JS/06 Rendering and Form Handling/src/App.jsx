import React, { useState } from 'react'

const App = () => {
  console.log('app is rendering');
  let [user,setUser] = useState('Rohan')
  console.log(user);
  return (
    <div>
      <h1 className="text-2xl">Hello and welcome to Practice Session</h1>
      <h2>User Name is : {user}</h2>

      <button onClick={() => {
          setUser('mohan')
      }} >Change</button>
    </div>
  )
}

export default App
