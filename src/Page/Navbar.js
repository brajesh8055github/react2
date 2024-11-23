import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between nav'>
        <h1 className='text-4xl font-bold '>Nike</h1> 
        <ul className='flex justify-between'>
            <li className='p-2 text-red-500'><a href="/">Home</a></li>
            <li className='p-2 text-red-500'><a href="#about">About</a></li>
            <li className='p-2 text-red-500'><a href="#product">Product</a></li>
            <li className='p-2 text-red-500'><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar