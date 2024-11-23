import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <h1 className='text-4xl font-bold text-center py-2 text-white'>Contact</h1>
        <form>
            <input className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500' type='text' placeholder='Enter name'></input>
            <input className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500' type='email' placeholder='Enter email'></input>
            <input className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500' type='number' placeholder='Mobile no.'></input>
            <input className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500' type='text' placeholder='Message'></input>
            <button className='bg-red-500 text-white py-2 px-4 rounded'>Submit</button>
        </form>
    </div>
  )
}

export default Contact