import React, { useState } from 'react'
import phy from 'public/images/physics.png'
import Image from 'next/image'
import che from 'public/images/che.png'
import bio from 'public/images/bio.png'
import math from 'public/images/math.png'
import { useQuery } from 'react-query'
import axiosInstance from '../../Axios/AxiosIntercept'
import { IChapters } from './JsontoTS'
import { render } from '@headlessui/react/dist/utils/render'
import noclass from 'public/images/noclasses.png';


type subjectCardProps = {
    subject : any,
    ChapeterNum : any,
   boxClassName : any,
    icon : any
}


const SubjectCard = ({subject,ChapeterNum,icon,boxClassName}:subjectCardProps) => {

    return(
        <div className='lg:grid md:grid grid justify-content '>
            
            <div className={boxClassName} >
                
                <Image src={icon?icon : ''} alt='subject' width={125} height={125} className=" md:rounded-[16%] object-fill" />
             </div>
            <div className='lg:pt-5 lg:grid lg:grid-row lg:align-middle lg:pl-[15%]  lg:gap-1  justify-start
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
    
    const FetchClassData = async () => {
       
            const classCode = localStorage.getItem('class-State')
      
        const { data } = await axiosInstance.get(`/home/courses?segment_id=${classCode}`);
        console.log(data,'Data');
        return data;
        
        
     };
     
    const {data:classVideo, isFetched} = useQuery<any>(['Classdata'],FetchClassData)
    const images = {
        thumbnail: 'https://cdn4.vectorstock.com/i/1000x1000/19/08/book-icon-white-on-the-blue-background-vector-3451908.jpg'
    }
        
    // const result = classVideo.find((obj) => obj.id);

  return (
    <div className='lg:w-[80%] lg:h-full lg:pl-20 md:w-[100%] md:h-full md:pl-20 w-[100%] h-full pl-20'>
        <div className='lg:pb-14 lg:h-[28px] '>
            <h1 className='lg:font-[`Montserrat_Regular`] lg:font-semibold lg:text-4xl lg:align-middle
            md:font-[`Montserrat_Regular`] md:font-semibold md:text-4xl md:align-middle
            font-[`Montserrat_Regular`] font-semibold text-4xl align-middle'> 
             <span className=' text-eduGreen'> Learn </span>  with Video Classes</h1>
        </div>    
        <div>
        {/* {
            isFetched && classVideo.data.length===0 && <Image src={noclass} alt='noclass' />
        } */}
            
        <div className='lg:grid lg:grid-flow-col lg:grid-cols-[1fr_1fr_1fr_1fr_1fr] lg:grid-rows-[1fr] lg:justify-start lg:pt-8 lg:gap-10 
        md:flex md:flex-row md:justify-start md:pt-8 md:gap-10
        flex flex-col justify-start pt-8 gap-10'>

        {
        classVideo?.data.map((obj:any) => {
            
            
            return(
                
            obj.name?
            <div key={obj.id}>
            
            
            <SubjectCard boxClassName={'lg:h-[125px] lg:w-[125px] lg:rounded-[18%] lg:grid lg:justify-center lg:bg-gradient-to-r from-[#F85750] to-[#A73F3A] md:h-[120px] md:w-[120px] md:rounded-[20%] md:grid  md:justify-center md:bg-gradient-to-r from-[#F85750] to-[#A73F3A] h-[300px] w-[300px] rounded-[20%] flex justify-center bg-gradient-to-r from-[#F85750] to-[#A73F3A]'
            }
             icon={obj.thumbnail?obj.thumbnail: images.thumbnail}
             subject={obj.name} 
             ChapeterNum={obj.chapters_count}   /> 
            
                
             
             


            </div>  : <div> <Image src={noclass} alt='noclass' /> </div>
       

            );
        }) 
        }
        </div>
       
        </div>
        </div>
   
       
    
  )
}

export default SubjectBlocks
