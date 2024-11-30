import React from 'react';
import { Award, Users } from 'lucide-react';
import PortfolioImage from '../assets/Portfolio.png'; // Importing the local image

export default function About() {
  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-cyan-400" />,
      title: "3+ Years Experience",
      description: "In DevSecOps & Development",
    },
    {
      icon: <Users className="h-6 w-6 text-cyan-400" />,
      title: "Experience with Innovative Startups",
      description:
        "Collaborated with startups such as CX100 and RJAY Technologies, contributing to growth and innovation.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center underline decoration-cyan-400 decoration-4 underline-offset-8">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center">
            <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 p-1 shadow-2xl">
              <img
                src={PortfolioImage}
                alt="Professional headshot"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Decorative bubble elements */}
              <div className="absolute top-[-20px] left-[-20px] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-cyan-500 opacity-40 animate-pulse"></div>
              <div className="absolute bottom-[-30px] right-[-30px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-indigo-400 opacity-30 animate-bounce"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">
              Hello! I'm <strong className="text-cyan-400">Vinai Kolluri</strong>,
              a dedicated DevSecOps engineer with over 3+ years of experience.
              I specialize in seamlessly integrating security into development workflows and optimizing CI/CD pipelines to enhance operational efficiency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg shadow-lg hover:bg-slate-700 hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <div className="flex items-center mb-2">
                    {item.icon}
                    <h3 className="text-white font-semibold ml-2">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mt-4 italic text-sm sm:text-base lg:text-lg">
            “Integrating security into the DevOps lifecycle for resilient systems.”
          </p>
        </div>
      </div>
    </section>
  );
}
