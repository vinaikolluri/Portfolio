import React from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-cyan-400" />
          <span className="text-xl font-bold text-white">DevSecOps</span>
        </div>
        <div className="flex gap-6">
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
      </div>
    </nav>
  );
}