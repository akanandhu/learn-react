import Image from 'next/image'
import React from 'react'
import Otp from '../../components/Otp'
import study from '/public/images/study.png'

function otpPage() {
  return (
    <div className='w-[100%] h-[100%] lg:w-screen lg:h-screen md:h-screen md:w-screen md:flex lg:flex lg:flex-row md:flex-row flex flex-col ' >
        <div className='lg:w-[56%] lg:h-screen md:w-[100%] md:h-[100%] bg-pinkBG w-[100%] h-[100%]'>
            <div className=' lg:pl-[135px] lg:pr-[95px]  lg:pt-[10%] lg:pb-[192px] md:pl-[5%] md:pr-[10%] pt-[18%] md:pt-[38%] pr-[0%]   '>
                <Image src={study} width={811} height={589} className='object-scale-down' />

            </div>
        </div>
        <div className=' w-[100%] flex justify-center pt-[5%] lg:w-[44%] lg:h-[100%] lg:flex lg:justify-center lg:align-middle lg:pt-[10%] md:w-[44%] md:h-[100%] md:flex md:justify-center md:pt-[20%]  '>
        <div className=' w-[100%] lg:w-[600px] lg:h-[80%]  '>
        <div className=' flex justify-center lg:flex lg:justify-center lg:align-middle  lg:w-[100%] pb-5  '>
           
            <Otp/>
            
        </div>
        </div>
        </div>

        
        
    </div>
  )
}

export default otpPage