import React from 'react'

const RightCardcontent = (props) => {
  return (
    <div className='absolute h-full w-full top-0 left-0 p-8 flex flex-col justify-between '>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold text-2xl'>{props.id + 1}</h2>
        <div>
          <p className='text-lg leading-relaxed text-white mb-14 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe? Hic voluptatem nobis repellat amet!</p>
          <div className='flex justify-between items-center'>
            <button style={{backgroundColor : props.color}} className='px-8 py-2 rounded-full text-lg font-medium text-white  '>{props.tag} </button>
            <button style={{backgroundColor : props.color}} className='px-4 py-2 rounded-full text-lg font-medium text-white  '><i class="ri-arrow-right-long-fill"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardcontent