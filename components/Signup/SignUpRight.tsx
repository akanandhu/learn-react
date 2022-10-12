import { useForm } from 'react-hook-form'
import {string,number,object} from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import axios from 'axios';
import axiosInstance from '../Axios/AxiosIntercept';
import { useState, useEffect } from 'react'
import { ISegment } from './ts';
import { useMutation, useQuery } from 'react-query'






type SignUpRightProps = {
  heading : 'Signup',
  

}


type FormValues = {
  phone : number,
  studentName : string,
  studentEmail : string,
  default_segment_id : number,
  

}




function SignUpRight({heading} :SignUpRightProps) {
  
  const [course, setCourse] = useState<ISegment[]>([]);


    // useEffect(() => {
      
    // axiosInstance.get('/segments').then((res) => {
      
    //   console.log(res.data);
    //   setCourse(res.data);
    // })

    // },[])

    const getSegments = () => {
      axiosInstance.get('/segments').then((res) => {
        console.log(res.data)
        setCourse(res.data)
      })
    }

    const {data} = useQuery('segments',getSegments)

  
  const schema = object({
    phone : string().required('Mobile Number is Required')
    .max(10,'10 digits is the limit')
    .min(10, '10 digits required'),
    studentName : string().required('Student Name is Required')
    .max(20, 'Limit Exceeded')
    .min(1, 'Enter the name'),
    studentEmail : string().required('Enter Email id properly')
    .max(25,'Too much Limit')
    .min(2,'Enter correct Email')


   })
  const { register, handleSubmit ,formState: { errors }, setValue } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  
const router = useRouter();


if (typeof window !== 'undefined') {
  const phone = localStorage.getItem('phone');
}

 const [isLoading, setIsLoading] = useState(false)

 const mutation = useMutation(details => {
  return(
    axiosInstance.post('/users', details ).then((res) => {
      console.log(res)
      console.log(res.data.message);
      if(res.data.message==="Details Stored Successfully"){
        router.push('/EduApp/eduApp')
      }
    }
      ))}) 

  return ( 
    <div className='pl-[15%] pt-[4%] md:mr-[5%] md:pt-[2%] md:pr-[20%] md:pb-5 md:pl-[50%] md:mb-10   lg:pl-[38%] lg:pr-[32%] lg:pt-[19%] lg:pb-[10%] lg:mb-7 lg:flex lg:flex-1 lg:mt-10  '>
        <form onSubmit={handleSubmit((data) => {
              setIsLoading(true)
              console.log('data', data);
              const details:any = {
                name : data.studentName,
                email : data.studentEmail,
                default_segment_id : data.default_segment_id,
                collage : 'cas',
                profile_picture : 'profile_picture/1654246701dd1d11dcaca18ccc8f329b8a5dd5aa67.jpeg',
                address : 'address',
                dob : '1998/05/25', 
              }
              mutation.mutate(details)
              {mutation.isSuccess? router.push('/EduApp/eduApp') : 'FAIL' }
              // console.log(details);
              // try{
                
              //   axiosInstance.post('/users', details ).then((res) => {
              //     console.log(res);
                 
              //   });
                
              //   router.push('/EduApp/eduApp')
                
              // }catch(err) {
              //   console.log('error')
              // }
              
            



        })} className=' justify-center md:mr-5 h-[100%] w-[100%]  md:h-[100%] md:w-[80%] md:flex md:flex-col lg:pt-28  lg:ml-12  lg:pl-20 lg:pb-28 lg:pr-20 md:justify-center lg:h-[90%] lg:w-[100%] lg:flex lg:flex-col lg:justify-center '>
           <div className='flex flex-col relative gap-5  '>
            <label className=" font-semibold  text-3xl mb-4 lg:text-3xl  lg:mb-8 lg:leading-3 md:text-3xl md:mb-6  md:font-semibold  md:font-mont-bold lg:font-semibold " > {heading} </label>
            <input  {...register("phone", {required:'This is required' , minLength: {value: 10, message: "Enter the correct Mobile Number"}} )} placeholder='Phone number' type='number' className=" lg:flex   placeholder:text-extrabold  font-semibold   md:font-semibold  lg:font-semibold lg: mb-5 w-[100%] lg:w-[100%] md:w-[100%] h-[56px] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5 "></input>
            {errors.phone?.message && <p className='text-red-500 text-sm p-2'>{errors.phone?.message}</p>}
            <input {...register("studentName", {required: true })} placeholder='Student name' className="font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-semibold  mb-5  h-[56px]  lg:w-[100%] md:w-[100%] w-[100%] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5"></input>
            {errors.studentName?.message && <p className='text-red-500 text-sm p-2'>{errors.studentName?.message}</p>}
            <input {...register("studentEmail")} placeholder='Student Email'  className="font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-semibold  mb-5  h-[56px] w-[100%] lg:w-[100%] md:w-[100%] border-[2px] rounded-[10px] placeholder:px-0 placeholder:text-placeText p-5"></input>
            {errors.studentEmail?.message && <p className='text-red-500 text-sm p-2'>{errors.studentEmail?.message}</p>}
           </div>
           <div>
            <label className='text-lg font-mont-bold font-semibold md:font-mont-bold md:font-semibold lg:font-semibold '>Select Class</label>
            <div className='flex flex-row mt-5 pl-2 '>
            
              <ul className="grid gap-6 w-[50%] md:grid-cols-2">

                
             {course.map((obj) => {
              
               return(
                     <li key={obj.id}>
                  
                    <input {...register("default_segment_id",
                 {required: true })}
                    
                    type="radio" id="hosting-small" 
                     value={`${obj.id}`} 
                    className="hidden peer"
                     >


                     </input>
                    <label htmlFor="hosting-small" className=" active:border-greenBG active:border-2  inline-flex justify-between items-center p-1 pl-4 w-full text-black bg-boxBG rounded-2xl border-2 border-boxBorder cursor-pointer dark:hover:text-gray-300 dark:border-boxBorder dark:peer-checked:text-black peer-checked:border-greenBG peer-checked:text-blue-600 hover:text-gray-600 hover:bg-greenBG dark:text-gray-400 dark:bg-boxBG dark:hover:bg-greenBG">                           
                    <div className="flex">

                    <div className="w-full text-lg font-semibold">{obj.name}</div>
                    

                   </div>
                  </label>
                 </li>

             )})}
                 





                  
              </ul>
                </div>
            <button type='submit' className=' focus:cursor-not-allowed focus:bg-gray-400 font-semibold bg-greenBG h-[60px] w-[90%] mt-6 rounded-xl md:bg-greenBG md:h-[80px] md:w-[100%] md:mt-6 md:mr-5 md:rounded-xl lg:bg-greenBG lg:h-[80px] lg:w-[500px] lg:mt-6 lg:rounded-[10px] text-xl text-white'

            >
            {isLoading? '...Signing Up' : 'Signup'}</button>
            
     
            <h3 className='flex flex-1 justify-start text-[16px] font-mont-bold font-semibold md:font-mont-bold md:pt-[5%] md:pl-[4%] md:font-semibold lg:font-semibold lg:flex lg:text-lg md:text-sm pl-[10%]  lg:font-mont-bold pt-2 lg:pl-[25%]'>
              Already have an account? 
              <span className='text-greenBG text-[16px] ml-2 cursor-pointer' onClick={()=>{
                router.push('/login/loginPage');
              }}> 
              Login </span>
              </h3>
           </div>
          
        </form>      
    </div>
  )
}

export default SignUpRight