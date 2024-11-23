import React, { useEffect } from 'react'
import nike from '../image/nike.jpg'
import nike3 from '../image/nike3.jpg'
import nike5 from '../image/nike5.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Project = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
 },[])
  return (
    <div id='product' data-aos="fade-zoom-out">
        <div className='card'>
        <img src={nike} alt='img'></img>
        <div className='py-4 px-2'>
        <h2>Product1</h2>
        <h4>999.99</h4>
        <p>This is short description of Product 1</p>
        <button className='bg-red-500 text-white py-2 px-4 rounded'>Add to Cart</button>
        </div>
        </div>
        <div className='card'>
        <img src={nike5} alt='img'></img>
        <div className='py-4 px-2'>
        <h2>Product2</h2>
        <h4>999.99</h4>
        <p>This is short description of Product 2</p>
        <button className='bg-red-500 text-white py-2 px-4 rounded'>Add to Cart</button>
        </div>
        </div>
        <div className='card'>
        <img src={nike3} alt='img'></img>
        <div className='py-4 px-2'>
        <h2>Product3</h2>
        <h4>999.99</h4>
        <p>This is short description of Product 3</p>
        <button className='bg-red-500 text-white py-2 px-4 rounded'>Add to Cart</button>
        </div>
        </div>
        <div className='card'>
        <img src={nike5} alt='img'></img>
        <div className='py-4 px-2'>
        <h2>Product4</h2>
        <h4>999.99</h4>
        <p>This is short description of Product 4</p>
        <button className='bg-red-500 text-white py-2 px-4 rounded'>Add to Cart</button>
        </div>
        </div>
        <div className='card'>
        <img src={nike3} alt='img'></img>
        <div className='py-4 px-2'>
        <h2>Product5</h2>
        <h4>999.99</h4>
        <p>This is short description of Product 5</p>
        <button className='bg-red-500 text-white py-2 px-4 rounded'>Add to Cart</button>
        </div>
        </div>
        <div className='card'>
        <img src={nike} alt='img'></img>
        <div className='py-4 px-2'>
        <h2>Product6</h2>
        <h4>999.99</h4>
        <p>This is short description of Product 6</p>
        <button className='bg-red-500 text-white py-2 px-4 rounded'>Add to Cart</button>
        </div>
        </div>
        </div>
  )
}

export default Project