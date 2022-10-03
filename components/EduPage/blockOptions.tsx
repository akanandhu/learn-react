import React from 'react'
import Image from 'next/image'
import buttonwhite from 'public/images/buttonShape.png'
type BlockOptionProps = {
    
   tag : string,
    icon : any,
    tagStyles : any,
    
}


export const BlockOption = ({tag,icon,tagStyles}: BlockOptionProps) => {
   
    return (
    <div className='flex relative flex-1 gap-5 justify-center align-middle'>
        <div className='absolute right-0'>
    <Image src={buttonwhite} />
    </div>
    <Image src={icon} width={32} height={32} className='lg:object-scale-down' />
    <div  className={tagStyles}>{tag}</div>
    </div>
    )
}

export default BlockOption