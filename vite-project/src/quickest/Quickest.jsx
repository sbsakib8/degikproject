import React from 'react'


function Quickest() {
  return (
    <div className=' bg-primaryColor w-full  h-[345px]'>

    <div className=' container flex flex-col md:flex-row flex-1 justify-between'>
      {/* left div */}
      <div className=' mt-4 md:mt-9 lg:mt-20'>
        <h1 className=' font-medium text-[55px] leading-[60px] text-wrap text-white'>The quickest way to create awesome presentation</h1>
        {/*button div*/}
        <div className=' flex flex-1 gap-4 mt-5'>
        <button className= ' text-white w-[121px] h-[49px] rounded-xl py-[14px] bg-[#37ea52]'>Get Started</button>
        <button className= ' text-white w-[121px] h-[49px] rounded-xl py-[14px] bg-[#7071b7]'>Learn More</button>
          
        </div>
      </div>

      {/* right div */}
      <div className=' lg:mt-32'>
        <img className=' hidden md:block w-full' src="bomb 1.png" alt="" />
      </div>

    </div>


    </div>
  )
}

export default Quickest