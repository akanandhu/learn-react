
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
        <div className='flex flex-col'>
                <div className='lg:relative md:relative md:flex flex relative   '>
                    
                    <div className='  lg:min-w-[528px] lg:max-w-[12%] md:min-w-[528px] md:max-w-[12%] min-w-[528px] max-w-[12%] '>
                    <Image src={greenRect} className=' object-fill ' /> 
                    </div>
                    <div className='lg:absolute lg:flex lg:left-0 lg:bottom-0 md:absolute md:flex md:left-0 md:bottom-0 absolute flex left-0 bottom-0'>
                        <div>
                            <Image src={model} className=' object-scale-down' />
                         </div>
                         <div className='lg:abosolute lg:flex lg:pl-20 lg:pt-8 lg:abosolute md:flex md:pl-20 md:pt-8 flex pl-20 pt-8 '>
                        <Image src={detail} className='object-scale-down' />
                    </div>
                    
                         <div className='lg:absolute lg:z-10 lg:left-10 lg:right-0 
                         md:absolute md:z-10 md:left-10 md:right-0
                         absolute z-10 left-10 right-0'>
                        
                    </div>
                    <div className=' lg:bg-blackGrad lg:opacity-90 lg:flex lg:align-bottom lg:items-end lg:pl-5 lg:pb-1 lg:text-white lg:font-light lg:font-mont lg:h-[12%] lg:w-[100%] lg:absolute lg:bottom-1
                    md:bg-blackGrad md:opacity-90 md:flex md:align-bottom md:items-end md:pl-5 md:pb-1 md:text-white md:font-light md:font-mont md:h-[12%] md:w-[100%] md:absolute md:bottom-1
                    bg-blackGrad opacity-90 flex align-bottom items-end pl-5 pb-1 text-white font-light font-mont h-[12%] w-[100%] absolute bottom-1'>
                    <h1>Start at {Starttime} - {attendance} attending </h1>
                    </div>
                    
                    <div className='lg:absolute lg:bg-livered lg:pl-4 lg:pb-2 lg:pt-2 lg:pr-4 lg:text-white lg:rounded-md lg:top-5 lg:right-6  lg:font-semibold 
                    md:absolute md:bg-livered md:pl-4 md:pb-2 md:pt-2 md:pr-4 md:text-white md:rounded-md md:top-5 md:right-6  md:font-semibold 
                    absolute bg-livered pl-4 pb-2 pt-2 pr-4 text-white rounded-md top-5 right-6  font-semibold   '>
                       .  Live
                    </div>
                    </div>
                    
                   
                    
                    
                </div>
                 <div className='lg:grid lg:grid-flow-row   lg:bg-liveclass lg:pl-5 lg:pt-1 lg:pb-5 lg:pr-5
                 md:grid md:grid-flow-row   md:bg-liveclass md:pl-5 md:pt-1 md:pb-5 md:pr-5
                 grid grid-flow-row   bg-liveclass pl-5 pt-1 pb-5 pr-5 max-w-[2%] min-w-[530px] ' >
                    <div className=' lg:font-mont lg:font-semibold lg:text-livetext '>
                        {subject}
                    </div>
                    <div className='lg:grid lg:grid-flow-col lg:gap-2
                    md:grid md:grid-flow-col md:gap-2
                    grid grid-flow-col gap-2'>
                        <div className='lg:flex lg:flex-col lg:gap-2
                        md:flex md:flex-col md:gap-2
                        flex flex-col gap-2'>
                        <div className='lg:font-bold lg:font-mont
                        md:font-bold md:font-mont
                        font-bold font-mont'> <p>Beginners Guide : Biomolecules </p> </div>
                        <div className='font-mont text-livetext font-medium'>{time}min By {speaker}</div>
                        </div>
                        <div>
                            <button className=' lg:bg-buttonOrange lg:flex lg:pl-5 lg:pt-3 lg:pb-2 lg:pr-5 lg:rounded-[20px] lg:justify-center lg:text-center lg:font-mont lg:font-medium lg:text-white lg:w-[78%] lg:h-[90%]
                            md:bg-buttonOrange md:flex md:pl-5 md:pt-3 md:pb-2 md:pr-5 md:rounded-[20px] md:justify-center md:text-center md:font-mont md:font-medium md:text-white md:w-[78%] md:h-[90%]
                            bg-buttonOrange flex pl-5 pt-3 pb-2 pr-5 rounded-[20px] justify-center text-center font-mont font-medium text-white w-[78%] h-[90%]'>Join Us</button>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-1 lg:justify-center lg:pt-3 lg:pb-3
                    md:flex md:flex-1 md:justify-center md:pt-3 md:pb-3
                    flex flex-1 justify-center pt-3 pb-3'>
                        <Image src={line} className="lg:object-scale-down md:object-scale-down object-scale-down" />
                    </div>
                    <div className='lg:font-mont lg:flex lg:gap-3 lg:align-middle lg:font-medium lg:text-livetext
                    md:font-mont md:flex md:gap-3 md:align-middle md:font-medium md:text-livetext
                    font-mont flex gap-3 align-middle font-medium text-livetext'>
                        <Image src={star} width={23} height={23} className='lg:object-none md:object-none' />
                        <h1>Master Class </h1>
                    </div>
                </div>
        </div>
        
    )
}

function LiveClass() {
  return (
    <div>
      <div className='lg:w-[80%] lg:h-screen lg:bg-bodyShade lg:pl-20 lg:pt-10
      md:w-[80%] md:h-screen md:bg-bodyShade md:pl-20 md:pt-10
      w-[80%] h-screen bg-bodyShade pl-20 pt-10'>
        <div className='lg:pb-14 lg:h-[28px]
        md:pb-14 md:h-[28px]
        pb-14 h-[28px]'>
            <h1 className='lg:font-[`Montserrat_Regular`] lg:font-semibold lg:text-4xl lg:align-middle
            md:font-[`Montserrat_Regular`] md:font-semibold md:text-4xl md:align-middle
            font-[`Montserrat_Regular`] font-semibold text-4xl align-middle'> <span className=' text-eduGreen'> Learn</span> with Video Classes</h1>
        </div>    
        <div className='lg:grid lg:grid-flow-col lg:grid-cols-[1fr_1fr] lg:justify-start lg:pt-8 lg:gap-10
        md:grid md:grid-flow-col md:grid-cols-[1fr_1fr] md:justify-start md:lg:pt-8 md:gap-10
        flex flex-row justify-start pt-8 gap-10 '>
                <VideoBox subject='Chemistry' time={37} speaker='Vaibhav Uppal' attendance={432} Starttime='10:30am' />
                <VideoBox subject='Chemistry' time={37} speaker='Vaibhav Uppal' attendance={432} Starttime='10:30am' />
        </div>
    </div>
    </div>
    
  )
}

export default LiveClass
