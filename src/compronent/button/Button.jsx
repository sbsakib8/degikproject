import React from 'react'
import cn from '../cn/Cnbutton'

function Button({btn,className}) {
  return (
    <div>
        
        <button className={ cn(' text-white w-[121px] h-[49px] rounded-xl py-[14px] bg-[#5F62E2]', className)}>{btn}</button>
    </div>
  )
}

export default Button