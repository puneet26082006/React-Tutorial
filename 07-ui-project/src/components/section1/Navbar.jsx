import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-16'>
        <h4 className='bg-black text-white rounded-full px-6 py-2 uppercase'>Target Audience</h4>
        <button className='bg-gray-200 py-2 px-6 rounded-full tracking-widest uppercase text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar