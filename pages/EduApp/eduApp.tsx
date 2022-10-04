
import CarouselBody from '../../components/EduPage/CarouselBody'
import LiveClass from '../../components/EduPage/LiveClass/LiveClass'
import NavBar from '../../components/EduPage/navBar'
import SearchBar from '../../components/EduPage/SearchBar'
import SubjectBlocks from '../../components/EduPage/Subjects/SubjectBlocks'

function eduApp() {
  return (
    <div className='lg:w-full lg:flex-row  lg:h-[1747px] lg:flex lg:overflow-hidden md:w-screen md:h-[100%] w-screen h-[100%]  flex flex-col   '>
        <div className='lg:w-[20%] md:w-[100%]  lg:bg-eduGreen  md:bg-white w-screen bg-white   '>
        <NavBar /></div>
        <div className='h-[10%] w-[100%] bg-bodywhite  '>
        <SearchBar />
        <div className=' min-w-[1200px] bg-bodyShade'>
          <div className='flex'>
        <CarouselBody />
        </div>
        <SubjectBlocks />
        <LiveClass />
        </div>
        </div>
    </div>
  )
}

export default eduApp