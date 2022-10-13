
import Image from 'next/image'
import buttonwhite from 'public/images/buttonShape.png'
type BlockOptionProps = {
    
   tag : string,
    icon : any,
    tagStyles : any,
    whiteStyles : any,
    mainBlockStyles : any,
}


export const BlockOption = ({tag,icon,tagStyles,whiteStyles,mainBlockStyles}: BlockOptionProps) => {
   
    return (
    
    <div className={mainBlockStyles}>
       
            <div className='z-10 pt-4  '>
                <Image src={icon} alt='icon' height={40} width={90} className='object-none' />
            </div>
            <div className={tagStyles}>
                <h1 className='lg:pt-1'>{tag}</h1>
            </div>
            
    </div>
    )
}

export default BlockOption