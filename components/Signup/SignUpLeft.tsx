
import Image from 'next/image'
import student from '/public/images/student.png'
function SignUpLeft() {
  return (
    <div className=' flex justify-center md:overflow-y-hidden  md:bg-orangeBG md:h-screen md:w-[100%] md:flex md:justify-center md:content-center lg:bg-greenBG lg:h-[100vh] lg:w-[50%] lg:flex lg:justify-center lg:content-center '>
            <div className='flex  justify-center ml-12 mt-2 align-middle  md:flex md:justify-center md:h-[70%] md:w-[80%] md:content-center md:ml-8 md:mt-20 md:align-middle lg:h-[70%] lg:w-[95%] lg:content-center lg:ml-8 lg:align-middle  '> 
            <Image src={student} alt='student'  className=' object-scale-down '/>
            </div>
        </div>
  )
}

export default SignUpLeft