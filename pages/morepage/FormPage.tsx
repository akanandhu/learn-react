import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form' 
type Inputs = {

}

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

   return(
      <div></div>
   )
  
}

