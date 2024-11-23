import React, { useEffect } from 'react'
import Project from './Project'
import About from './About'
import Contact from './Contact'
import nike from '../image/nike.jpg'
import nike3 from '../image/nike3.jpg'
import nike5 from '../image/nike5.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
     AOS.init({duration: 2000})
  },[])
  return (
    <div className='hero '>
      <div className='content py-4'>
        <div className='bg-red-500 text-white p-5'  data-aos="fade-right">
          {/* <img src={nike} alt='img'></img> */}
          <h1 className='text-4xl font-bold py-2'>Nike empower you to perform your best.</h1>
          <h4 className='text-2xl font-bold py-2'>XYZ Series</h4>
          <p className="py-4">Nike is a global leader in athletic footwear, apparel, and equipment. Founded in 1964 as Blue Ribbon Sports and renamed Nike, Inc. in 1971, the company is recognized for its innovative designs, high-performance products, and iconic "Swoosh" logo. Nike caters to athletes and fitness enthusiasts, offering a wide range of products including running shoes, training gear, sportswear, and lifestyle collections. </p>
          <button className='bg-slate-50 text-red-500 py-2 px-4 rounded'>Check Out</button>
        </div>
        <div data-aos="fade-left">
        <h1 className='text-4xl font-bold py-2'>Nike,<span className='text-red-500'>Just Do It.</span></h1>
        <h4>Exclusively Built for <strong>India</strong></h4>
        <p className='py-4'>"Nike inspires greatness with innovative sportswear, cutting-edge technology, and bold designs. From athletes to everyday champions, we empower you to perform your best and express your unique style. Just Do It."</p>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'>Check Out For the Products</button>
        <button className='bg-red-500 text-white py-2 px-4 rounded'>View 360</button>
        <h4>Sample Images</h4>
        <div className='sample'>
          <img src={nike} alt='img'/>
          <img src={nike3} alt='img'/>
          <img src={nike5} alt='img'/>
        </div>
        </div>
        </div>
        <About/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Home