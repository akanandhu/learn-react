import React from 'react'
import student from '/public/images/student.png';
import Image from 'next/image';

function loginPage() {
  return (
    <div className=' flex h-[930px] w-[100%]'>
        <div className='  bg-orangeBG h-[100%] w-[50%] flex justify-center content-center'>
            <div className='h-[700px] w-[700px] content-center ml-8 align-middle mt-14 '> 
            <Image src={student}  className=' object-fill '/>
            </div>
        </div>
        <div className='bg-white h-[100%] w-[50%]  flex justify-center flex-1'>
        <div className='h-[559px] w-[617px] flex flex-col  pt-[218px] pr-[139px] gap-14 mt-4'>
            <h1 className='text-black text-center font-semibold text-3xl'>Login</h1>
            <input type='number' placeholder='Phone number' className=' rounded-[8px] border-solid border-2  border-borderColor  h-[59px] w=[523px] placeholder-gray-500 placeholder:font-semibold px-4 '></input>
            <button className=' bg-bluebutton w-[490px] h-[59px] text-white font-sans font-semibold rounded-md'>Login</button>
        </div>
        </div>
      
    </div>
  )
}

export default loginPage
