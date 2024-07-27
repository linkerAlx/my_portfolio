import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LinkerImage from "../assets/images/contact.jpg";
import { FaAddressBook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { MdCall, MdEmail } from 'react-icons/md';

const Contactpage:React.FC = () => {
  return (
    <div>
    <div className="bg-slate-800 bg-cover bg-center flex flex-col  py-4 min-h-screen lg:w-[1000px} ">
    <p className="text-white font-bold tracking-wide font-serif mx-5 mb-2 ">
      INEZA
      <span className="bg-blue-400 rounded-lg p-1  text-black"> LINKER</span>
    </p>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
      <Navbar />
      <div className="bg-white place-self-center lg:w-[1000px] w-11/12 flex  flex-col lg:flex-row p-7 gap-3 min-h-[600px] rounded-xl">
    
                  <div className='mx-auto font-medium'>
                    <h1 className='text-lg font-bold flex '> <FaAddressBook className='mt-1'/>Address:</h1>
                    <p>INEZA LINKER Arlene</p>
                    <p>Rwanda,Southern,Muhanga district</p>
                    <p className='flex'><MdEmail size={30} className='text-blue-400'/>:inezalinkera@gmail.com</p>
                    
                    <p className='flex'><MdCall size={30} className='text-green-400'/>:+250 783 653 651</p>
                    <div>
                    <img src={LinkerImage} alt="contactimage" className='w-max-full h-auto w-full'/>
                    </div>
                  </div>
        <div className='lg:mt-14'>
        <h1 className='text-4xl font-bold mb-6'>Connect <span className='text-blue-400'>Me</span></h1>
        <form className='bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'>
          <label htmlFor="" className='block text-gray-700 text-lg font-bold mb-2'>Names</label>
          <input type="text" placeholder='enter your Names' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/><br />
          <label htmlFor="" className='block text-gray-700 text-lg font-bold mb-2'>E-mail</label>
          <input type="email" name="" id="" placeholder='enter your E-mail'  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/><br />
          <label htmlFor="" className='block text-gray-700 text-lg font-bold mb-2'>Message</label>
          <textarea name="" id="" placeholder='enter your message' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></textarea><br />
        <button className='bg-blue-400 rounded-lg p-2 font-extrabold mx-14  lg:mx-20'>Send</button>
        </form>
        </div>
        <div className='flex  flex-row lg:flex-col justify-center items-center gap-10'>
          <FaGithub size={40}/>
          <FaInstagram size={40} className='text-red-600'/>
          <FaLinkedinIn size={40} className='text-blue-700'/>
          <BsTwitterX size={40}/>
                  </div>
      </div>
    </div>
    <Footer />
  </div>
  </div>
  )
}

export default Contactpage
