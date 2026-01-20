import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Ramu" Age={25} img="https://images.unsplash.com/photo-1768595408288-22f8215ba8e9?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Rahul" Age={24} img="https://images.unsplash.com/photo-1714332818313-627551693dbc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Aditya" Age={98} img="https://images.unsplash.com/photo-1766593635664-cd747d359fcd?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
