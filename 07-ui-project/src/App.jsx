import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'


const App = () => {
const users = [
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    color: "blue",
    intro: "",
    tag: "Satisfied"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    color: "lightseagreen",
    intro: "",
    tag: "Underserved"
  },
  {
    image: "https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "lightcoral",
    intro: "",
    tag: "Underbanked"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "lightpink",
    intro: "",
    tag: "Undertaker"
  }
];


  return (
    <div>
      <Section1 user = {users} />
      <Section2 />
    </div>
  )
}

export default App