import React from 'react'

function Otp() {
  return (
    <div className=' rounded-lg pl-10 pr-10 pt-5 pb-5 bg-tableBG shadow-[0px_0px_2px_rgba(0,0,0,0.2)] lg:pl-10 lg:pr-10 lg:pt-5 lg:pb-5 lg:bg-tableBG lg:shadow-[0px_0px_2px_rgba(0,0,0,0.2)] md:pl-10 md:pr-10 md:pt-1 md-5 md:bg-tableBG md:shadow-[0px_0px_2px_rgba(0,0,0,0.2)]  '>
    <div className=' flex flex-col gap-2 h-[100%] w-[100%] pt-8 pb-8 lg:flex lg:flex-col lg:gap-2 lg:h-[100%] lg:w-[100%] lg:pt-8 lg:pb-8 md:flex md:flex-col md:gap-2 md:h-[100%] md:w-[100%] md:pt-8 md:pb-8 '>
      <h1 className="font-['Montserrat_Regular'] text-3xl lg:text-3xl lg:mb-6 md:text-3xl md:mb-4  lg:font-extrabold ">Verify OTP</h1>
      <div>
      <h3 className=' font-sans font-normal text-grayFont'>Enter the OTP sent to the</h3>
      <h3 className=' font-sans text-grayFont font-normal lg:mb-4 md:mb-3 '>Mobile number <span className=' text-gray-600 text-xs font-bold'>+91 91828202029 </span></h3>
      </div>
      <div className='flex flex-row gap-4 mb-2 lg:flex lg:flex-row lg:gap-4 lg:mb-2 md:flex md:flex-row md:gap-4 md:mb-2'>
      <div className=' bg-boxBG h-[36px] w-[36px] lg:h-[62px] lg:w-[62px] md:h-[42px] md:w-[42px] border-boxBorder rounded-[10px] border-solid border-[1px]'></div>
      <div className=' bg-boxBG h-[36px] w-[36px] lg:h-[62px] lg:w-[62px] md:h-[42px] md:w-[42px] border-boxBorder rounded-[10px] border-solid border-[1px]'></div>
      <div className=' bg-boxBG h-[36px] w-[36px] lg:h-[62px] lg:w-[62px] md:h-[42px] md:w-[42px] border-boxBorder rounded-[10px] border-solid border-[1px]'></div>
      <div className=' bg-boxBG h-[36px] w-[36px] lg:h-[62px] lg:w-[62px] md:h-[42px] md:w-[42px] border-boxBorder rounded-[10px] border-solid border-[1px]'></div>
      </div>
      <h3 className='mb-1  font-sans font-bold lg:mb-1 md:mb-2 text-sm md:text-base  lg:text-sm'>00:45</h3>
      <button className=" bg-greenBG h-[40px] w-[300px] lg:h-[59px] lg:w-[353px] md:h-[59px] md:w-[253px] md:mb-4 text-white font-['Montserrat_Regular'] font-semibold text-base rounded-md lg:mb-5">Login</button>
      <h3 className=" text-resetText font-extrabold text-sm font-['Montserrat_Regular'] pl-[36%] lg:pl-[40%] md:pl-[35%]">Resent OTP</h3>
    </div>
    </div>
  )
}

export default Otp
