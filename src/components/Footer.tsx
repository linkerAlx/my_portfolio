import React from 'react'
import { BsBootstrap, BsTwitterX } from 'react-icons/bs'
import { CgDesignmodo } from 'react-icons/cg'
import { DiGithub, DiJavascript } from 'react-icons/di'
import { FaFigma } from 'react-icons/fa'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa6'
import { GiTRexSkull } from 'react-icons/gi'
import { ImInstagram } from 'react-icons/im'
import { LiaLinkedinIn } from 'react-icons/lia'
import { MdCall, MdDeveloperBoard, MdEmail } from 'react-icons/md'
import { RiTailwindCssLine } from 'react-icons/ri'
import { SiMysql, SiTypescript, SiVite } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import Image from '../assets/images/download.jpg';

const Footer :React.FC = () => {
  return (
    <div className='bg-slate-700 flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-3  font-bold  mt-8 text-blue-200 '>
        <div>
        <img className='rounded-3xl mt-2 w-32 max-w-full h-auto' src={Image} alt="img" />
      </div>
      <div className='flex flex-col gap-2 '> 
        <h1 className='text-lg '>Skills:</h1>
        <h3 className='flex'><MdDeveloperBoard className='mt-1'/>Front-end developer</h3>
        <h3 className='flex '><CgDesignmodo className='mt-1  '/> UI/UX Designer</h3>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg '>Languages:</h1>
        <h3 className='flex'><FaHtml5 className='mt-1  '/>HTML</h3>
        <h3 className='flex'><FaCss3 className='mt-1  '/>CSS</h3>
        <h3 className='flex'><DiJavascript className='mt-1  '/>JavaScript</h3>
        <h3 className='flex'><SiTypescript className='mt-1  '/>typescript</h3>
          </div>
        
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg '>Tools:</h1>
        <h3 className='flex'><VscCode className='mt-1  '/>VS Code</h3>
        <h3 className='flex'><GiTRexSkull className='mt-1  '/>Git</h3>
        <h3 className='flex'><FaFigma className='mt-1  '/>Figma</h3>
        <h3 className='flex'><FaReact className='mt-1  '/>React framework</h3>
        <h3 className='flex'><RiTailwindCssLine className='mt-1  '/>Tailwind CSS</h3>
        <h3 className='flex'><BsBootstrap className='mt-1  '/>Boostrap</h3>
        <h3 className='flex'><DiGithub className='mt-1  '/>Github</h3>
        <h3 className='flex'><SiMysql className='mt-1  '/>Mysql</h3>
        <h3 className='flex'><SiVite className='mt-1  '/>vite</h3>
      </div>
      
      <div className='flex flex-col gap-3'>
        <h1 className='text-lg '>Contact Me:</h1>
        <h3 className='flex'><MdCall className='mt-1'/>:+250 783 653 651</h3>
        <h3 className='flex'><MdEmail className='mt-1'/>:inezalinkera@gmail.com</h3>
        <div className='flex gap-2 mt-4 '>
          <h1 className=' ' >Social:</h1>
        <h3><ImInstagram size={20} /></h3>
        <h3><LiaLinkedinIn size={20}/></h3>
        <h3><DiGithub size={20}/></h3>
        <h3><BsTwitterX size={20}/></h3>
        </div>
      </div>
     
    </div>
  )
}

export default  Footer 
