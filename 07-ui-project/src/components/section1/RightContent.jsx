import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='w-3/4 p-6 h-full flex gap-10 flex- overflow-x-auto rounded-4xl'>
      {props.user.map(function(elem , idx){

        return <RightCard key={idx} id = {idx} image = {elem.image} tag = {elem.tag} color = {elem.color} />
      })}

    </div>
  )
}

export default RightContent