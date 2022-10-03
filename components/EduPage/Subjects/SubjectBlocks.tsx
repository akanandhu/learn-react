import React from 'react'
import phy from 'public/images/physics.png'
import Image from 'next/image'
import che from 'public/images/che.png'
import bio from 'public/images/bio.png'
import math from 'public/images/math.png'
type subjectCardProps = {
    subject : any,
    ChapeterNum : any,
   boxClassName : any,
    icon : any
}


const SubjectCard = ({subject,ChapeterNum,icon,boxClassName}:subjectCardProps) => {
    return(
        <div className='grid justify-center'>
            
            <div className={boxClassName}>
                <Image src={icon} width={63} height={63} className=" object-none" />
             </div>
            <div className='lg:pt-5 grid grid-row align-middle justify-center gap-1'>
            <h1 className='lg:text-xl lg:font-semibold text-bold lg:pl-0'>{subject}</h1>
            <h3 className='lg:text-sm lg:font-mont text-textGray  '>{ChapeterNum} Chapters</h3>
             </div>


            

        </div>
          )
    }

function SubjectBlocks() {
  return (
    <div className='lg:w-[80%] lg:h-full lg:pl-20'>
        <div className='lg:pb-14 lg:h-[28px]'>
            <h1 className='font-[`Montserrat_Regular`] font-semibold text-4xl align-middle'> <span className=' text-eduGreen'> Learn</span> with Video Classes</h1>
        </div>    
        <div className='lg:grid lg:grid-flow-col grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr] justify-start lg:pt-8 gap-10 '>
            
       <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] grid justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]'}
         icon={phy} 
         subject="Physics" 
         ChapeterNum={14}   />
        </div>
        <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#9459D7] to-[#4A3AA7]'} 
        icon={che} 
        subject="Chemistry" 
        ChapeterNum={14}   />
        </div>
        <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#7F8CF1] to-[#444E9C]'}
        icon={math} 
        subject="Maths" 
        ChapeterNum={14}   />
        </div>
        <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#F39C12] to-[#9C6B1E]'} 
        icon={bio} 
        subject="Biology" 
        ChapeterNum={14}   />
        </div>
        <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]'} 
        icon={phy} 
        subject="Physics" 
        ChapeterNum={14}   />

        </div>
        </div>
        <div className='lg:grid lg:grid-flow-col grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr] justify-start lg:pt-8 gap-10 '>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#9459D7] to-[#4A3AA7]'} 
        icon={che} 
        subject="Chemistry" 
        ChapeterNum={14}   />
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#7F8CF1] to-[#444E9C]'} 
        icon={math} 
        subject="Maths" 
        ChapeterNum={14}   />
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#F39C12] to-[#9C6B1E]'} 
        icon={bio} 
        subject=
        "Biology" 
        ChapeterNum={14}   />
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]'} 
        icon={phy} 
        subject="Physics" 
        ChapeterNum={14}   />
        </div>
        </div>
        
   
       
    
  )
}

export default SubjectBlocks
