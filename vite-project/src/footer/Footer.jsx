import React from 'react'
import footerdata from '../data/footer/Footerdata'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <div className=' bg-black text-white'>
      <div className=' container  py-6 md:pt-10 lg:pt-20'>
      
        <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ' >
        <div>
            <img className='w-full' src="degic(1) 1.png" alt="" />
          </div>
          {
            footerdata.map((itme) => (
              <div className=' flex' key={itme.id}>
                {/* title div */}
              <div className=' flex'>
              <div className=' pb-8'>
                  <h2 className=' font-medium text-[20px]'>{itme.title}</h2>
                  <p className=' font-normal text-[18px] text-gray-400'>{itme.link2}</p>
                  <p className=' font-normal text-[18px] text-gray-400'>{itme.link3}</p>
                  <p className=' font-normal text-[18px] text-gray-400'>{itme.link4}</p>
                  <p className=' font-normal text-[18px] text-gray-400'>{itme.link5}</p>
                </div>
              </div>
              </div>
            ))
          }
        </div>
        <hr />

        <div className=' mt-5 flex justify-between'>
       <div>
       <p> Copyright Degic © 2020 </p>
       </div>

       {/* icon div */}
       <div className=' flex '>
        <div className='  mx-4 flex justify-center items-center w-[50px] h-[50px] bg-[#141414] rounded-full'>
          <FacebookIcon/>
        </div>
        <div className=' mx-4  flex justify-center items-center w-[50px] h-[50px] bg-[#141414] rounded-full'>
          <InstagramIcon/>
        </div>
        <div className='  mx-4 flex justify-center items-center w-[50px] h-[50px] bg-[#141414] rounded-full'>
          <XIcon/>
        </div>

       </div>

        </div>


      </div>
      

    </div>
  )
}

export default Footer