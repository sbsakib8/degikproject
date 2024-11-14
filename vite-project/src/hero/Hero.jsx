import React from 'react'
import Button from '../compronent/button/Button'

function Hero() {
  return (
    <>
    {/* main div */}
        <div className=' flex flex-1 flex-col lg:flex-row container'>
            {/* left sight */}
          <div>
            <h1  className=' max-w-[642] h-174px mt-5 mr-5 '> Simply explained with illustrations</h1>
            <p>There are a lot of different components that will help you create the perfect look for your project</p>
            {/* button div */}
            <div>
               <Button btn='Get Started'/>
               <Button btn='Learn More'/>
            </div>
          </div>


          {/* right sight */}
          <div>

            <img src="/Component 1.png" alt="" />
          </div>
        </div>
    </>
  )
}

export default Hero