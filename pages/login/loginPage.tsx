import React from 'react'
import student from '/public/images/student.png';
import Image from 'next/image';
import Signin from '../../components/Signin';

function loginPage() {
  return (
    <div className=' md:h-[100%] md:w-[100%]  lg:h-[100%] lg:w-[100%] lg:flex lg:flex-row md:flex md:flex-row flex flex-col'>
      <div className='w-screen lg:h-screen lg:w-[54%] lg:pb-30 lg:bg-orangeBG lg:flex lg:justify-center md:h-screen md:w-[100%] md:pt-28  md:bg-orangeBG md:flex md:justify-center h-full  bg-white flex justify-center'>
      <div className='h-full w-full md:pt-5  pl-[13%] pr-[11%] md:pb-[9%]   '>
        <Image src={student} className="object-scale-down" />
      </div>
      </div>

      <div className='  ml-0 mt-10 h-full w-[100%] bg-white flex justify-center align-middle md:h-screen md:w-[100%] md:bg-white md:flex md:justify-center md:align-middle lg:h-full lg:w-[46%] lg:bg-white lg:flex lg:justify-center lg:align-middle'>
        <Signin/>
      
      </div>

      
    </div>
  )
}

export default loginPage
