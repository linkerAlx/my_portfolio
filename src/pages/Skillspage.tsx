import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DiGithub, DiJavascript } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { FaCss3, FaFigma, FaReact } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';
import { GrMysql } from 'react-icons/gr';
import { FaGitAlt, FaHtml5 } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BsBootstrap } from 'react-icons/bs';
import { TbBrandVscode } from 'react-icons/tb';

const Skillspage :React.FC= () => {
  return (
    <div>
      <div className="bg-slate-800 bg-cover bg-center flex flex-col  py-4 min-h-screen lg:w-[1000px} ">
      <p className="text-white font-bold tracking-wide font-serif mx-5 mb-2 ">
        INEZA
        <span className="bg-blue-400 rounded-lg p-1  text-black"> LINKER</span>
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <Navbar />
        <div className="bg-white place-self-center lg:w-[800px] w-11/12 flex lg:flex-row flex-col p-7 min-h-[600px] rounded-xl">
          
        <section id="skills" className="py-10 bg-gray-300 m-3">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 flex justify-center items-center"><GiSkills/>Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <ul>
              <li>JavaScript, TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind css</li>
              <li>Boostrap</li>
              <li>React</li>
              <li>MySQL</li>
              <li>Git, GitHub</li>
            </ul>
          </div>
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Problem-Solving</li>
              <li>Time Management</li>
              <li>Adaptability</li>
            </ul>
          </div>
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Design Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Prototyping: Figma</li>
            </ul>
          </div>
      
          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
            <ul>
            
              <li>API Integration</li>
              <li>Content creation</li>
              
            </ul>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mt-10  '>
          <div className='flex lg:gap-7 '>
          <TbBrandVscode  size={30} className='text-blue-500'/>
          <DiJavascript size={30} className='text-yellow-400'/>
          <SiTypescript size={30} className='text-blue-600'/>
          <FaHtml5 size={30} className='text-orange-400'/>
          <FaCss3 size={30} className='text-blue-400'/>
          <RiTailwindCssFill size={30} className='text-teal-300' />
          </div>
          <div className='flex lg:gap-7 '>
          <BsBootstrap size={30} className='text-purple-500'/>
          <FaReact size={30} className='text-cyan-400'/>
          <FaGitAlt size={30} className='text-red-500' />
          <DiGithub size={30} className='font-extrabold'/>
          <FaFigma size={30} className='text-red-400'/>
          <GrMysql size={30} className='text-blue-500'/>
          </div>
        </div>
      </div>
    </section>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Skillspage
