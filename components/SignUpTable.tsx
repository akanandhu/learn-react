import React from 'react'

function SignUpTable() {
  return (
    <div className='lg:pl-[5%] pr-[5%] pt-[5%] pd-[5%]'>
        <form className=' justify-center   md:h-[100%] md:w-[100%] md:flex md:flex-col md:justify-center lg:pl-10 lg:h-[100%] lg:w-[100%] lg:flex lg:flex-col lg:justify-center '>
           <div className='flex flex-col relative '>
            <label className="text-3xl mb-4 font-semibold lg:text-3xl  lg:mb-8 lg:leading-3 md:text-3xl md:mb-6  md:font-semibold font-['Montserrat_Regular'] md:font-['Montserrat_Regular'] lg:font-['Montserrat_ExtraBold'] lg:font-semibold " > Signup </label>
            <input placeholder='Phone number' type='number' className=" lg:flex lg:flex-1  placeholder:text-extrabold font-['Montserrat_Regular'] md:font-['Montserrat_Regular'] lg:font-['Montserrat_Regular']lg: mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5 "></input>
            <input placeholder='Student name' className="font-['Montserrat_Regular'] md:font-['Montserrat_Regular'] lg:font-['Montserrat_Regular'] mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5"></input>
            <input placeholder='Student Email'  className="font-['Montserrat_Regular'] md:font-['Montserrat_Regular'] lg:font-['Montserrat_Regular'] mb-5 w-[523px] h-[56px] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5"></input>
           </div>
           <div>
            <label className='text-lg '>Select Class</label>
            <div className='flex flex-row mt-5 pl-2'>
            <button className= ' bg-white border-slate-400 border-[3px] w-[120px] h-[43px] mr-5 rounded-[60px] text-placeText '>Plus One</button>
            <button className=' bg-white border-slate-400 border-[3px] w-[120px] h-[43px] rounded-[60px] text-placeText'>Plus Two</button> 
            
            </div>
            <button className='font-semibold bg-greenBG h-[60px] w-[350px] mt-6 rounded-xl md:bg-greenBG md:h-[80px] md:w-[400px] md:mt-6 md:rounded-xl lg:bg-greenBG lg:h-[80px] lg:w-[500px] lg:mt-6 lg:rounded-[10px] text-xl text-white'>Signup</button>
            
     
            <h3 className='flex flex-1 justify-start text-[16px] font-semibold font-sans pt-3'>Already have an account? <span className='text-greenBG text-[16px] ml-2'> Login </span></h3>
           </div>
          
        </form>      
    </div>
  )
}

export default SignUpTable