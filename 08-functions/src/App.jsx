import React from 'react'

const App = () => {
  // function btnclicked(){
  //   console.log("Button is Clicked")
  // }

  function inputchanging(val){
    console.log(val);
  }

  function scrolling(val){
    if( val < 0 ){
      console.log("Seedhi Scroll kiya ja raha hai");
    } else {
      console.log("Ulti Scroll kiya ja raha hai");
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => {
        console.log("Button is clicked")
      }}>Change User</button>

      <input onChange={(elem) => {
        inputchanging(elem.target.value);
      }} type="text" placeholder='Enter the Name' />

      <div class='box ' onWheel={(elem) => {
          console.log(elem.deltaY);
          scrolling(elem.deltaY)
      }}>
        This is a div box 

      </div>


    </div>
  )
}

export default App