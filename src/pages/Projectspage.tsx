import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Kigali from "../assets/images/kigali.png";
import News from "../assets/images/news.png";
import Qrcode from "../assets/images/qrcode.png";

const projectspage: React.FC = () => {
  return (
    <div>
      <div className="bg-slate-800 bg-cover bg-center flex flex-col  py-4 min-h-screen lg:w-full ">
        <p className="text-white font-bold tracking-wide font-serif mx-5 mb-2 ">
          INEZA
          <span className="bg-blue-400 rounded-lg p-1  text-black">
            {" "}
            LINKER
          </span>
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <Navbar />
          <div className="bg-white place-self-center lg:w-[1000px] w-11/12 flex lg:flex-row flex-col p-7 min-h-[400px] rounded-xl">
            <div className="flex flex-col lg:flex-row">
              <div className="m-4">
                <img
                  src={Kigali}
                  alt="API Weather App"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <h1 className="text-xl font-bold mt-4">API Weather App</h1>
                <p className="text-gray-700 mt-2">
                  A weather application that uses external APIs to fetch and
                  display weather data for various locations.
                </p>
                <a
                  href="https://github.com/linkerAlx/my_first_frontend_projects/tree/main/weatherapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 inline-block"
                >
                  View GitHub
                </a>
              </div>
              <div className="m-4">
                <img
                  src={News}
                  alt="News Magazine API"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <h1 className="text-xl font-bold mt-4">News Magazine API</h1>
                <p className="text-gray-700 mt-2">
                  A RESTful API that provides news articles and magazines data
                  from various sources.
                </p>
                <a
                  href="https://github.com/linkerAlx/news_magazine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 inline-block"
                >
                  View GitHub
                </a>
              </div>
              <div className="m-4">
                <img
                  src={Qrcode}
                  alt="QR Code Creation"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <h1 className="text-xl font-bold mt-4">QR Code Creation</h1>
                <p className="text-gray-700 mt-2">
                  An application that generates QR codes for different types of
                  data.
                </p>
                <a
                  href="https://github.com/linkerAlx/my_first_frontend_projects/tree/main/QR%20code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 inline-block"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default projectspage;
