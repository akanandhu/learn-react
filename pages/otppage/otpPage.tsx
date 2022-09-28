import Image from 'next/image'
import React from 'react'
import LeftOtp from '../../components/OTP page/LeftOtp'
import RightOtp from '../../components/OTP page/RightOtp'
import study from '/public/images/study.png'

function otpPage() {
  return (
    <div className='w-[100%] h-[100%] lg:w-screen lg:h-screen md:h-screen md:w-screen md:flex lg:flex lg:flex-row md:flex-row flex flex-col ' >
        <div className='lg:w-[56%] lg:h-screen md:w-[100%] md:h-[100%] bg-pinkBG w-[100%] h-[100%]'>
            <LeftOtp />
        </div>
            <RightOtp mobile='+91 91828202029' time='00:45' firstLine='Enter the otp sent to the' secondLine='Mobile number' reset='Resent OTP' login='Login' />
    </div>
  )
}

export default otpPage