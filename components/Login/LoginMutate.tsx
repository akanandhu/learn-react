 import axios from "axios";
 import { useMutation } from 'react-query'
import axiosInstance from "../Axios/AxiosIntercept";
import router, { useRouter } from "next/router";


  export const loginMutation = (mobile:any) => {
    return(
      axiosInstance.post('/auth/login', mobile).then((res) => {
        console.log(res);
        localStorage.setItem('userid',res.data.user_id)
        localStorage.setItem('message', res.data.message);
        
        router.push('/otppage/otpPage')}
        
    )
    )
  }

export const useLoginMutate = () => {
  return useMutation(loginMutation)
}
