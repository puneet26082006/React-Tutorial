import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardcontent from './RightCardcontent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-red-500 rounded-4xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src={props.image} alt="" />
      <RightCardcontent tag = {props.tag} id = {props.id} color = {props.color} />
    
    </div>
  )
}

export default RightCard