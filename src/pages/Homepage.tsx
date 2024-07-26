import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import LinkerImage from "../assets/images/linker.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Homepage: React.FC = () => {
  return (
    <div className="bg-slate-800 bg-cover bg-center flex flex-col  p-4 min-h-screen lg:w-[1000px} ">
      <p className="text-white font-bold tracking-wide font-serif mx-5 mb-2 ">
        INEZA
        <span className="bg-blue-400 rounded-lg p-1  text-black"> LINKER</span>
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <Navbar />
        <div className="bg-white place-self-center lg:w-[1000px] w-11/12 flex lg:flex-row flex-col p-7 min-h-[600px] rounded-xl">
          <div className=" m-auto lg:text-2xl font-serif">
            <h1 className="font-bold ">I'm INEZA LINKER Arlene; </h1>
            <h2 className="font-bold mb-2">
              Front-end developer and UI/UX Designer.
            </h2>
            <p className="font-medium ">
              {" "}
              I have dedicated my life to mastering cutting-edge technologies to
              create visually stunning.
              Explore my projects to see how I transform ideas into interactive
              digital solutions.
            </p>
            <div className="flex flex-col  gap-4 font-medium ">
              <div className="flex mt-5 gap-4"><a href="#">
                <FaLinkedinIn size={30} />
              </a>
              <FaGithub size={30} />
              <FaInstagram size={30} /></div>
              <div className="flex">
                <MdEmail size={30} />
                <p className="hover:underline">:inezalinkera@gmail.com</p>
              </div>
              <div className="flex font-sans">
                <MdCall size={30} />
                <p>:+250 783 653 651</p>
              </div>
            </div>
          </div>

          <div className="m-auto bg-gray-800 pt-8  pb-4 rounded-t-lg object-cover">
            <img
              className="rounded-t-full rounded-b-full w-full max-w-full h-auto border-solid   border-4  border-gray-500"
              src={LinkerImage}
              alt="my_image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
