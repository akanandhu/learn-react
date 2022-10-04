
import Image from 'next/image'
import greenRect from 'public/images/greenRect.png'
import star from 'public/images/endstar.png'
import line from 'public/images/line.png'
import orange from 'public/images/orangeBanner.png'
import model from 'public/images/model.png'
import orangeLine from 'public/images/orangeLine.png'
import gold from 'public/images/gold.png'
import symb from 'public/images/backIcon.png'
import detail from 'public/images/details.png'

type VideoBoxProps = {
    subject : any,
    time : any,
    speaker : any,
    Starttime : any,
    attendance : any,
}

const VideoBox = ({subject,time,speaker,Starttime,attendance}: VideoBoxProps) => {
    return(
        <div >
                <div className='relative  '>
                    
                    <div className='  min-w-[530px] max-w-[12%] '>
                    <Image src={greenRect} className=' object-fill ' />
                    </div>
                    <div className='absolute flex left-0 bottom-0'>
                        <div>
                            <Image src={model} className=' object-scale-down' />
                         </div>
                         <div className='abosolute flex pl-20 pt-8 '>
                        <Image src={detail} className='object-scale-down' />
                    </div>
                    
                         <div className='absolute z-10 left-10 right-0'>
                        
                    </div>
                    <div className=' bg-blackGrad opacity-90 flex align-bottom items-end pl-5 pb-1 text-white font-light font-mont lg:h-[12%] lg:w-[100%] absolute bottom-1'>
                    <h1>Start at {Starttime} - {attendance} attending </h1>
                    </div>
                    
                    <div className='absolute bg-livered pl-4 pb-2 pt-2 pr-4 text-white rounded-md top-5 right-6  font-semibold   '>
                       .  Live
                    </div>
                    </div>
                    
                   
                    
                    
                </div>
                 <div className='grid grid-flow-row   bg-liveclass lg:pl-5 lg:pt-1 lg:pb-5 lg:pr-5 max-w-[2%] min-w-[530px] ' >
                    <div className=' font-mont font-semibold text-livetext '>
                        {subject}
                    </div>
                    <div className='grid grid-flow-col gap-2'>
                        <div className='flex flex-col gap-2'>
                        <div className='font-bold font-mont'> <p>Beginners Guide : Biomolecules </p> </div>
                        <div className='font-mont text-livetext font-medium'>{time}min By {speaker}</div>
                        </div>
                        <div>
                            <button className=' bg-buttonOrange flex pl-5 pt-3 pb-2 pr-5 rounded-[20px] justify-center text-center font-Montserrat_Regular font-medium text-white w-[78%] h-[90%]'>Join Us</button>
                        </div>
                    </div>
                    <div className='flex flex-1 justify-center lg:pt-3 lg:pb-3'>
                        <Image src={line} className="object-scale-down" />
                    </div>
                    <div className='font-mont flex gap-3 align-middle font-medium text-livetext'>
                        <Image src={star} className='object-none' />
                        <h1>Master Class </h1>
                    </div>
                </div>
        </div>
        
    )
}

function LiveClass() {
  return (
    <div>
      <div className='lg:w-[80%] lg:h-full lg:pl-20 lg:pt-10'>
        <div className='lg:pb-14 lg:h-[28px]'>
            <h1 className='font-[`Montserrat_Regular`] font-semibold text-4xl align-middle'> <span className=' text-eduGreen'> Learn</span> with Video Classes</h1>
        </div>    
        <div className='lg:grid lg:grid-flow-col grid-cols-[1fr_1fr] justify-start lg:pt-8 gap-10 '>
                <VideoBox subject='Chemistry' time={37} speaker='Vaibhav Uppal' attendance={432} Starttime='10:30am' />
                <VideoBox subject='Chemistry' time={37} speaker='Vaibhav Uppal' attendance={432} Starttime='10:30am' />
        </div>
    </div>
    </div>
    
  )
}

export default LiveClass
