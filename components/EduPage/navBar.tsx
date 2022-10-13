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
    <div className='w-[100%]'>
        <div className='lg:pl-[10%] lg:pt-[10%] lg:pr-[10%]  md:pl-32 md:pt-5 md:flex md:justify-center pl-10  pt-10 flex justify-start pb-10  '>
        <Image src={logo} alt='logo' width={123} height={70}  />
        </div>
        <div className='lg:h-[95%] lg:w-[100%] lg:pt-7  '>
        <div className='lg:h-[350px] lg:w-[100%]  lg:leading-[15px]  lg:grid grid-flow-row lg:justify-end lg:align-middle lg:gap-5 lg:pl-8 md:flex md:flex-row flex flex-row justify-center '>

            <BlockOption whiteStyles='absolute right-0'
             mainBlockStyles='lg:grid lg:grid-flow-col lg:w-[100%] lg:col-auto lg:justify-start  lg:relative lg:grid-cols-[2fr_3fr] lg:bg-white lg:rounded-[40px_0px_00px_40px]
              md:grid md:grid-flow-col md:w-[100%] md:col-auto md:justify-start  md:relative md:grid-cols-[2fr_3fr] md:bg-eduGreen md:rounded-[40px_40px_0px_0px]  min-w-[200px] 
              grid grid-flow-col w-[100%] col-auto justify-start  relative grid-cols-[2fr_3fr] bg-eduGreen rounded-[40px_40px_0px_0px]' 
             tagStyles='  
             lg:z-0 lg:text-eduGreen lg:font-mont lg:text-xl lg:pt-5 lg:font-semibold
             md:z-0 md:text-white md:font-mont md:text-xl md:pt-5 md:font-semibold 
             z-0 text-white font-mont text-xl pt-3  l font-semibold ' 
             icon={home} tag="Home" />
            <BlockOption whiteStyles='absolute right-0'
            mainBlockStyles='grid grid-flow-col w-[100%] col-auto justify-start  relative grid-cols-[2fr_3fr] rounded-l-[25%]'
             tagStyles=' lg:z-0 lg:text-white lg:font-[`Montserrat-Bold`] lg:text-xl lg:pt-5 lg:font-semibold 
             md:z-0 md:text-black md:font-mont md:text-xl md:pt-5 md:font-semibold
             z-0 text-black font-mont text-xl pt-3  l font-semibold' 
             icon={cap} 
             tag="My Course" />
            <BlockOption whiteStyles='absolute right-0'
            mainBlockStyles='grid grid-flow-col w-[100%] col-auto justify-start  relative grid-cols-[2fr_3fr]  rounded-l-[25%]'
             tagStyles='lg:z-0 lg:text-white lg:font-[`Montserrat-Bold`] lg:text-xl lg:pt-5 lg:font-semibold
             md:z-0 md:text-black md:font-mont md:text-xl md:pt-5 md:font-semibold 
             z-0 text-black font-mont text-xl pt-3  l font-semibold'
              icon={cert} 
              tag="Mock Test" />
            <BlockOption whiteStyles='absolute right-0' 
            mainBlockStyles='grid grid-flow-col w-[100%] col-auto justify-start  relative grid-cols-[2fr_3fr]  rounded-l-[25%]'
            tagStyles=' lg:z-0 lg:text-white lg:font-[`Montserrat-Bold`] lg:text-xl lg:pt-5 lg:font-semibold
            md:z-0 md:text-black md:font-mont md:text-xl md:pt-5 md:font-semibold 
            z-0 text-black font-mont text-xl pt-3  l font-semibold' 
            icon={bulb} 
            tag="Practice" />
        </div>
        </div>
        </div>

      
    
  )
}

export default NavBar
