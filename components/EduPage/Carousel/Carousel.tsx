import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import orange from 'public/images/orange.png'
import pink from 'public/images/pink.png'
import yellow from 'public/images/yellow.png'
import Image from 'next/image';
import student from 'public/images/studentsv.svg'



const CarouselPro = () => {
  return (
    <div className=' pl-40 pt-10 pr-0 pb-40 flex justify-center '>
       
        <Carousel showArrows={false} showStatus={false} width='75%'  dynamicHeight={true}>
                <div>
                    <Image src={yellow} className="object-center" />
                </div>
                <div>
                    <Image src={pink}  />
                    
                </div>
                <div>
                    <Image src={orange}  />
                    
                </div>
            </Carousel>
      
    </div>
  )
}

export default CarouselPro
