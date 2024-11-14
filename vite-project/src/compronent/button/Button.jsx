import React from 'react'

function Button(props) {
  return (
    <div>
        
        <button className=' text-white w-[121px] h-[49px] rounded-xl py-[14px] bg-[#5F62E2]'>{props.btn}</button>
    </div>
  )
}

export default Button