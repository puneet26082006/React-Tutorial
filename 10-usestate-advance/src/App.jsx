import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)
  const onclicked = () => {
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);

  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onclicked}>Click</button>
    </div>
  )
}

export default App