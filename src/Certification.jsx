import React from 'react'
import hacker from './assets/hackerrank.svg'
import sololearn from  './assets/sololearn.svg'
import jsSolo from './assets/certify/solo.png'
import js1 from './assets/certify/jsInter.png'
import js2 from './assets/certify/jsBasic.png'
import express from './assets/certify/express.jpg'
import mongo from './assets/certify/mongo.jpg'
import { formatTime } from "./function/user.js";
import uiux from './assets/certify/uiux.jpg'
import { Link } from 'react-router-dom'
const licenses = [
    {
      title: "JavaScript ( Intermidiate )",
      platform: "HackerRank",
      date: "Sep 2024",
      image: js1,
      icon: "hackerrank",
    },
    {
        title: "Javascript ( intermediate )",
        platform: "Sololearn",
        date: "Aug 2024",
        image: jsSolo,
        icon: "sololearn",
      },
    {
        title: "Express Js",
        platform: "Great learning",
        date: "jun 2024",
        image: express,
        icon: "greatlearning",
      },
      {
        title: "JavaScript ( Basic )",
        platform: "HackerRank",
        date: "Sep 2024",
        image: js2,
        icon: "hackerrank",
      },
      {
        title: "MongoDb",
        platform: "Great Learning",
        date: "mar 2024",
        image: mongo,
        icon: "greatlearning",
      },
     
      {
        title: "Intro to UI/UX",
        platform: "Great Learning",
        date: "mar 2024",
        image: uiux,
        icon: "greatlearning",
      },
  ]
  
  let hour = formatTime();

  
  const HackerRankIcon = () => (
    <img
    src={hacker}
    alt="HackerRank Icon"
    className="w-8 h-8"
  />
  )
  
  const GreatLearningIcon = () => (
    <img
    src='https://cdn.brandfetch.io/iddg--Bdhe/theme/dark/logo.svg?k=bfHSJFAPEG'
    alt="HackerRank Icon"
    className="w-20 h-8"
  />
  )
  const Sololearn = () => (
    <img
    src={sololearn}
    alt="sololearn Icon"
    className="w-20 h-8"
  />
  )
  
  export default function Certification() {
    return (
        <div className="container flex w-[100%] h-screen flex-col md:w-screen lg:w-screen sm:max-w-screen-2xl">
          <Link to="/">
      <button
        className="fixed z-10 top-8 right-4 w-10 text-white bg-red-500 rounded-full p-2 hover:bg-red-600"
      >
        &times;
      </button>
    </Link>
        <div className="sticky top-0  bg-violet-950 text-teal-50 flex justify-between z-20 ">
          <div className="mx-10 text-1xl font-semibold tracking-wide ">
            <span>Portfolio</span>
          </div>
          <div>
            <p className="font-extralight text-md mx-5">{hour}</p>
          </div>
        </div>
      
        <div className="containe mx-auto px-4 py-8 bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-700 text-teal-50">
          <h1 className="text-4xl font-bold mb-8 text-center tracking-wide">My Licenses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {licenses.map((license, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-lg">
                  <div className="flex items-center justify-between mb-2">
                    {license.icon === "hackerrank" && <HackerRankIcon />}
                    {license.icon === "greatlearning" && <GreatLearningIcon />}
                    {license.icon === "sololearn" && <Sololearn />}
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-700">{license.platform}</p>
                      <p className="text-xs text-gray-500">{license.date}</p>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold mb-2 line-clamp-2 text-gray-800">{license.title}</h2>
                </div>
                <div className="relative h-50 bg-gray-100">
                  <img
                    src={license.image}
                    alt={`${license.title} certificate`}
                    layout="fill"
                    objectFit="contain"
                    className="p-1 rounded-b-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    )
  }