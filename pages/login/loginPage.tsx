import React from 'react'
import student from '/public/images/student.png';
import Image from 'next/image';
import Signin from '../../components/Signin';

function loginPage() {
  return (
    <div className='h-screen w-full lg:flex lg:flex-row md:flex md:flex-row flex flex-col'>
      <div className='w-screen lg:h-full lg:w-[54%] lg:bg-orangeBG lg:flex lg:justify-center md:h-full md:w-[54%] md:bg-orangeBG md:flex md:justify-center h-full  bg-orangeBG flex justify-center'>
      <div className='h-[63%] w-full pt-[13%] pl-[13%] pr-[11%] pb-[21%]  '>
        <Image src={student} className="object-scale-down" />
      </div>
      </div>

      <div className=' ml-10 mt-10 h-full w-[40%] bg-white flex justify-center align-middle md:h-full md:w-[100%] md:bg-white md:flex md:justify-center md:align-middle lg:h-full lg:w-[46%] lg:bg-white lg:flex lg:justify-center lg:align-middle'>
        <Signin/>
      
      </div>

      
    </div>
  )
}

export default loginPage
