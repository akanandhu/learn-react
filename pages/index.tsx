import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'



const Home: NextPage = () => {
  const router = useRouter();
  const firstProject = () =>{
    router.push('/morepage/nextPage');
  } 
  const secondProject = () =>{
    router.push('/morepage2/nextPage1');
  } 
  const thirdProject = () =>{
    router.push('/contentPage/mainPage');
  } 
  const fourthProject = () =>{
    router.push('/content2/content2');
  } 
  const fifthProject = () =>{
    router.push('/login/loginPage');
  } 
  const sixthProject = () =>{
    router.push('/signup/signUp');
  } 
  const seventhProject = () =>{
    router.push('/otppage/otpPage')
  } 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className='text-blue-700'>
      <Link href={'./morepage/nextPage'}  >Link 1</Link>
      </h1>
      <button onClick={()=>{

      }}>Link Button</button>

      <h3 className='text-red-500'>Content<Link href={'./contentPage/mainPage'}>Page </Link></h3>
      <h3>Tailwind Css <Link href={'./content2/content2'}> Content Page  </Link></h3>
      <h3 className='text-red-800'><Link href={'./login/loginPage'}>Login Page</Link></h3>
      <h3><Link href={'./signup/signUp'}>SignUp Page</Link></h3> */}
      
      <div className='h-[200px] w-[550px] bg-slate-500 flex text-white text-center justify-center  '>
        <div className='grid grid-flow-col grid-cols-4 grid-rows-1  w-[100%]'>
        <button className='h-[100px] w-[100px] bg-white text-black ml-5 mt-5 rounded-xl' onClick={firstProject}>1</button>
        <button className='h-[100px] w-[100px] bg-white text-black ml-5 mt-5 rounded-xl' onClick={secondProject}>2</button>
        <button className='h-[100px] w-[100px] bg-white text-black ml-5 mt-5 rounded-xl' onClick={thirdProject}>3</button>
        <button className='h-[100px] w-[100px] bg-white text-black ml-5 mt-5 rounded-xl' onClick={fourthProject}>4</button>
        </div>
        
        </div>

        <div className='h-[200px] w-[550px] bg-slate-500 text-white text-center justify-center '>
          <div className='grid grid-flow-col grid-cols-4 grid-rows-1  w-[100%]'>
        <button className='h-[100px] w-[100px] bg-white text-black ml-5 mt-5 rounded-xl' onClick={fifthProject}>5</button>
        <button className='h-[100px] w-[100px] bg-white text-black ml-5 mt-5 rounded-xl ' onClick={sixthProject}>6</button>
        <button className='h-[100px] w-[100px] bg-white text-black ml-5 mt-5 rounded-xl ' onClick={seventhProject}>7</button>
        <button className='h-[100px] w-[100px] bg-white text-black ml-5 mt-5 rounded-xl'>8</button>
        </div>
        
        </div>
      

      
      </main>

      
    </div>
  )
}

export default Home
