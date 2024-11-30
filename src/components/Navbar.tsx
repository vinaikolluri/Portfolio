import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  // State to handle the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-cyan-400" />
          <span className="text-xl font-bold text-white">DevSecOps</span>
        </div>

        {/* Menu Section (Desktop) */}
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

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu} // Toggle mobile menu on click
            className="text-gray-300 hover:text-cyan-400"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur-sm text-gray-300 space-y-4 py-4 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        {['Home', 'About', 'Skills', 'Services', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block text-center hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(false)} // Close the menu after clicking an item
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
