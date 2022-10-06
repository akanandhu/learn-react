import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form' 

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("example"))
   return(
      <div></div>
   )
  
}

