import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'; // Import social media icons

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>kollurivinaichowdary@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+91 8008258425</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-6">
              <a href="https://github.com/vinaikolluri" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/vinai-kolluri/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="bg-slate-700/30 p-6 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-slate-600 border border-slate-500 text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
