import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import LaptopImage from "../assets/images/backgr.jpg";
import LinkerImage from "../assets/images/linker.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <div className="bg-slate-800 bg-cover bg-center flex flex-col  py-4 min-h-screen lg:w-[1000px} ">
      <p className="text-white font-bold tracking-wide font-serif mx-5 mb-2 ">
        INEZA
        <span className="bg-blue-400 rounded-lg p-1  text-black"> LINKER</span>
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <Navbar />
        <div className="bg-white place-self-center lg:w-[800px] w-11/12 flex lg:flex-row flex-col p-7 min-h-[400px] rounded-xl">
          <div className="m-auto text-lg ">
            <h1 className="font-extrabold">ABOUT ME</h1>
            <img
              src={LinkerImage}
              className="w-60 max-w-full h-auto rounded-3xl"
              alt="LINKER "
            />
            <p className="font-medium">
              Hello! I'm Ineza Linker Arlene, a Rwandan front-end developer and
              UI/UX designer passionate about digital technology. I create
              user-friendly interfaces, blending creativity with technical
              skills.
            </p>
          </div>
          <div className="m-auto text-lg ">
            <div>
              <h1 className="text-center font-extrabold">Education</h1>
              <p className="font-medium">
                I'm a Level 3 Business Information Technology (BIT) student at
                the University of Rwanda and an ALX Software Engineering
                student, with a Strong foundation in business and technology.
              </p>
            </div>
            <div className="mt-7 lg:mx-28">
              <img
                className="rounded-lg  border-solid   border-4  border-gray-500 w-60 h-auto 
      max-w-full"
                src={LaptopImage}
                alt="my_image"
              />
            </div>

            <div className="flex  flex-col  gap-4 font-medium ">
              <div className="flex m-auto p-3 gap-4  ">
                <a href="#">
                  <FaLinkedinIn size={30}  className="text-blue-600"/>
                </a>
                <FaGithub size={30} />
                <FaInstagram size={30} className="text-red-600" />
              </div>

              <div className="flex m-auto">
                <MdEmail size={30} className="text-blue-600" />
                <p className="hover:underline">:inezalinkera@gmail.com</p>
              </div>
              <div className="flex font-sans m-auto">
                <MdCall size={30} className="text-green-600" />
                <p>:+250 783 653 651</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
