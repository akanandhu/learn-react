import React from 'react'
import Image from 'next/image'
import SignUpLeft from '../../components/Signup/SignUpLeft';
import SignUpRight from '../../components/Signup/SignUpRight';


function signUp() {
  return (
    <div className='h-screen w-[100%] lg:flex lg:h-[100%] overflow-hidden md:h-full  md:overflow-hidden lg:fixed lg:w-[100%] md:flex  md:w-[100%]'>
        <SignUpLeft />
        <div className=' bg-tableBG lg:border lg:mb-[10%] lg:mr-[5%] lg:flex-1  lg:mt-[5%]  lg:ml-36 flex justify-center md:pr-[5%]  md:bg-tableBG md:h-[100%] md:w-[65%] md:justify-center  md:flex lg:bg-tableBG lg:pl-0 lg:pr-20 lg:pb-5 lg:pt-2 lg:h-[100%] lg:w-[50%] lg:justify-center  lg:flex'>
        <SignUpRight heading='Signup' />
        </div>
        </div>
      
    
  )
}

export default signUp