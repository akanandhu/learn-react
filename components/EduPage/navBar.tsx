import React from 'react'
import Image from 'next/image'
import logo from 'public/images/paper.png'
import home from 'public/images/home.png'
import bulb from 'public/images/bulbb.png'
import list from 'public/images/list.png'
import cap from 'public/images/cap.png'
import BlockOption from './blockOptions'
import cert from 'public/images/cert.png'


function NavBar() {
  return (
    <div>
        <div className='pl-[25%] pt-[10%]'>
        <Image src={logo} width={123} height={70}  />
        </div>
        <div className='lg:h-[95%] lg:w-[100%] lg:pt-20  '>
        <div className='lg:h-[350px] lg:w-[100%]  leading-[15px]  grid grid-flow-row justify-end align-middle gap-5 pl-12  '>

            <BlockOption whiteStyles='absolute right-0'
             mainBlockStyles='grid grid-flow-col w-[100%] col-auto justify-start  relative grid-cols-[1fr_2fr] bg-white rounded-[40px_0px_0px_40px]' 
             tagStyles='  z-0 text-eduGreen font-[`Montserrat-Bold`] text-xl lg:pt-5 font-semibold ' 
             icon={home} tag="Home" />
            <BlockOption whiteStyles='absolute right-0'
            mainBlockStyles='grid grid-flow-col w-[100%] col-auto justify-start  relative grid-cols-[1fr_2fr] rounded-l-[25%]'
             tagStyles=' z-0 text-black font-[`Montserrat-Bold`] text-xl lg:pt-5 font-semibold ' 
             icon={cap} 
             tag="My Course" />
            <BlockOption whiteStyles='absolute right-0'
            mainBlockStyles='grid grid-flow-col w-[100%] col-auto justify-start  relative grid-cols-[1fr_2fr]  rounded-l-[25%]'
             tagStyles=' z-0 text-black font-[`Montserrat-Bold`] text-xl lg:pt-5 font-semibold '
              icon={cert} 
              tag="Mock Test" />
            <BlockOption whiteStyles='absolute right-0' 
            mainBlockStyles='grid grid-flow-col w-[100%] col-auto justify-start  relative grid-cols-[1fr_2fr]  rounded-l-[25%]'
            tagStyles=' z-0 text-black font-[`Montserrat-Bold`] text-xl lg:pt-5 font-semibold ' 
            icon={bulb} 
            tag="Practice" />
        </div>
        </div>
        </div>

      
    
  )
}

export default NavBar
