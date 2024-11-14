import React from 'react'
import Button from '../compronent/button/Button'

function Hero() {
  return (
    <>
    {/* main div */}
        <div>
            {/* left sight */}
          <div>
            <h1> Simply explained with illustrations</h1>
            <p>There are a lot of different components that will help you create the perfect look for your project</p>
            {/* button div */}
            <div>
              <button> <Button btn='Get Started'/> </button>
            </div>
          </div>


          {/* right sight */}
          <div></div>
        </div>
    </>
  )
}

export default Hero