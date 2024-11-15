import React from 'react'
import Button from '../compronent/button/Button'
import Exploresdata from '../data/exploredate/Exploresdata'
function Explore() {
  return (
    <>
  {/* main div */}
       <div className=' container bg-boxColor grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* left sight */}
        <div className='grid grid-cols-1 mx-auto  md:grid-cols-2 gap-2 md:gap-x-32 lg:gap-x-40'>
        {
          Exploresdata.map((item) => (
            <div  key={item.id} className='  bg-white w-[300px] h-[310] flex flex-1 flex-col rounded-xl gap-7 '>
             <div className='bg-boxColor w-[130px] h-[130px] rounded-full'>
             <img className=' mx-auto mt-3 w-[96px] h-[96px]' src={item.ing} alt={item.title} />
             </div>
              
                <h3 className=' font-medium text-[24px] leading-7 text-center'>{item.title}</h3>
                <p className=' max-w-[236px] text-[17px] font-normal leading-6'>{item.preragraph}</p>
             
            </div>
          ))
        }
        </div>
      
        {/* right sight */}
         <div>
          <h2>The quickest way to create modern presentation</h2>
          <p>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
           <Button btn='Explore All'/>
         </div>
       

       </div>


    </>
  )
  }

export default Explore