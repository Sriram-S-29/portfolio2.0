import React from "react";
import { formatTime } from "./function/user.js";
import pro1 from "./assets/Project/pro5.png";
import pro2 from "./assets/Project/pro2.png";
import pro3 from "./assets/Project/pro3.png";

const projects = [
    {
      title: "BloodShare Hub",
      category: "College Mini Project",
      platform: "Designed for Web",
      image:pro1,
      href:"https://github.com/Sriram-S-29/Bloodshare_Hub1",
      color: "bg-emerald-400",
    },
    {
      title: "Inventry for Exam cell ( Ongoing)",
      category: "Support",
      platform: "Mern",
      image:pro2,
 
      color: "bg-blue-400",
    },
    {
      title: "Portfolio",
      category: "Business",
      platform: "HTML CSS JS",

      color: "bg-amber-400",
    },
    {
      title: "Quote Generator",
      category: "Practice",
      platform: "Javascript",
      href:"https://github.com/Sriram-S-29/Quote_generator",
      image:pro3,
      color: "bg-orange-400",
    },
  ]

function Project() {
  let hour = formatTime();
  return (
    <div className="bg-white w-screen h-screen">
      <div className="bg-violet-900  text-teal-50 flex justify-between px-2 sticky top-0 z-20">
        <div className="mx-10">
          <span>Portfolio</span>
        </div>
        <div>
          <p className="font-extralight">{hour}</p>
        </div>
      </div>
      {/* Main */}
      <div className="mx-auto px-4 py-8  bg-white">
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>
      <hr className="my-6"></hr>
      <div className=" animate-zoomIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-600">{project.category}</p>
                  <p className="text-xs text-gray-500">{project.platform}</p>
                </div>
                <a variant="outline" size="sm" href={project.href} className="text-blue-500 border px-7 rounded border-blue-500">
                  See
                </a>
              </div>
            </div>
            <div className="relative h-48">
            <img
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-b-lg"
              />
              
              <div
                className={`absolute top-2 left-2 ${project.color} text-white text-xs font-bold py-1 px-2 rounded-full`}
              >
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Project;
