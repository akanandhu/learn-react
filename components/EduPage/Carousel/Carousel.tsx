import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import orange from 'public/images/orange.png'
import pink from 'public/images/pink.png'
import yellow from 'public/images/yellow.png'
import Image from 'next/image';
import { useQuery } from 'react-query';
import axiosInstance from '../../Axios/AxiosIntercept';




const CarouselPro = () => {
  const fetchBanner = () => {
    // axiosInstance.get('/banners/7').then((res) => {
      // console.log('Banner',res.data);
    // })
  }
 const {data:banner} = useQuery('banner',fetchBanner)
  return (
    <div className=' lg:pl-20 lg:pt-20 lg:pr-0 lg:pb-20 lg:flex lg:justify-center 
    md:pl-20 md:pt-20 md:pr-0 md:pb-20 md:flex md:justify-center
    pl-20 pt-20 pr-2 pb-10 flex justify-center '>

       
        <Carousel showArrows={false} showStatus={false} showThumbs={false} width='75%' autoPlay={true} infiniteLoop  dynamicHeight={true}>
                <div>
                    <Image src={yellow} alt='yellow' className="object-center" />
                </div>
                <div>
                    <Image src={pink}  alt='pink' />
                    
                </div>
                <div>
                    <Image src={orange}  alt='orange' />
                    
                </div>
            </Carousel>
      
    </div>
  )
}

export default CarouselPro
