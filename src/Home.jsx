import React, { useState } from "react";
import Side from "./Side.jsx";
import Icon from "./Icon.jsx";
import { formatTime } from "./function/user.js";
import gmail from "./assets/gmail.png";
import profile from "./assets/user.png";
import my from './assets/my.jpg'
import r1 from './assets/r1.png'
function Home() {
  let hour = formatTime();
  const [showCard, setShowCard] = useState(false);

  const handleClose = () => {
    setShowCard(false);
  };
  return (
    <div className="container flex w-screen h-screen flex-col md:w-screen lg:w-screen sm:max-w-screen-2xl bg-black">
      <div className="bg-black bg-opacity-55 text-teal-50 flex justify-between sticky  ">
        <div className="mx-10">
          <span>Portfolio</span>
        </div>
        <div>
          <p className="font-extralight">{hour}</p>
        </div>
      </div>
      <div className="flex w-[100%] h-[100%] justify-between p-1 flex-col ">
        <div className="flex ">
          <Icon />

          <Side />
        </div>
        <div className=" h-[20%] flex justify-center items-center sm:h-[15%]">
          <div className="w-[55%] h-[50%] bg-black sm:w-[30%] rounded-xl bg-opacity-40 flex justify-center items-center gap-4">
            <div className="w-[24%] sm:w-[13%] hover:p-2 hover:scale-105 hover:shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out transform ">
              <a href="mailto:sriramsivakumar200306@gmail.com">
                <img src={gmail}></img>
              </a>
            </div>
            <div className="w-[24%] sm:w-[13%] hover:p-2 hover:scale-105 hover:shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out transform " onClick={()=>{
              setShowCard(true);
            }}>
              <img src={profile}></img>
            </div>
            {showCard && (
            <div className="absolute inset-0 flex items-center justify-center z-50 animation animate-fadeInDown duration-900">
          <div className="relative w-96 p-6 bg-white/5 backdrop-blur-sm rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-10 text-white bg-red-500 rounded-full p-2 hover:bg-red-600"
              onClick={handleClose}
            >
              &times;
            </button>
            {/* Profile Photo */}
            <div className="flex flex-col items-center">
              <img
                src={my}
                alt="Profile"
                className="w-32 h-28 rounded-full  shadow-md mb-4"
              />
              {/* Name */}
              <h2 className="text-xl font-semibold text-gray-100">SRIRAM S</h2>
              {/* Skill */}
              <p className="text-gray-300 mb-2"> Web Developer</p>
              {/* Phone */}
              <p className="text-gray-400 mb-1">📞 +91 (9361381484) </p>
              {/* Email */}
              <p className="text-gray-50 mb-1">✉️ sriramsivakumar200306@gmail.com</p>
            </div>
          </div>
        </div>)}
        <div className="w-[24%] sm:w-[13%] hover:p-2 hover:scale-105 hover:shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out transform ">
              <a href="https://drive.google.com/file/d/1Zh2VmnNhORRkC-dles0TjWn9ORBkmF3Y/view?usp=sharing">
                <img src={r1}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
