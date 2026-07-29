import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const About = () => {
   const navigate =  useNavigate()
  return (
    <div>
      <h1 className='bg-blue-500'>This is about</h1>
      <button onClick={() => {
          navigate('/about/company')
      }} >Show Company</button>
      <Outlet/>
    </div>
  )
}

export default About
