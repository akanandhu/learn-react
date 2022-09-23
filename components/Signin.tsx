import React from 'react'

function Signin() {
  return (
    <div className=' mb-0 gap-5 flex-row flex justify-center md:flex md:justify-center md:pt-[5%] md:pr-[13%] md:pl-[10%] lg:flex lg:justify-center lg:pt-[35%] lg:pr-[13%] lg:pl-[5%] '>
        <div className=' pl-5 flex flex-col  w-[70%]  justify-center md:flex md:flex-1 md:justify-center   md:pl-10  md:gap-4 lg:w-[100%] lg:h-[70%]  lg:flex lg:flex-col lg:gap-4 lg:pl-16 lg:pr-16 lg:rounded-md  lg:pt-5 lg:border lg:shadow-[0px_opx_2px_rgba(0,0,0,0.2)] md:shadow-[0px_opx_2px_rgba(0,0,0,0.2)] lg:bg-tableBG md:bg-tableBG lg:justify-center  '>
            <h1 className=" font-lg md:mb-8 lg:font-['Montserrat_Regular'] lg:mb-8 md:font-['Montserrat_Regular'] font-['Montserrat_Regular'] text-2xl font-extrabold pl-12 ">Login/Lookup</h1>
            <input type='number' className=" md:mb-8 bg-boxBG h-[60px] mb-4 rounded-lg pl-3 w-[300px] placeholder:text-sm placeholder:pl-0 placeholder:text-placeText placeholder:font-semibold placeholder:font-['Montserrat_Regular'] placeholder:pb-10 border border-solid   " placeholder='Phone number'></input>
            <button className= " md:mb-8 bg-loginbutton text-white rounded-lg h-[55px] w-[300px] lg:font-['Montserrat_Regular'] md:font-['Montserrat_Regular'] font-['Montserrat_Regular'] font-semibold " >Login</button>
        </div>
      
    </div>
  )
}

export default Signin
