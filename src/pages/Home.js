import React from "react";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import backgroundImage from "../assets/keerthana.jpg";
import profileImage from "../assets/keerthana-home.jpg";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0f1a] text-white overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-contain z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Main Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between min-h-screen max-w-[1200px] mx-auto pt-24 md:pt-32 gap-10 px-4 sm:px-6">
        {/* Left Panel */}
        <div className="flex-1 w-full max-w-md md:max-w-lg p-4 sm:p-6 sticky top-24 self-start">
          <h4 className="text-gray-300 text-xl sm:text-2xl mb-4">Hello, I'm</h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-green-500 mb-6">
            Peravali Keerthana
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            Web Developer | Data Analyst | Front-End Enthusiast
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 max-w-lg text-justify">
            Passionate about crafting clean, responsive websites and transforming raw data into meaningful insights. Currently pursuing B.Tech in CSE (Data Science) and building real-world web projects using React, Tailwind, and Tableau.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-green-500 text-black px-5 py-3 rounded-full font-medium hover:bg-green-600 transition"
            >
              Let's Talk
            </button>

            <a
              href="/Peravali-Keerthana_resume (1).pdf"
              download
              className="flex items-center gap-2 text-gray-200 hover:text-green-400"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-start gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/peravali-keerthana-85a30525a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:scale-110 hover:bg-green-500 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/keerthanaperavali"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:scale-110 hover:bg-green-500 transition"
            >
              <FaGithub size={22} />
            </a>
          </div>


          {/* Quick Tech Stack or Quote Section */}
<div className="mt-10 text-gray-300 text-sm sm:text-base">
  <h3 className="font-semibold text-green-200 mb-2">Driven by curiosity and creativity, I enjoy turning ideas into impactful experiences and growing through collaboration and innovation.</h3>

</div>

        </div>

        {/* Right Panel - Responsive Hex Image */}
        <div className="flex justify-center items-center w-full md:w-[384px] h-auto relative">
          <div className="w-64 h-64 md:w-96 md:h-96">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
                  <polygon points="0.25,0 0.75,0 1,0.5 0.75,1 0.25,1 0,0.5" />
                </clipPath>
              </defs>
              <g clipPath="url(#hexagon-clip)">
                <image
                  href={profileImage}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                />
                <polygon
                  points="25,0 75,0 100,50 75,100 25,100 0,50"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
