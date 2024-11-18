import React from 'react'
import Blogdata from './../data/blog/Blogdata';
import Button from '../compronent/button/Button';
function Blog() {
  return (
    <div className=' container py-8 md:py-11 lg:py-16 '>
      {/* top div */}
      <div className=' flex flex-1 flex-col lg:flex-row lg:justify-between '>
        {/* title div */}
        <div>
          <h1 className=' font-medium text-[55px] leading-[60px] text-wrap text-black'>Get more from our blog</h1>
          <p className=' max-w-[448px] text-[21px] leading-[30px] text-wrap text-gray-400 '>There are a lot of different components that will help you create the perfect look for your project.</p>
        </div>
        {/* button dib */}
        <div className='mt-6'>
          <Button btn='Explore All'/>
        </div>
      </div>

{/* cord div */}
      <div >
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mt-10 '>
         {
          Blogdata.map((item) => (
            <div className=' mt-3 w-[410px] h-[471px] mx-auto'>
             <div className=' w-[350px] h-[275px] bg-boxColor rounded-[10px] '> <img className=' mx-auto pt-9' src={item.img} alt={item.title} /></div>
              <h2 className=' max-w-[327px] font-medium text-[28px] leading-[34px] mt-3'>{item.title}</h2>
              <p className='max-w-[327px] font-normal leading-[25px] text-gray-400 text-wrap mt-3'>{item.description}</p>
              <button className=' mt-3 h-[40px] px-3 rounded-[7px] bg-[#2AB6911C]'>{item.btn}</button>
            </div>
          ))
         }
        </div>
      </div>

    </div>
  )
}

export default Blog