import search from '/public/images/search.png'
import bell from '/public/images/bell.png'
import user from '/public/images/user.png'
import Image from 'next/image'
import  MyListbox from './SearchBar/Dropdown'
import { useQuery } from 'react-query'
import axios from 'axios'
import axiosInstance from '../Axios/AxiosIntercept'

function SearchBar() {
  

  return (
    <div className='relative'>
      <div className=' z-10'>
      <MyListbox   />
      </div>
        <div className='lg:w-[100%] lg:flex lg:pt-7  lg:pr-[3%] lg:shadow-md lg:visible md:visible hidden
        md:w-[100%] md:flex md:pt-7 md:pl-14 md:pr-[3%] md:shadow-md' >
          
          {/* <h1>Hello</h1> */}
            <div className='lg:flex lg:flex-1 lg:flex-row lg:justify-end lg:gap-8 lg:mb-7
             md:flex md:flex-1 md:flex-row md:justify-start md:ml-1 md:gap-20 md:mb-7 lg:static flex gap-9 md:static absolute right-0 top-10 '>
              
            <Image src={search} alt='search' width={28} height={28} />
            <Image src={bell} alt='bell' width={28} height={28} />
            <Image src={user} alt='user' width={28} height={28} />
            
            </div>
        </div>
        
    </div>
  )
}

export default SearchBar