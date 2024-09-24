import {React,useEffect,useState} from "react";
import fullscreen from "./assets/fullscreen.png";
import whatsapp from "./assets/whatsapp.jpg";
import linkedin from "./assets/linkedin.png";
import git from "./assets/git.png";
import project from "./assets/project.png";
import certify from "./assets/certificate.png";
import { Link } from "react-router-dom";
import feedback from "./assets/feedback.png";


function Icon() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const auto = () => {
    // Check if the document is in fullscreen mode
    if (document.fullscreenElement) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    // Call auto on initial mount
    auto();

    // Add an event listener for fullscreen change
    const handleFullscreenChange = () => {
      auto();
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);


  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        // Safari
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        // IE11
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        // Safari
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE11
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };


  return (
    <div className="flex w-[50%] ">
      {!isFullscreen&&<div className="fixed h-[10%] w-[100%]  flex justify-around items-center ">
          <div className="bg-white bg-opacity-35 text-white p-4 rounded shadow-lg text-center flex  ">
            <p className="text-xs">This Portfolio looks better in FullScreen</p>
            <button className="bg-gradient-to-r from-violet-700 to-purple-500 w-[30%] rounded-md" onClick={toggleFullscreen}>ok</button>
          </div>
        </div>}
      
      <div className="w-full h-auto mt-5 text-gray-50 text-xs md:text-sm ">
      {/* Container for icons with auto-wrap functionality */}
      <div
        className="flex flex-col items-start gap-3 mx-5 flex-wrap"
      >
        <div className="flex flex-col items-center space-y-2 ">
          <div onClick={toggleFullscreen} className="cursor-pointer z-20">
            <img
              className="w-16 sm:w-12"
              src={fullscreen}
              alt="Fullscreen Icon"
            />
            {isFullscreen?<span className="text-center">Minimize</span>:<span className="text-center">FullScreen</span>}
            
          </div>
        </div>
        

        <div className="flex flex-col items-center space-y-2">
          <a href={`https://wa.me/9361381484?text=Hai Sri !`} className="cursor-pointer">
            <img
              className="w-16 sm:w-12 rounded-xl"
              src={whatsapp}
              alt="WhatsApp Icon"
            />
            <span className="text-center">WhatsApp</span>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <a href="https://www.linkedin.com/in/sriram-s-00799822a/" className="cursor-pointer">
            <img
              className="w-16 sm:w-12"
              src={linkedin}
              alt="LinkedIn Icon"
            />
            <span className="text-center">LinkedIn</span>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <a href="https://github.com/Sriram-S-29" className="cursor-pointer">
            <img
              className="w-16 sm:w-12"
              src={git}
              alt="GitHub Icon"
            />
            <span className="text-center">GitHub</span>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-2 hover:animate-pulse">
          <Link to="/project" className="cursor-pointer">
            <img
              className="w-16 sm:w-12"
              src={project}
              alt="Project Icon"
            />
            <span className="text-center">Project</span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 hover:animate-pulse">
          <Link to="/certificate" className="cursor-pointer">
            <img
              className="w-16 sm:w-12"
              src={certify}
              alt="Certification Icon"
            />
            <span className="text-center">Certification</span>
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 hover:animate-pulse">
          <Link to="/feedback" className="cursor-pointer">
            <img
              className="w-16 sm:w-12"
              src={feedback}
              alt="Feedback Icon"
            />
            <span className="text-center">Feedback</span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Icon;
