import React from 'react'

function SignUpTable() {
  return ( 
    <div className='pl-[53%] pt-[10%] lg:pl-[32%] lg:pr-[22%] lg:pt-[9%] lg:pb-[5%] lg:flex lg:flex-1 '>
        <form className=' justify-center   md:h-[100%] md:w-[100%] md:flex md:flex-col md:justify-center lg:pl-10 lg:h-[100%] lg:w-[100%] lg:flex lg:flex-col lg:justify-center '>
           <div className='flex flex-col relative gap-5 '>
            <label className="font-mont-bold font-semibold  text-3xl mb-4 lg:text-3xl  lg:mb-8 lg:leading-3 md:text-3xl md:mb-6  md:font-semibold lg:font-mont-bold md:font-mont-bold lg:font-semibold " > Signup </label>
            <input placeholder='Phone number' type='number' className=" lg:flex lg:flex-1  placeholder:text-extrabold font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-mont-bold lg:font-semibold lg: mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5 "></input>
            <input placeholder='Student name' className="font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-semibold lg:font-mont-bold mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5"></input>
            <input placeholder='Student Email'  className="font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-semibold lg:font-mont-bold mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5"></input>
           </div>
           <div>
            <label className='text-lg font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-semibold lg:font-mont-bold '>Select Class</label>
            <div className='flex flex-row mt-5 pl-2 '>
            <button className= ' font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-normal lg:font-mont-bold bg-white border-slate-400 border-[3px] w-[120px] h-[43px] mr-5 rounded-[60px] text-placeText '>Plus One</button>
            <button className=' font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-normal lg:font-mont-bold bg-white border-slate-400 border-[3px] w-[120px] h-[43px] rounded-[60px] text-placeText'>Plus Two</button> 
            
            </div>
            <button className='font-semibold bg-greenBG h-[60px] w-[350px] mt-6 rounded-xl md:bg-greenBG md:h-[80px] md:w-[400px] md:mt-6 md:rounded-xl lg:bg-greenBG lg:h-[80px] lg:w-[500px] lg:mt-6 lg:rounded-[10px] text-xl text-white'>Signup</button>
            
     
            <h3 className='flex flex-1 justify-start text-[16px] font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-semibold lg:font-mont-bold pt-5 pl-32'>Already have an account? <span className='text-greenBG text-[16px] ml-2'> Login </span></h3>
           </div>
          
        </form>      
    </div>
  )
}

export default SignUpTable