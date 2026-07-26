
// Memory leakage concept and fix it
import React, { useEffect } from 'react'
const About = () => {

    console.log('about rendering...');
    const interval = setInterval(() => {
      console.log('hey i am setinerval inside the about');
    }, 1000);

    useEffect(() => {
        
      return () => {
        clearInterval(interval)
          console.log('about chala gaya');
      }
    },[])

  return (
    <div>
      <h1>About</h1>
      <h2>isme memory leakage on hai so future jab bhi is code ko revise karna to console pe check kar lena</h2>
    </div>
  )
}
export default About

// here we use the third important concpt of the useEffect which is return callback function inside the useEffect ye tab chalta hai jab ham unmounting karte hai yani uss page ko switch karte hai ye mainly setTimeout and setInterval ko control karne ke liye use hota hai ye memory leakage ko bhi prevent karta hai
