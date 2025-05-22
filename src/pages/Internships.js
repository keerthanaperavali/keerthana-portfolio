import React from "react";

const internships = [
  {
    company: "Networx",
    role: "Front-End Developer Intern",
    duration: "May 2024 – July 2024",
    description: [
      "Built web applications using  HTML5,CSS5,Bootstrap and basics of  JavaScript.",
      "Improved UI performance and responsiveness across devices.",
      "Participated in daily stand-ups and collaborated using Git.",
    ],
    tech: ["HTML", "CSS","Bootstrap"],
  },
  {
    company: " Suthra Technologies Private Limited",
    role: "Web Developer Intern",
    duration: "June 2024 – Nov 2024",
    description: [
      "Developed real-time projects in a team environment.",
      "Used Bootstrap and Tailwind CSS for responsive design.",
      "Gained exposure to client-side architecture and deployment.",
    ],
    tech: ["React", "Bootstrap", "Tailwind", "JavaScript"],
  },
  // {
  //   company: "Sensen.ai ",
  //   role: "Software developerIntern",
  //   duration: "may 2025 – Present",
  //   description: [
  //     "Worked on preprocessing, training, and evaluating ML models.",
  //     "Used Python, NumPy, Pandas, and scikit-learn.",
  //     "Explored algorithms and applied them to real datasets.",
  //   ],
  //   tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
  // },
];

const Internships = () => {
  return (
<div className="bg-gray-900 flex flex-col items-center justify-center pt-16 pb-8 px-4 sm:pt-20 sm:pb-12 sm:px-6">
      <p className="text-center text-green-500 italic mb-12 sm:mb-16 text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-lg">
        My Internships
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-green-300 mb-2 font-serif">
              {internship.company}
            </h2>
            <p className="text-lg italic text-gray-400 mb-1">{internship.role}</p>
            <p className="text-lg text-gray-500 mb-4">{internship.duration}</p>

            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 space-y-2 mb-5">
              {internship.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {internship.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
