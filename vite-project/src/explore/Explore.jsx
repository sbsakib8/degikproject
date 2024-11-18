import React from 'react'
import Button from '../compronent/button/Button'
import Exploresdata from '../data/exploredate/Exploresdata'
function Explore() {
  return (
    <>
  {/* main div */}
       <div className=' container w-full bg-boxColor grid grid-cols-1 lg:grid-cols-2 gap-5py-8 py-9 md:py-14 lg:py-20'>
        {/* left sight */}
        <div className='grid grid-cols-1 mx-auto  md:grid-cols-2 gap-6 md:gap-x-32 lg:gap-x-35 '>
        {
          Exploresdata.map((item) => (
            <div  key={item.id} className='  bg-white w-[300px] h-[310] flex flex-1 flex-col rounded-xl gap-7 py-7'>
             <div className='bg-boxColor w-[130px] h-[130px] rounded-full mx-auto'>
             <img className=' mx-auto mt-3 w-[96px] h-[96px]' src={item.ing} alt={item.title} />
             </div>
              
                <h3 className=' font-medium text-[24px] leading-7 text-center'>{item.title}</h3>
                <p className=' max-w-[236px] text-[17px] font-normal leading-6 mx-auto text-wrap'>{item.preragraph}</p>
             
            </div>
          ))
        }
        </div>
      
        {/* right sight */}
         <div className='lg:ml-[135px] mt-7 lg:mt-0 '>
          <h2 className=' max-w-[463px] font-medium text-[44px] md:text-[55px] leading-[50px] lg:leading-[60px] text-wrap mb-7'>The quickest way to create modern presentation</h2>
          <p className=' max-w-[448px] text-wrap font-normal text-[21px] leading-[30px] mb-5'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
           <Button btn='Explore All' />
         </div>
       

       </div>


    </>
  )
  }

export default Explore