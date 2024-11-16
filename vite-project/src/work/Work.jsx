import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Work() {
  return (
    <>
    {/* main div */}
      <div className=' container flex flex-1 gap-4 flex-col lg:flex-row'>
          {/* left div */}
        <div className='w-1/2'>

          {/* logo div */}
          <div>
            <img className='  text-white w-[]' src="/Shape.png" alt="" />
            <p>Logo</p>
          </div>

          <h1>Make more time for the work that matters most</h1> 
          <p>Best software platform for running an internet business.</p>

          <div>
            <button> <ArrowBackIosIcon/> </button>
            <button> <ArrowForwardIosIcon/> </button>
          </div>
        </div>
        {/* right div */}
        <div>

          <img src="/Group 35.png" alt="" />
        </div>

      </div>

    </>
  )
}

export default Work