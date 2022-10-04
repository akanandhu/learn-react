
import CarouselBody from '../../components/EduPage/CarouselBody'
import LiveClass from '../../components/EduPage/LiveClass/LiveClass'
import NavBar from '../../components/EduPage/navBar'
import SearchBar from '../../components/EduPage/SearchBar'
import SubjectBlocks from '../../components/EduPage/Subjects/SubjectBlocks'

function eduApp() {
  return (
    <div className='lg:w-screen lg:h-[100%] lg:flex '>
        <div className='lg:w-[20%]  lg:bg-red-400'>
        <NavBar /></div>
        <div className='h-[10%] w-screen bg-bodywhite '>
        <SearchBar />
        <div className=' bg-bodyShade'>
        <CarouselBody />
        <SubjectBlocks />
        <LiveClass />
        </div>
        </div>
    </div>
  )
}

export default eduApp