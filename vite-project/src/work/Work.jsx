import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Work() {
  return (
    <>  
    <div>

       {/* main div */}
      <div className=' container flex flex-1 gap-4 flex-col lg:flex-row py-8 md:py-12 lg:py-16'>
          {/* left div */}
        <div className=' lg:w-1/2'>

          {/* logo div */}
          <div>
            <img className=' text-white w-[34px] h-[34px] inline-block' src="/Shape.png" alt="" />
            <p className=' inline-block ml-5 text-[20px] font-medium'>Logo</p>
          </div>

          <h1 className=' lg:max-w-[463px] text-wrap text-[55px] font-medium  leading-[55px] lg:leading-[60px] mt-4'>Make more time for the work that matters most</h1> 
          <p className=' max-w-[322px] my-4 text-[21px] font-normal leading-[30px] text-wrap text-gray-500 '>Best software platform for running an internet business.</p>

          <div>
            <button className=' bg-gray-300 w-[50px] h-[50px] rounded-full pl-2 mr-6'> <ArrowBackIosIcon/> </button>
            <button className=' bg-gray-300 w-[50px] h-[50px] rounded-full pl-2'> <ArrowForwardIosIcon/> </button>
          </div>
        </div>
        {/* right div */}
        <div>

          <img className=' mt-5 mx-auto h-[405px] lg:max-w-[471px] lg:h-[551px] object-cover' src="/Group 35.png" alt="" />
        </div>
         
          
         
      </div>
      <img className=' container mx-auto w-[500px] md:w-[1100px] pb-7' src="Logos.png" alt="" />
    </div>
    

    </>
  )
}

export default Work