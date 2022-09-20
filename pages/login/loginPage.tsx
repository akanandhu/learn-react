import React from 'react'
import student from '/public/images/student.png';
import Image from 'next/image';

function loginPage() {
  return (
    <div className=' flex flex-col lg:flex-row md:flex-row h-[550px] w-[100%]  md:flex md:h-[930px] md:w-[100%] lg:flex lg:h-[930px] lg:w-[100%]'>
        <div className=' mb-24 bg-white h-[100%] w-[100%] content-center flex flex-row  lg:bg-orangeBG lg:h-[100%] lg:w-[50%] lg:flex lg:justify-center lg:content-center md:bg-greenBG sm:h-[100%] sm:w-[50%] '>
            <div className=' h-[200px] w-[100%] content-center ml-16 mt-5   lg:h-[700px] lg:w-[700px] lg:content-center lg:ml-8 lg:align-middle lg:mt-14 sm:h-[100%] sm:w-[100%] sm:ml-8 sm:mt-14  '> 
            <Image src={student}  className=' object-fill '/>
            </div>
        </div>
        <div className= 'h-[100%] w-[100%] flex justify-center flex-1 lg:bg-white lg:h-[100%] lg:w-[50%] md:w-[50%]  lg:flex lg:justify-center lg:flex-1 sm:bg-white sm:h-[100%] sm:w-[50%] sm:flex sm:justify-center sm:flex-1'>
        <div className='lg:ml-24 h-[400px] w-[80%] justify-center flex flex-col lg:h-[559px] lg:w-[617px] lg:flex lg:flex-col  lg:pt-[218px]  lg:gap-14 lg:mt-4 md:h-[50%] md:w-[80%] md:flex md:flex-col md:pt-[218px] md:pr-[139px] md:gap-14 md:mt-4'>
            <h1 className='lg:text-black lg:text-center lg:font-semibold lg:text-3xl sm:text-center sm:font-semibold md:text-2xl text-3xl '>Login</h1>
            <input type='number' placeholder='Phone number' className='mt-5 h-[60px] flex rounded-[8px] border-solid border-2 border-borderColor md:flex md:rounded-[8px] md:border-solid md:border-2 md:border-borderColor   lg:flex lg:rounded-[8px] lg:border-solid lg:border-2  lg:border-borderColor  lg:h-[59px] lg:w=[523px] sm: placeholder-gray-500 placeholder:font-semibold px-4 '></input>
            <button className=' flex bg-bluebutton w-[70px] rounded-xl h-[30px] mt-5 ml-24  text-white pl-4 md:flex md:bg-bluebutton md:w-[140px]   md:rounded-xl md:h-[40] md:text-white md:font-sans md:font-semibold md:pl-12 md:text-justify lg:flex lg:bg-bluebutton lg:w-[490px] lg:h-[59px] lg:text-white lg:font-sans lg:font-semibold lg:ml-0 md:ml-0 lg:rounded-md lg:justify-center '>Login</button>
        </div>
        </div>
      
    </div>
  )
}

export default loginPage
