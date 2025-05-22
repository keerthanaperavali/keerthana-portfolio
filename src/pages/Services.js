import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "Skilled in creating responsive web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React. Built real-time projects with focus on clean UI and performance.",
    backgroundImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "MACHINE LEARNING",
    description:
      "Worked on basic ML projects involving data preprocessing, model training, and evaluation using Python, Pandas, NumPy, and scikit-learn.",
    backgroundImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "IOT",
    description:
      "Experienced in developing IoT solutions with sensor integration, real-time data monitoring, and automation using platforms like Arduino, Raspberry Pi, and MQTT.",
    backgroundImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);

  const getServiceAt = (index) => {
    const len = services.length;
    return services[(index + len) % len];
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % services.length);
  };

  const ServiceBox = ({ service }) => (
    <div className="relative flex-1 m-6 p-8 sm:p-10 rounded-4xl cursor-pointer overflow-hidden bg-[#1e293b] shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-4xl hover:rotate-1 hover:z-10 group perspective-1000 w-full max-w-md sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:blur-sm"
        style={{ backgroundImage: `url(${service.backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent transition-colors duration-500 group-hover:from-[#334155]/95" />
      <div className="relative z-20 text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-green-400 group-hover:text-green-300 transition-colors duration-300 mb-4 sm:mb-6 tracking-wide drop-shadow-md">
          {service.title}
        </h2>
        <p className="italic text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
          {service.description}
        </p>
      </div>
    </div>
  );

  return (
<div className="bg-gray-900 flex flex-col items-center justify-center pt-16 pb-8 px-4 sm:pt-20 sm:pb-12 sm:px-6">
      <p className="text-center text-green-500 italic mb-12 sm:mb-16 text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-lg">
        My Services
      </p>

      {/* Mobile & Tablet View: Show all cards */}
      <div className="flex flex-col items-center lg:hidden">
        {services.map((service, idx) => (
          <ServiceBox key={idx} service={service} />
        ))}
      </div>

      {/* Desktop View: Carousel with buttons */}
      <div className="hidden lg:flex items-center justify-center relative w-full">
        <button
          onClick={prev}
          aria-label="Previous Service"
          className="absolute left-2 z-30 p-3 text-green-500 text-4xl hover:text-green-400 hover:scale-110 hover:shadow-lg transition-transform duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <FaChevronLeft />
        </button>

        <div className="flex gap-8 justify-center items-center w-full max-w-6xl px-8">
          <ServiceBox service={getServiceAt(startIndex)} />
          <ServiceBox service={getServiceAt(startIndex + 1)} />
        </div>

        <button
          onClick={next}
          aria-label="Next Service"
          className="absolute right-2 z-30 p-3 text-green-500 text-4xl hover:text-green-400 hover:scale-110 hover:shadow-lg transition-transform duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Services;
