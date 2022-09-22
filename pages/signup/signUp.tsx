import React from 'react'
import Image from 'next/image'
import student from '/public/images/student.png'
import line from '/public/images/line 18.png';


function signUp() {
  return (
    <div className='h-[500px] w-[500px] lg:flex lg:h-[900px] lg:w-[100%] md:flex md:h-[800px] md:w-[100%]'>
        <div className=' flex justify-center  md:bg-orangeBG md:h-[100%] md:w-[50%] md:flex md:justify-center md:content-center lg:bg-greenBG lg:h-[100%] lg:w-[50%] lg:flex lg:justify-center lg:content-center '>
            <div className='flex  justify-center ml-12 mt-20 align-middle  md:flex md:justify-center md:h-[70%] md:w-[80%] md:content-center md:ml-8 md:mt-20 md:align-middle lg:h-[700px] lg:w-[700px] lg:content-center lg:ml-8 lg:align-middle lg:mt-14 '> 
            <Image src={student}  className=' object-scale-down '/>
            </div>
        </div>
        <div className=' mt-20 ml-24 flex justify-center  md:ml-24 md:bg-white md:h-[100%] md:w-[50%] md:justify-center  md:flex lg:bg-white lg:h-[100%] lg:w-[50%] lg:justify-center  lg:flex'>
        <form className=' justify-center  md:h-[500px] md:w-[500px] md:flex md:flex-col md:justify-center lg:h-[579px] lg:w-[517px] lg:flex lg:flex-col lg:justify-center '>
           <div className='flex flex-col relative '>
            <label className="text-3xl mb-4 font-semibold lg:text-2xl lg:mb-5 lg:font-semibold md:text-3xl md:mb-5 md:font-semibold font-mont" > Sign Up </label>
            <input placeholder='Phone number' type='number' className='lg: mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-4'></input>
            <input placeholder='Student name' className='mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-4'></input>
            <input placeholder='Student Email'  className='mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-4'></input>
           </div>
           <div>
            <label className='text-lg '>Select Class</label>
            <div className='flex flex-row mt-5 pl-2'>
            <button className= ' bg-white border-slate-400 border-[3px] w-[120px] h-[43px] mr-5 rounded-[60px]'>Plus One</button>
            <button className=' bg-white border-slate-400 border-[3px] w-[120px] h-[43px] rounded-[60px]'>Plus Two</button> 
            
            </div>
            <button className='font-semibold bg-greenBG h-[60px] w-[350px] mt-6 rounded-xl md:bg-greenBG md:h-[80px] md:w-[400px] md:mt-6 md:rounded-xl lg:bg-greenBG lg:h-[80px] lg:w-[500px] lg:mt-6 lg:rounded-[10px] '>Signup</button>
            
            <h3 className='flex flex-1 justify-start text-[16px] font-semibold font-sans  pt-3'>Already have an account? <span className='text-greenBG text-[16px]'> Login </span></h3>
           </div>
          
        </form>
            
        </div>
        </div>
      
    
  )
}

export default signUp