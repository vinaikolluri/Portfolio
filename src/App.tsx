import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Navbar />
      <Hero />
      <div className="flex-grow">
        <About />
        <Skills />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
