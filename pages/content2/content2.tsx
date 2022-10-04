import React from 'react'
import Image from 'next/image'
import model from '/public/images/Rectangle20.png';
import ellipse from '/public/images/Ellipse8.png'
import ellipse1 from '/public/images/Ellipse9.png'
import ellipse2 from '/public/images/Ellipse10.png';
import star from '/public/images/star.png';
import nostar from '/public/images/dark-star.png.png';
import love from '/public/images/love.png.png';
import rupee from '/public/images/rupee-indian1.png'
import ruppees from '/public/images/indianrupee.png';
import leftArrow from '/public/images/left-arrow1.png';
import cart from '/public/images/shopping-bag1.png'
function content2() {
  return (
    <div className=' flex justify-center h-[930px] w-full bg-gray-400 relative  ' >
      <div className='z-10'>
        <div className=' bg-bodywhite h-[34px] w-[34px] rounded-full flex justify-center absolute top-[5%] left-[37.5%]  '>
        <Image src={leftArrow} className='object-none' />
        </div>
        </div>
        <div className='z-10'>
        <div className=' bg-bodywhite h-[34px] w-[34px] rounded-full flex justify-center absolute top-[5%] right-[37.5%] '>
        <Image src={cart} className='object-none' />
        </div>
        </div>
      <div className=' h-full w-98 bg-bodywhite z-0  '>
          <div >
            <Image src={model} className='object-cover ' />
          </div>
          <div className='flex justify-center align-top h-8 gap-1 ' >
            <Image src={ellipse}  className='object-none '/>
            <Image src={ellipse1}  className='object-none '/>
            <Image src={ellipse2}  className='object-none'/>
          </div>
          <div className='flex gap-2 ml-3'>
            <h2 className='text-black font-bold text-xl'>U.S POLO ASSN</h2>
            <h2 className=' text-gray-800 font-thin text-xl'>MSFS Grey</h2>
          </div>
          <div className='ml-3'>
            <h2 className='text-gray-800 text-xl font-thin'>Jacket</h2>
          </div>
          <div className='flex gap-1 ml-3'>
            <Image src={rupee} className='object-none' />
            <h2 className='text-gray-800 line-through'>3999</h2>
            <Image src={ruppees} className='object-none' />
            <h2 className='text-black font-bold'>4999</h2>
            <h2 className='text-green-600 pl-2'>50% off</h2>
          </div>
          <div className='ml-3 flex gap-1'>
            <Image src={star} />
            <Image src={star} />
            <Image src={star} />
            <Image src={star} />
            <Image src={nostar} />
          </div>
          <div className='pt-4 pl-3'>
            <h3 className='text-gray-400  font-semibold'>Colours</h3>
            <div className='flex flex-row gap-4 mt-3'>
             <div className='h-14 w-14 rounded-full bg-color1'></div>
             <div className='h-14 w-14 rounded-full bg-color2'></div>
             <div className='h-14 w-14 rounded-full bg-color3'></div>
              <div className='h-14 w-14 rounded-full bg-color4'></div>
             <div className='h-14 w-14 rounded-full bg-color5 border-white border-4 shadow-lg border-solid' ></div>
             </div>
          </div>
          <div className='pt-4 pl-3'>
            <h3 className='text-gray-400 font-semibold'>Sizes</h3>
            <div className='flex gap-4'>
              <button className='h-14 w-14 rounded-full bg-buttoncolor font-bold'>XS</button>
              <button className='h-14 w-14 rounded-full bg-buttoncolor font-bold'>S</button>
              <button className='h-14 w-14 rounded-full bg-buttoncolor font-bold'>M</button>
              <button className='h-14 w-14 rounded-full bg-buttoncolor font-bold border-solid border-2 border-white shadow-xl'>L</button>
              <button className='h-14 w-14 rounded-full bg-buttoncolor font-bold'>XL</button>
            </div>
          </div>
          <div className='flex flex-row gap-5 pt-5 pl-5'>
            <button className=' bg-bluebutton h-[62px] w-[291px] text-white rounded-[12px] font-bold ml-'>Add to bag</button>
            <div className=' bg-bodywhite h-[62px] w-[62px] box-border shadow-2xl rounded-full flex justify-center'>
            <Image src={love} className='object-none' />
            </div>
          </div>

      </div>
      
    </div>
  )
}

export default content2