import React from 'react'

function Signin() {
  return (
    <div className='flex justify-center md:flex md:justify-center md:pt-[20%] md:pr-[13%] md:pl-[10%] lg:flex lg:justify-center lg:pt-[20%] lg:pr-[13%] lg:pl-[10%] '>
        <div className=' lg:w-[82%]  lg:flex lg:flex-col lg:gap-4 lg:pl-16 lg:rounded-md lg:pb-20 lg:pr-6 lg:pt-20 lg:border shadow-[0px_opx_2px_rgba(0,0,0,0.2)] lg:bg-tableBG lg:justify-center  '>
            <h1 className="lg:font-['Montserrat_Regular'] lg:mb-8 md:font-['Montserrat_Regular'] font-['Montserrat_Regular'] text-2xl font-extrabold pl-12 ">Login/Lookup</h1>
            <input type='number' className=" bg-boxBG h-[60px] mb-4 rounded-lg pl-3 w-[340px] placeholder:text-sm placeholder:pl-0 placeholder:text-placeText placeholder:font-semibold placeholder:font-['Montserrat_Regular'] placeholder:pb-10 border border-solid   " placeholder='Phone number'></input>
            <button className="bg-loginbutton text-white rounded-lg h-[55px] w-[340px] lg:font-['Montserrat_Regular'] md:font-['Montserrat_Regular'] font-['Montserrat_Regular'] font-semibold " >Login</button>
        </div>
      
    </div>
  )
}

export default Signin
