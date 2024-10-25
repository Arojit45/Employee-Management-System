import React from 'react'

const Header = () => {
  return (
    <div className='flex item-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'> Arojit👍</span></h1>
        <button className='bg-red-500 text-lg  font-medium text-white px-7 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header