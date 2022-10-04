import React from 'react'
import Image from 'next/image'
import logo from 'public/images/paper.png'
import home from 'public/images/home.png'
import bulb from 'public/images/bulb.png'
import course from 'public/images/course.png'
import mock from 'public/images/mock.png'
import BlockOption from './blockOptions'


function NavBar() {
  return (
    <div>
        <div className='pl-[25%] pt-[10%]'>
        <Image src={logo} width={123} height={70}  />
        </div>
        <div className='lg:h-[75%] lg:w-[100%] lg:pt-20 lg:ml-14 '>
        <div className='lg:h-[360px] lg:w-[100%] grid grid-flow-row pr-14'>

            <BlockOption whiteStyles='absolute right-0' tagStyles=' text-black font-[`Montserrat-Bold`] font-semibold ' icon={home} tag="Home" />
            <BlockOption whiteStyles='absolute right-0 hidden' tagStyles='text-white font-[`Montserrat-Bold`] font-semibold ' icon={course} tag="My Course" />
            <BlockOption whiteStyles='absolute right-0 hidden' tagStyles=' text-white font-[`Montserrat-Bold`] font-semibold ' icon={mock} tag='Mock Test' />
            <BlockOption whiteStyles='absolute right-0 hidden' tagStyles=' text-white font-[`Montserrat-Bold`] font-semibold ' icon={bulb} tag='Practice' />
        </div>
        </div>
        </div>

      
    
  )
}

export default NavBar
