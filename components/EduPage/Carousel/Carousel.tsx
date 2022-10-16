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
import { IBanners } from './CarouselJson';




const CarouselPro = () => {
  const fetchBanner = async () => {
    ;
    const classSelect = localStorage.getItem('class-State')
    const { data } = await axiosInstance.get(`/banners/${classSelect}`);
      console.log(data,'Banner');
      return data;
      
  };
 const {data:banner} = useQuery<any | IBanners >(['banner'],fetchBanner)
  // const arr = [] ;
  const arr: any[] = banner;
 console.log('BannerData', banner);

  return (
    <div className=' lg:pl-20 lg:pt-20 lg:pr-0 lg:pb-20 lg:flex lg:justify-center 
    md:pl-20 md:pt-20 md:pr-0 md:pb-20 md:flex md:justify-center
    pl-20 pt-20 pr-2 pb-10 flex justify-center '>

       {banner? 

          <Carousel showArrows={false} showStatus={false} showThumbs={false} width='75%' autoPlay={true} infiniteLoop  dynamicHeight={true}>
          {/* {arr?.data?.map((obj:any) => {
            return(
            <div key={obj.id}>
            <Image src={obj.web_image} alt='yellow' className="object-center" />
            </div> 
            );
          }) 
            
          } */}
            
       
            
            
          <div className='relative w-full h-10 '>
                <Image src={banner.web_image?banner.web_image: ''} layout={'fill'}    alt='orange' />
                
            </div>
            <div className='relative w-full h-10'>
                <Image src={banner.web_image?banner.app_image : ''} layout={'fill'}  alt='orange' />
                
            </div>
            
            
        </Carousel> : <div>No Banner</div>
       }
        
      
    </div>
  )
}

export default CarouselPro
