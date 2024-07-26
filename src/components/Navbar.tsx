import React from "react";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="">
      <div className=" flex lg:flex-col flex-row  lg:gap-4 gap-2 font-serif font-bold lg:text-xl text-sm text-black  ">
        <button className="hover:underline lg:p-2 bg-blue-400 ">
          {" "}
          <Link to="/">
            <FaHome className="lg:mx-16 mx-4" />
            Home
          </Link>
        </button>
        <button className="hover:underline lg:p-2 bg-blue-400">
          {" "}
          <Link to="/about">
            {" "}
            <SiAboutdotme className="font-extrabold mx-4 lg:mx-16" />
            About{" "}
          </Link>
        </button>
        <button className="hover:underline lg:p-2 bg-blue-400">
          <Link to="/skills">
            {" "}
            <GiSkills className=" lg:mx-16 mx-4" />
            Skills{" "}
          </Link>
        </button>
        <button className="hover:underline lg:p-2 bg-blue-400 ">
          <Link to="/contact">
            {" "}
            <IoMdContact className="lg:mx-16 mx-5" />
            Contact{" "}
          </Link>
        </button>
        <button className="hover:underline lg:p-2 bg-blue-400">
          <Link to="/projects">
            <GoProject className="lg:mx-16 mx-5" />
            Projects{" "}
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
