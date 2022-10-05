import React from 'react'
import Image from 'next/image'
import SignUpLeft from '../../components/Signup/SignUpLeft';
import SignUpRight from '../../components/Signup/SignUpRight';


function signUp() {
  return (
    <div className='h-[100%] w-[100%] lg:pl-0 md:pl-0 pl-[10%] lg:pt-0 md:pt-0 pt-[10%]  lg:flex lg:h-[100%] lg:overflow-hidden md:h-full  md:overflow-hidden lg:fixed lg:w-[100%] md:flex md:flex-row md:w-[100%]'>
        <SignUpLeft />
        <div className=' bg-tableBG pt-0  md:pt-10 lg:pt-0 lg:overflow-hidden h-[100%]     md:bg-tableBG md:h-[100%] md:w-[65%] md:justify-center  md:flex lg:bg-tableBG  lg:h-[100%] lg:w-[60%] lg:justify-center  lg:flex'>
        <SignUpRight heading='Signup' />
        </div>
        </div>
      
    
  )
}

export default signUp