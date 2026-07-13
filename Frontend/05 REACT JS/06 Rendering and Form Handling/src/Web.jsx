import React from 'react'
import About from './components/About'
import Card from './components/Card'
import Contact from './components/Contact'

const Web = () => {
    const arr = [9,4,6,3,7,3,4,7,3,32,5,3,7,3,4]
  return (
    <div className= 'text-2xl p-1 flex flex-col gap-2' >
      {/* <h1 className='bg-blue-300 rounded-xl col-span-3 flex justify-center items-center'>Website</h1> */}
        {/* <About/> */}
        {
            arr.map((e,i) => {
                return <Card key={i} />
            })
        }
        {/* <Contact/> */}
    </div>
  )
}

export default Web
