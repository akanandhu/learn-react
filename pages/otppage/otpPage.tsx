import Image from 'next/image'
import React from 'react'
import Otp from '../../components/Otp'
import study from '/public/images/study.png'

function otpPage() {
  return (
    <div className='w-screen h-[100%] flex ' >
        <div className='w-[56%] h-[100%] bg-pinkBG '>
            <div className='pl-[135px] pr-[95px] pt-[200px] pb-[192px]'>
                <Image src={study} width={811} height={589} className='object-scale-down' />

            </div>
        </div>
        <div className='w-[44%] h-[100%] flex justify-center align-middle pt-[10%]  '>
        <div className='w-[600px] h-[80%]  '>
        <div className=' flex justify-center align-middle  w-[100%]   '>
           
            <Otp/>
            
        </div>
        </div>
        </div>

        
        
    </div>
  )
}

export default otpPage