import React, { useState } from 'react'
import C1 from './testing/C1'
import C2 from './testing/C2'
import C3 from './testing/C3'
import C4 from './testing/C4'

const TestComponents = () => {

    const [data, setData] = useState('Central Data')
    // console.log(data);

  return (
    <div>
      <h1>Test Component</h1>
      <C1/>
      {/* <C2/>
      <C3/>
      <C4/> */}
    </div>
  )
}

export default TestComponents
