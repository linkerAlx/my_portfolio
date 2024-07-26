import React from 'react'
import { FaGithub,FaLinkedinIn,FaInstagram, } from 'react-icons/fa';
import{MdCall,MdEmail} from 'react-icons/md'
import LaptopImage from '../assets/images/backgr.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className= 'bg-slate-800 bg-cover bg-center flex flex-col  py-4 min-h-screen lg:w-[1000px} '>
    <p className='text-white font-bold tracking-wide font-serif mx-5 mb-2 '>INEZA<span className='bg-blue-400 rounded-lg p-1  text-black'> LINKER</span></p>
    
    <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
      <Navbar />
    <div className='bg-white place-self-center lg:w-[1000px] w-11/12 flex lg:flex-row flex-col p-7 min-h-[600px] rounded-xl'>
      <div className='m-auto'>
      <img  className='rounded-lg  border-solid   border-4  border-gray-500 w-60 lg:w-full max-w-full' src={LaptopImage} alt="my_image" />
      <div className='flex lg:flex-row flex-col  gap-4 '>
         <a href="#"><FaLinkedinIn size={30}/></a> 
        <FaGithub size={30}/>
        <FaInstagram size={30}/>
        <div className='flex'>
          <MdEmail size={30}/>
          <p className='hover:underline'>:inezalinkera@gmail.com</p>
          </div>   
        <div className='flex font-sans'>
          <MdCall size={30}/>
          <p>:+250 783 653 651</p>
          </div> 
          </div>
            </div>
            <div className='m-auto text-xl font-serif'> </div>
    </div>
    </div>
    <Footer />
</div>
  )
}

export default About
