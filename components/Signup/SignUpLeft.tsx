
import Image from 'next/image'
import student from '/public/images/student.png'
function SignUpLeft() {
  return (
    <div className=' flex justify-center  md:bg-orangeBG md:h-[100%] md:w-[50%] md:flex md:justify-center md:content-center lg:bg-greenBG lg:h-screen lg:w-[50%] lg:flex lg:justify-center lg:content-center '>
            <div className='flex  justify-center ml-12 mt-2 align-middle  md:flex md:justify-center md:h-[70%] md:w-[80%] md:content-center md:ml-8 md:mt-20 md:align-middle lg:h-[70%] lg:w-[70%] lg:content-center lg:ml-8 lg:align-middle  '> 
            <Image src={student}  className=' object-scale-down '/>
            </div>
        </div>
  )
}

export default SignUpLeft