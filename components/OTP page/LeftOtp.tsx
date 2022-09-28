import React from 'react'
import study from '/public/images/study.png'
import Image from 'next/image'


function LeftOtp() {
  return (
    <div>
            <div className=' lg:pl-[135px] lg:pr-[95px]  lg:pt-[10%] lg:pb-[192px] md:pl-[5%] md:pr-[10%] pt-[18%] md:pt-[38%] pr-[0%]   '>
                <Image src={study} width={811} height={589} className='object-scale-down' />
            </div>
        </div>
   
  )
}

export default LeftOtp

