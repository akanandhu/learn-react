import React from 'react'
import error from '/public/images/004.jpg'
import Image from 'next/image'


function CustonErrorPage() {
  return (
    <div>
            <Image src={error} alt='error' layout='fill' />
    </div>
  )
}

export default CustonErrorPage