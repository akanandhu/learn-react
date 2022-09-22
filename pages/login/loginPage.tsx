import React from 'react'
import student from '/public/images/student.png';
import Image from 'next/image';

function loginPage() {
  return (
    <div className='h-screen w-[100%] flex flex-row'>
      <div className='h-full w-[54%] bg-orangeBG flex justify-center '>
      <div className='h-[63%] w-[78%] pt-[13%] pl-[13%] pr-[11%] pb-[21%]  '>
        <Image src={student} className="object-scale-down" />
      </div>
      </div>

      <div className='h-full w-[46%] bg-white'>
        
      
      </div>

      
    </div>
  )
}

export default loginPage
