import React from 'react'
import Image from 'next/image'
import student from '/public/images/student.png'
import line from '/public/images/line 18.png';
import SignUpTable from '../../components/signUpTable';


function signUp() {
  return (
    <div className='h-[500px] w-[500px] lg:flex lg:h-[900px] lg:w-[100%] md:flex md:h-[800px] md:w-[100%]'>
        <div className=' flex justify-center  md:bg-orangeBG md:h-[100%] md:w-[50%] md:flex md:justify-center md:content-center lg:bg-greenBG lg:h-[100%] lg:w-[50%] lg:flex lg:justify-center lg:content-center '>
            <div className='flex  justify-center ml-12 mt-20 align-middle  md:flex md:justify-center md:h-[70%] md:w-[80%] md:content-center md:ml-8 md:mt-20 md:align-middle lg:h-[700px] lg:w-[700px] lg:content-center lg:ml-8 lg:align-middle lg:mt-14 '> 
            <Image src={student}  className=' object-scale-down '/>
            </div>
        </div>
        <div className=' mt-20 ml-24 flex justify-center  md:ml-24 md:bg-white md:h-[100%] md:w-[50%] md:justify-center  md:flex lg:bg-white lg:h-[100%] lg:w-[50%] lg:justify-center  lg:flex'>
        
           <SignUpTable/>
        </div>
        </div>
      
    
  )
}

export default signUp