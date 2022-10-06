import React from 'react'
import { useState } from 'react';
import OtpInput from 'react-otp-input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type RightOtpProps = {
  mobile : '+91 91828202029',
  time : '00:45',
  reset : 'Resent OTP',
  login : 'Login',
}


function RightOtp({mobile,time,reset, login}: RightOtpProps) {
  
  const toastResent = () => {
    toast.info('OTP resent successfully')
  }
  
  const boxStyle = {
    display : "flex",
    backgroundColor : "white",
    marginright : "10px",
    color: 'black',
    
  };
  const inputStyle = {
    color: "black",
    width : "66px",
    height : "66px",
    borderColor : "#D0D0D0",
    borderWidth : "1px",
    marginRight : "17px",
    backgroundColor : "#F9F9F9",
    borderRadius : "12px"
  }
  const [otp, setOtp] = useState('')

  const handleChange = (otp : string) => {
    setOtp(otp);
  }
  const toastSuccess = () => {
    toast.success("You have entered the OTP : "+ otp);
  }

  
  return (
    <div className=' w-[100%] flex justify-center pt-[5%] lg:w-[44%] lg:h-[100%] lg:flex lg:justify-center lg:align-middle lg:pt-[10%] md:w-[44%] md:h-[100%] md:flex md:justify-center md:pt-[20%]  '>
    <div className=' w-[100%] lg:w-[600px] lg:h-[100%] overflow-x-hidden  '>
    <div className=' flex justify-center lg:flex lg:justify-center lg:align-middle  lg:w-[100%] pb-5  '>
    <div className=' rounded-lg pl-10 pr-10 pt-5 pb-5 bg-tableBG shadow-[0px_0px_2px_rgba(0,0,0,0.2)]  lg:pr-10 lg:pt-5 lg:pb-5 lg:bg-tableBG lg:shadow-[0px_0px_2px_rgba(0,0,0,0.2)] md:pl-10 md:pr-10 md:pt-1 md-5 md:bg-tableBG md:shadow-[0px_0px_2px_rgba(0,0,0,0.2)]  '>
    <div className=' flex flex-col gap-2 h-full w-[100%] pt-8 pb-8 lg:flex lg:flex-col lg:gap-2 lg:h-full lg:w-[100%] lg:pt-8 lg:pb-8 md:flex md:flex-col md:gap-2 md:h-[100%] md:w-[100%] md:pt-8 md:pb-8 '>
      <h1 className=" text-3xl lg:text-3xl lg:mb-6 md:text-3xl md:mb-4 font-semibold ">Verify OTP</h1>
      <div>
      <h3 className=' font-sans font-normal text-grayFont'>Enter the OTP sent to the</h3>
      <h3 className=' font-sans text-grayFont font-normal lg:mb-4 md:mb-3 '> Mobile number <span className=' text-gray-600 text-xs font-bold'>{mobile} </span></h3>
      </div>
      
      <OtpInput 
      value={otp}
      numInputs={4} 
      separator={<span></span>}
      containerStyle={boxStyle}
      inputStyle={inputStyle}
      onChange={handleChange}
       />
      
      <h3 className='mb-1  font-sans font-bold lg:mb-1 md:mb-2 text-sm md:text-base  lg:text-sm'>{time}</h3>
      <button onClick={toastSuccess} className=" bg-greenBG h-[40px] w-[300px] lg:h-[59px] lg:w-[353px] md:h-[59px] md:w-[253px] md:mb-4 text-white font-['Montserrat_Regular'] font-semibold text-base rounded-md lg:mb-5">{login}</button>
      <h3 onClick={toastResent} className=" cursor-pointer  text-resetText font-extrabold text-sm font-['Montserrat_Regular'] pl-[36%] lg:pl-[40%] md:pl-[35%]">{reset}</h3>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
        />
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default RightOtp
