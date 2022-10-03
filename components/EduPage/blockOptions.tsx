import React from 'react'
import Image from 'next/image'

type BlockOptionProps = {
    
   tag : string,
    icon : any,
    
}

export const BlockOption = ({tag,icon}: BlockOptionProps) => {
    return (
    <div className='flex  flex-1 gap-5 justify-center align-middle'>
    <Image src={icon} width={32} height={32} className='lg:object-scale-down' />
    <div  className=' text-white font-[`Montserrat-Bold`] font-semibold '>{tag}</div>
    </div>
    )
}

export default BlockOption