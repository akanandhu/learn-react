import React from 'react'
import search from '/public/images/search.png'
import bell from '/public/images/bell.png'
import user from '/public/images/user.png'
import Image from 'next/image'
function SearchBar() {
  return (
    <div>
        <div className='flex  lg:pt-7 lg:pr-10 shadow-sm' >
            <div className='flex flex-1 flex-row justify-end gap-8 mb-7'>
            <Image src={search} width={28} height={28} />
            <Image src={bell} width={28} height={28} />
            <Image src={user} width={28} height={28} />
            
            </div>
        </div>
    </div>
  )
}

export default SearchBar