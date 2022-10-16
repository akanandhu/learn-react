import { useMutation } from "react-query"
import axiosInstance from "../Axios/AxiosIntercept"
import router, { useRouter } from "next/router"

export const addSignUpDetails = (details:any) => {
   return(
         axiosInstance.post('/users', details ).then((res) => {
        console.log(res,"SignUp Details")
        console.log(res.data.message);
        if(res.data.message==="Details Stored Successfully"){
          router.push('/EduApp/eduApp')
        }
      }
        )
   )
}


export const useSignUpMutate = () => {
    return useMutation(addSignUpDetails)
}