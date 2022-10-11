import React from 'react'
import { RightSide } from '../../components/Login/RightSide';
import { LeftSide } from '../../components/Login/SignInLeft';
import Signin from '../../components/Login/Signin';
import { QueryClientProvider, QueryClient } from 'react-query'

function loginPage() {
  const queryClient = new QueryClient(); 
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className=' md:h-[100%] md:w-[100%]  lg:h-[100%] lg:w-[100%] lg:flex lg:flex-row md:flex md:flex-row flex flex-col'>
      <LeftSide />
      <div className='  ml-0 mt-10 h-full w-[100%] bg-white flex justify-center align-middle md:h-screen md:w-[100%] md:bg-white md:flex md:justify-center md:align-middle lg:h-full lg:w-[46%] lg:bg-white lg:flex lg:justify-center lg:align-middle'>
      <Signin text="Login/Lookup" label='Login' placeholder='Enter Phone Number'/> 
      </div>

      
    </div>
    </QueryClientProvider>
  )
}

export default loginPage
