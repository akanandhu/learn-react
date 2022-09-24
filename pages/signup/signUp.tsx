import React from 'react'
import Image from 'next/image'
import student from '/public/images/student.png'
import line from '/public/images/line 18.png';
import SignUpTable from '../../components/SignUpTable';


function signUp() {
  return (
    <div className='h-[500px] w-[500px] lg:flex lg:h-[100%] lg:w-[100%] md:flex md:h-[800px] md:w-[100%]'>
        <div className=' flex justify-center  md:bg-orangeBG md:h-[100%] md:w-[50%] md:flex md:justify-center md:content-center lg:bg-greenBG lg:h-screen lg:w-[50%] lg:flex lg:justify-center lg:content-center '>
            <div className='flex  justify-center ml-12 mt-2 align-middle  md:flex md:justify-center md:h-[70%] md:w-[80%] md:content-center md:ml-8 md:mt-20 md:align-middle lg:h-[70%] lg:w-[70%] lg:content-center lg:ml-8 lg:align-middle  '> 
            <Image src={student}  className=' object-scale-down '/>
            </div>
        </div>
        <div className=' bg-tableBG lg:border lg:shadow-[0px_opx_2px_rgba(0,0,0,0.2)] lg:mb-1 lg:mr-[5%] lg:flex-1  lg:mt-20 lg:ml-24 flex justify-center  md:ml-24 md:bg-tableBG md:h-[100%] md:w-[50%] md:justify-center  md:flex lg:bg-tableBG lg:pl-0 lg:pr-20 lg:pb-5 lg:pt-2 lg:h-[100%] lg:w-[50%] lg:justify-center  lg:flex'>
        
           <SignUpTable/>
        </div>
        </div>
      
    
  )
}

export default signUp