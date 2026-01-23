import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  function Increase(){
    setNum(num + 1 );
  }

  function decrease(){
    setNum(num - 1 );
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App