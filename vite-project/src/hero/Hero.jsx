import React from 'react'
import Button from '../compronent/button/Button'

function Hero() {
  return (
    <>
    {/* main div */}
        <div className=' flex flex-1 flex-col lg:flex-row container mt-2'>
            {/* left sight */}
          <div className=' order-2 lg:order-1 '>
            <h1  className='max-w-[682px]  font-bold text-[50px] lg:text-[72px] lg:leading-[87.14px] mb-2 text-wrap '> Simply explained with illustrations</h1>
            <p className=' font-normal text-[21px] leading-8 max-w-[448px] text-wrap'>There are a lot of different components that will help you create the perfect look for your project</p>
            {/* button div */}
            <div className='flex gap-3 mt-3'>
               <Button  btn='Get Started'/>
               <Button btn='Learn More'/>
            </div>
          </div>


          {/* right sight */}
          <div className=' order-1 lg:order-2 '>

            <img className=' w-full flex-1' src="/Component 1.png" alt="" />
          </div>
        </div>
    </>
  )
}

export default Hero