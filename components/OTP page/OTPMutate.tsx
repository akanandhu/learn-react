import router from "next/router";
import { useState } from "react";
import Router, {useRouter} from "next/router";
import { useMutation } from "react-query";
import axiosInstance from "../Axios/AxiosIntercept";



export const OTPMutate = (otpDetail:any) => {
    const userid = localStorage.getItem('userid');
    
    return (
        axiosInstance.post(`/auth/verify-otp/${userid}`,otpDetail).then((res) => {
        console.log(res.data);
      
       
        localStorage.setItem('bearer_token', res.data.token.access_token);
        
        if(res.data.details===false){
            router.push('/signup/signUp')
        }
        else{
            router.push('/EduApp/eduApp')
        }
        
      })

    )
}

export const useOTPMutation = () => {
    return useMutation(OTPMutate,{
        
        onError: () => {
            router.push('/login/loginPage')
        }
         }
    )
}