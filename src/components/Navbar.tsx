import React from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-cyan-400" />
          <span className="text-xl font-bold text-white">DevSecOps</span>
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex gap-6">
          {['Home', 'About', 'Skills', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-300 hover:text-cyan-400"
            // Add toggle function here if you want to implement a mobile menu dropdown
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Hidden on larger screens) */}
      <div className="md:hidden bg-slate-900/95 backdrop-blur-sm text-gray-300 space-y-4 py-4">
        {['Home', 'About', 'Skills', 'Services', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block text-center hover:text-cyan-400 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
