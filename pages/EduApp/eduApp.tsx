import React from 'react'
import CarouselBody from '../../components/EduPage/CarouselBody'
import NavBar from '../../components/EduPage/navBar'
import SearchBar from '../../components/EduPage/SearchBar'

function eduApp() {
  return (
    <div className='lg:w-screen lg:h-screen lg:flex '>
        <div className='lg:w-[20%] lg:h-screen lg:bg-eduGreen'>
        <NavBar /></div>
        <div className='h-[10%] w-screen bg-white '>
        <SearchBar />
        <CarouselBody />
        </div>
    </div>
  )
}

export default eduApp