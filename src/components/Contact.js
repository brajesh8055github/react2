import React from 'react'
const Footer = () => {
  return (
    <div id="contact" className="bg-gray-800 text-white p-6 text-center">
      <form>
        <input className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500' type='text' placeholder='Enter name'></input>
             <input className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500' type='email' placeholder='Enter email'></input>
             <input className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500' type='number' placeholder='Mobile no.'></input>
             <input className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500' type='text' placeholder='Message'></input>
             <button className='bg-red-500 text-white py-2 px-4 rounded'>Submit</button>
         </form>
    </div>
  );
};

export default Footer;
