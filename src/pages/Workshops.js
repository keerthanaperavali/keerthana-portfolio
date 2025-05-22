import React, { useState } from "react";

const workshops = [
  {
    title: "Data Visualization Workshop",
    location: "PSCMRCET-Vijayawada",
    image: "/tableau workshop.jpg",
    description:
      "Delivered a 3-day workshop on Tableau covering basics of data visualization.",
    duration: "1st Aug 2024 - 3rd Aug 2024",
  },
  {
    title: "fundamentals of HTML,css Workshop",
    location: "PSCMRCET-vijayawada",
    image: "/webdevelopment-jr.jpg",
    description:
      "Conducted a 5-day hands-on workshop on HTML, CSS, Bootstrap for building static websites.",
    duration: "27th Sep 2024 - 1st Oct 2024",
  },
  {
    title: "Web-Development Workshop",
    location: "PSCMRCET-Vijayawada",
    image: "/webdevelopment-sr.jpg",
    description:
      "Conducted a  hands-on workshop on HTML, CSS, Bootstrap  and java script for building static websites.",
    duration: "21th dec 2024 - 24th dec 2024",
  },
];

const WorkshopShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="py-8 px-6 max-full mx-auto   relative"
      style={{
        backgroundColor: "#0f172a",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "6rem", // Adjust to your navbar height
      }}
    >
<div className="bg-gray-900 flex flex-col items-center justify-center pt-16 pb-8 px-4 sm:pt-20 sm:pb-12 sm:px-6">
      <p className="text-center text-green-500 italic mb-12 sm:mb-16 text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-lg">
        Delivered Workshops
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {workshops.map(({ title, location, image, description, duration }, index) => {
          const isHovered = index === hoveredIndex;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative rounded-3xl cursor-pointer
                bg-gradient-to-r from-green-900 to-green-700
                shadow-lg transition-all duration-300 ease-in-out
                flex items-center justify-center overflow-hidden
                ${isHovered ? "z-50" : "z-10"}
                ${isHovered ? "w-[380px] h-[280px]" : "w-72 h-44"}
                sm:${isHovered ? "w-[440px] h-[320px]" : "w-80 h-48"}
                md:${isHovered ? "w-[500px] h-[360px]" : "w-96 h-52"}
              `}
              style={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                marginTop: isHovered ? "-20px" : "0",
                marginBottom: isHovered ? "-20px" : "0",
                transitionProperty: "all",
              }}
            >
              {/* Background Image */}
              <img
                src={image}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
                  ${isHovered ? "opacity-20" : "opacity-100"}
                `}
                loading="lazy"
              />

              {/* Text content when hovered */}
              <div
                className={`relative z-20 text-white px-6 text-center
                  ${isHovered ? "opacity-100" : "opacity-0"}
                  transition-opacity duration-300`}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
                <p className="italic text-green-300 text-sm sm:text-base mb-1">
                  Location: {location}
                </p>
                <p className="text-white mb-2">{description}</p>
                <p className="text-green-400 text-sm">{duration}</p>
              </div>

              {/* Title label when not hovered */}
              {!isHovered && (
                <div className="absolute bottom-4 left-4 text-black text-sm font-semibold drop-shadow-lg truncate max-w-[80%]">
                  {title}
                </div>
              )}
            </div>
          );
        })}
      </div>


      </div>
    </div>
  );
};

export default WorkshopShowcase;
  