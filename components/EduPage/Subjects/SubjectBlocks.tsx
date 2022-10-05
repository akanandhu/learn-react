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
        <div className='lg:grid md:grid grid justify-center '>
            
            <div className={boxClassName}>
                <Image src={icon} width={63} height={63} className=" lg:object-none md:object-none object-none" />
             </div>
            <div className='lg:pt-5 lg:grid lg:grid-row lg:align-middle lg:pl-[14%]  lg:gap-1 lg:justify-center md:justify-center justify-center
            md:pt-5 md:grid md:grid-row md:align-middle md:pl-[14%]  md:gap-1
            pt-5 grid grid-row align-middle pl-[0%]  gap-1'>
            <h1 className='lg:text-xl lg:font-semibold lg:text-bold lg:pl-0
            md:text-xl md:font-semibold md:text-bold md:pl-0
            text-2xl font-semibold text-bold pl-0'>{subject}</h1>
            <h3 className='lg:text-sm lg:font-mont lg:text-textGray 
            md:text-sm md:font-mont md:text-textGray 
            text-sm font-mont text-textGray '>{ChapeterNum} Chapters</h3>
             </div>


            

        </div>
          )
    }

function SubjectBlocks() {
  return (
    <div className='lg:w-[80%] lg:h-full lg:pl-20 md:w-[100%] md:h-full md:pl-20 w-[100%] h-full pl-20'>
        <div className='lg:pb-14 lg:h-[28px] '>
            <h1 className='lg:font-[`Montserrat_Regular`] lg:font-semibold lg:text-4xl lg:align-middle
            md:font-[`Montserrat_Regular`] md:font-semibold md:text-4xl md:align-middle
            font-[`Montserrat_Regular`] font-semibold text-4xl align-middle'> 
             <span className=' text-eduGreen'> Learn </span>  with Video Classes</h1>
        </div>    
        <div>
        <div className='lg:grid lg:grid-flow-col lg:grid-cols-[1fr_1fr_1fr_1fr_1fr] lg:grid-rows-[1fr] lg:justify-start lg:pt-8 lg:gap-10 
        md:flex md:flex-row md:justify-start md:pt-8 md:gap-10
        flex flex-col justify-start pt-8 gap-10'>
            
       <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:grid lg:justify-center lg:bg-gradient-to-r from-[#F85750] to-[#A73F3A] md:h-[120px] md:w-[120px] md:rounded-[20%] md:grid  md:justify-center md:bg-gradient-to-r from-[#F85750] to-[#A73F3A] h-[300px] w-[300px] rounded-[20%] grid  justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]'
        }
         icon={phy} 
         subject="Physics" 
         ChapeterNum={14}   />
        </div>
        <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:grid lg:justify-center lg:bg-gradient-to-r from-[#9459D7] to-[#4A3AA7] md:h-[120px] md:w-[120px] md:rounded-[20%] md:grid  md:justify-center md:bg-gradient-to-r from-[#F85750] to-[#A73F3A] h-[300px] w-[300px] rounded-[20%] grid  justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]'} 
        icon={che} 
        subject="Chemistry" 
        ChapeterNum={14}   />
        </div>
        <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:grid lg:justify-center lg:bg-gradient-to-r from-[#7F8CF1] to-[#444E9C] md:h-[120px] md:w-[120px] md:rounded-[20%] md:grid  md:justify-center md:bg-gradient-to-r from-[#F85750] to-[#A73F3A] h-[300px] w-[300px] rounded-[20%] grid  justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]'}
        icon={math} 
        subject="Maths" 
        ChapeterNum={14}   />
        </div>
        <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:grid lg:justify-center lg:bg-gradient-to-r from-[#F39C12] to-[#9C6B1E] md:h-[120px] md:w-[120px] md:rounded-[20%] md:grid  md:justify-center md:bg-gradient-to-r from-[#F39C12] to-[#9C6B1E] h-[300px] w-[300px] rounded-[20%] grid  justify-center bg-gradient-to-r from-[#F39C12] to-[#9C6B1E]'} 
        icon={bio} 
        subject="Biology" 
        ChapeterNum={14}   />
        </div>
        <div>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:grid lg:justify-center lg:bg-gradient-to-r from-[#F85750] to-[#A73F3A] md:h-[120px] md:w-[120px] md:rounded-[20%] md:grid  md:justify-center md:bg-gradient-to-r from-[#F85750] to-[#A73F3A] h-[300px] w-[300px] rounded-[20%] grid  justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]' } 
        icon={phy} 
        subject="Physics" 
        ChapeterNum={14}   />

        </div>
        </div>
        <div className='lg:grid lg:grid-flow-col lg:grid-cols-[1fr_1fr_1fr_1fr_1fr] lg:grid-rows-[1fr] lg:justify-start lg:pt-8 lg:gap-10 
        md:flex md:flex-row md:grid-flow-col md:grid-cols-3 md:grid-rows-6 md:justify-start md:pt-8 md:gap-10
        flex flex-col justify-start pt-8 gap-10'>
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:flex lg:justify-center lg:bg-gradient-to-r from-[#9459D7] to-[#4A3AA7] md:h-[125px] md:w-[125px] md:rounded-[18%] md:flex md:justify-center md:bg-gradient-to-r from-[#9459D7] to-[#4A3AA7] h-[300px] w-[300px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#9459D7] to-[#4A3AA7]'} 
        icon={che} 
        subject="Chemistry" 
        ChapeterNum={14}   />
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:flex lg:justify-center lg:bg-gradient-to-r from-[#7F8CF1] to-[#444E9C] md:h-[125px] md:w-[125px] md:rounded-[18%] md:flex md:justify-center md:bg-gradient-to-r from-[#9459D7] to-[#4A3AA7] h-[300px] w-[300px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#7F8CF1] to-[#444E9C]'} 
        icon={math} 
        subject="Maths" 
        ChapeterNum={14}   />
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:flex lg:justify-center lg:bg-gradient-to-r from-[#F39C12] to-[#9C6B1E] md:h-[125px] md:w-[125px] md:rounded-[18%] md:flex md:justify-center md:bg-gradient-to-r from-[#9459D7] to-[#4A3AA7] h-[300px] w-[300px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#F39C12] to-[#9C6B1E]'} 
        icon={bio} 
        subject=
        "Biology" 
        ChapeterNum={14}   />
        <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:flex lg:justify-center lg:bg-gradient-to-r from-[#F85750] to-[#A73F3A] md:h-[125px] md:w-[125px] md:rounded-[18%] md:flex md:justify-center md:bg-gradient-to-r from-[#F85750] to-[#A73F3A] h-[300px] w-[300px] rounded-[18%] flex justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]'} 
        icon={phy} 
        subject="Physics" 
        ChapeterNum={14}   />
        </div>
        </div>
        </div>
   
       
    
  )
}

export default SubjectBlocks
