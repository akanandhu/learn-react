import axios from 'axios';
import { useForm } from 'react-hook-form';
import {string,number,object } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import Router from 'next/router';
import { useRouter } from 'next/router'

type SigninProps = {
  text: string,
  label : string,
  placeholder : string, 
}
type NumValues = {
  mobile : string,
  
}


function Signin({text,label,placeholder} :SigninProps) {


  const schema = object({
    mobile : string().required('Mobile Number is Required')
    .max(10,"maximum is 10")
    .min(10,"minimum 10 digits required")
    
   })
  const { register, handleSubmit ,formState: { errors } } = useForm<NumValues>({
    resolver: yupResolver(schema),
    
  });
  
 const axiosInstance = axios.create({
    baseURL: "https://api.elearning.alpha.logidots.com/api/auth/",
 });
 
 


 axiosInstance.interceptors.request.use(
  config => {
     let token;

     if (typeof window !== 'undefined') {
        token = localStorage.getItem('bearer_token');
     }

     config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token ? token : ''}`,
        Accept: "application/json",
        'X-App-Type': 'learner',
     };
     return config;
  },
  error => {
     console.log(error, 'the error');
     return Promise.reject(error);
  }
);

const router = useRouter()
  return (
    
    <div className=' h-[70%] w-[100%] mb-0 gap-5 flex-row flex justify-center md:flex md:justify-center md:pt-[0%] md:pr-[13%] md:pl-[8%] lg:flex lg:flex-row lg:justify-center lg:pt-[25%] lg:pr-[26%] lg:pl-[16%]'>
        <div className=' mr-5 pl-10 pt-8 pb-5 pr-2 flex  gap-10 flex-col  w-[70%]  justify-center md:flex md:flex-1 md:justify-center   md:pl-5  md:gap-4 md:w-[100%] md:h-full lg:w-[100%] lg:h-[100%]  lg:flex lg:flex-col lg:gap-2 lg:pl-10  lg:rounded-md  lg:pt-10 lg:border md:border border lg:shadow-[0px_opx_2px_rgba(0,0,0,0.2)] md:shadow-[0px_opx_2px_rgba(0,0,0,0.2)] lg:`${bgprimary}` md:bg-tableBG lg:justify-center ' >
            <h1 className="  md:mb-8 lg:mb-8 md:text-[3vw] lg:text-[2vw] lg:pl-[16%] text-[5vw] font-semibold  ">{text}</h1>
            <input {...register('mobile', { valueAsNumber:true }) }  type='number' placeholder={placeholder} className={` md:mb-8 bg-boxBG h-[60px] mb-4 rounded-lg pl-3 w-[95%] placeholder:text-sm placeholder:pl-0 placeholder:text-placeText placeholder:font-semibold  placeholder:pb-10 border border-solid   `}></input>
            {errors.mobile?.message && <p className='text-red-500 text-sm p-2'>{errors.mobile?.message}</p>}
            
            <button onClick={handleSubmit((data ) => {
              const mobile = {
                mobile : data.mobile,
                client_id : 6,
                device_id : '3d0cd218875efb07h',
                device_type : 'ios',
                firebase_token : 'vvvvvvv', }
                console.log(mobile);
                localStorage.setItem('mobile', data.mobile);

                try{
                  axiosInstance.post('/login', mobile ).then((res) => {

                    console.log(res.data);
                    localStorage.setItem('userid', res.data.user_id)
                   localStorage.setItem('message', res.data.message);
                    
                    router.push('/otppage/otpPage')
                    
                  });
                  
                  
                }catch(err) {
                  console.log(errors)
                }
               
                
            })}
             className= " md:mb-8 bg-loginbutton text-white rounded-lg h-[55px] w-[95%] lg:font-['Montserrat_Regular'] md:font-['Montserrat_Regular'] font-['Montserrat_Regular'] font-semibold " >{label}</button>
       
        </div>
      
    </div>
  )
}

export default Signin


