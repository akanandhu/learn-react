import React from 'react'
import Image from 'next/image'
import student from '/public/images/student.png'
import line from '/public/images/line 18.png';


function signUp() {
  return (
    <div className=' flex h-[930px] w-[100%]'>
        <div className=' bg-greenBG h-[100%] w-[50%] flex justify-center content-center'>
            <div className='h-[700px] w-[700px] content-center ml-8 align-middle mt-14 '> 
            <Image src={student}  className=' object-fill '/>
            </div>
        </div>
        <div className='bg-white h-[100%] w-[50%] justify-center  flex'>
        <form className='h-[879px] w-[617px] flex flex-col justify-center '>
           <div className='flex flex-col relative '>
            <label className="text-2xl mb-5 font-semibold" > Sign Up </label>
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
            <button className='lg:bg-greenBG h-[80px] w-[500px] mt-6 rounded-[10px] '>Signup</button>
            
            <h3 className='text-[16px] font-semibold font-sans pl-36 pt-3'>Already have an account? <span className='text-greenBG text-[16px]'>Login </span></h3>
           </div>
          
        </form>
            
        </div>
        </div>
      
    
  )
}

export default signUp