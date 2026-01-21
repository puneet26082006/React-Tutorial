import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex gap-5 items-center h-[90vh] pb-16 px-18 pt-6'>
        <LeftContent />
        <RightContent user={props.user}/>

    </div>
  )
}

export default Page1Content;