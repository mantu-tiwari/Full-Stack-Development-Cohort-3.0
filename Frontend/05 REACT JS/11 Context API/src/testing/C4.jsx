import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const C4 = () => {

    const cd = useContext(MyStore);
    console.log(cd);

  return (
    <div>
      <h1>This is compoment 4</h1>
    </div>
  )
}

export default C4
