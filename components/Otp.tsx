import React from 'react'

function Otp() {
  return (
    <div className='pl-10 pr-10 pt-5 pb-5 bg-tableBG shadow-[0px_0px_2px_rgba(0,0,0,0.2)] '>
    <div className='flex flex-col gap-2 h-[100%] w-[100%] pt-8 pb-8 '>
      <h1 className=' font-mont font-semibold text-3xl mb-6 '>Verify OTP</h1>
      <div>
      <h3 className=' font-sans font-normal text-grayFont'>Enter the OTP sent to the</h3>
      <h3 className=' font-sans text-grayFont font-normal mb-4 '>Mobile number <span className=' text-gray-600 font-bold'>+91 91828202029 </span></h3>
      </div>
      <div className='flex flex-row gap-4 mb-2'>
      <div className=' bg-boxBG h-[62px] w-[62px] border-boxBorder rounded-[10px] border-solid border-[1px]'></div>
      <div className=' bg-boxBG h-[62px] w-[62px] border-boxBorder rounded-[10px] border-solid border-[1px]'></div>
      <div className=' bg-boxBG h-[62px] w-[62px] border-boxBorder rounded-[10px] border-solid border-[1px]'></div>
      <div className=' bg-boxBG h-[62px] w-[62px] border-boxBorder rounded-[10px] border-solid border-[1px]'></div>
      </div>
      <h3 className='font-sans font-bold mb-1'>00:45</h3>
      <button className=' bg-greenBG h-[59px] w-[353px] text-white font-mont font-semibold text-lg rounded-md mb-5'>Login</button>
      <h3 className='text-grayFont font-medium font-mont pl-[40%]'>Resent OTP</h3>
    </div>
    </div>
  )
}

export default Otp
