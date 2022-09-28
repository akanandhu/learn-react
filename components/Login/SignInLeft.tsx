import Image from "next/image"
import student from '/public/images/student.png';

export const LeftSide = () => {
    return (
        
      <div className={`w-screen lg:h-screen lg:w-[54%] lg:pb-30 lg:bg-orangeBG lg:flex lg:justify-center md:h-screen md:w-[100%] md:pt-28  md:bg-orangeBG md:flex md:justify-center h-full  bg-white flex justify-center`}>
      <div className='h-full w-full md:pt-5  pl-[13%] pr-[11%] md:pb-[9%] '>
        <Image src={student} className="object-scale-down" />
      </div>
      </div>
      
        
    )
}