import React from 'react'
import Button from '../compronent/button/Button'
import DoneIcon from '@mui/icons-material/Done';
function Make() {
  return (
    <>

    <div className=' container py-8 md:py-11 lg:py-20 '>
{/* section 1 */}
     <div className=' flex flex-1 flex-col lg:flex-row'>
      {/* img div */}
      <div className=' lg:w-1/2 py-5'>
        <img className='w-[520px] h-[275px] ' src="Group 17.png" alt="" />
      </div>

      {/* title div */}
      <div className=' lg:ml-20'>
        <h1 className=' text-[55px] font-medium leading-[60px] max-w-[463px] mb-4 '>Make more time for the work</h1>
        <p className='text-[21px] font-normal leading-[30px] text-wrap text-black'> <DoneIcon/> Many ways to use illustrations in design</p>
        <p className='text-[21px] font-normal leading-[30px] text-wrap text-black'> <DoneIcon/> Simply explained with illustrations</p>
        <p className='text-[21px] font-normal leading-[30px] text-wrap text-black mb-8'> <DoneIcon/> Make more time for the work</p>
         <Button btn='Learn more'/>
      </div>

     </div>








{/* section 2 */}
<div className=' flex flex-1 flex-col lg:flex-row mt-12 lg:mt-20'>
      {/* img div */}
      <div className=' lg:order-2 lg:w-1/2 py-5'>
        <img className='w-[500px] h-[275px] ' src="Group 22.png" alt="" />
      </div>

      {/* title div */}
      <div className=' lg:order-1 lg:ml-20'>
        <h1 className=' text-[55px] font-medium leading-[60px] max-w-[463px] mb-4 '>Make more time for the work</h1>
        <p className='text-[21px] font-normal leading-[30px] text-wrap text-black'> <DoneIcon/> Many ways to use illustrations in design</p>
        <p className='text-[21px] font-normal leading-[30px] text-wrap text-black'> <DoneIcon/> Simply explained with illustrations</p>
        <p className='text-[21px] font-normal leading-[30px] text-wrap text-black mb-8'> <DoneIcon/> Make more time for the work</p>
         <Button btn='Learn more' className=' bg-[#5F62E226] text-[#5F62E2]'/>
      </div>

     </div>



    </div>


    </>
  )
}

export default Make