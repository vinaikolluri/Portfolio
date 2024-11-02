import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-900 to-slate-800 relative"
    >
      <div className="container mx-auto px-6 flex">
        <div className="flex-1"> {/* Removed width limit to allow full container usage */}
          <h1 className="text-5xl font-bold text-white mb-6 whitespace-nowrap"> {/* Added whitespace-nowrap */}
            Securing the Future of
            <span className="text-cyan-400"> DevOps</span>
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            In today's fast-paced digital landscape, integrating security into the DevOps process is not just an option—it's a necessity. 
            DevSecOps empowers organizations to identify and mitigate vulnerabilities early in the development lifecycle, ensuring robust security 
            while maintaining agility. By fostering a culture of shared responsibility, we can transform the way teams approach security, 
            making it a fundamental part of their workflows.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Join me in embracing DevSecOps to not only safeguard our applications but to enhance overall productivity and innovation. 
            Together, we can build a resilient future.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500/10 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
