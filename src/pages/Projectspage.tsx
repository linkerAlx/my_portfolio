import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projectspage :React.FC= () => {
  return (
    <div>
      <div className="bg-slate-800 bg-cover bg-center flex flex-col  py-4 min-h-screen lg:w-[1000px} ">
      <p className="text-white font-bold tracking-wide font-serif mx-5 mb-2 ">
        INEZA
        <span className="bg-blue-400 rounded-lg p-1  text-black"> LINKER</span>
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <Navbar />
        <div className="bg-white place-self-center lg:w-[1000px] w-11/12 flex lg:flex-row flex-col p-7 min-h-[600px] rounded-xl">
          
          
        </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default projectspage
