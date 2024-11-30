import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Added email field
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_qhwzb6l"; // Replace with your Service ID
    const templateID = "template_4qr78h5"; // Replace with your Template ID
    const publicKey = "-dp50qD5PYDo4mFBv"; // Replace with your Public Key

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email, // Include email in payload
          phone: formData.phone,
          query: formData.query,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", query: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Contact Info */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-3">Get In Touch</h2>
          <p className="text-gray-400 mb-5 text-sm">
            I would love to hear from you. Feel free to reach out!
          </p>
          <div className="space-y-2 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>kollurivinaichowdary@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-cyan-400" />
              <span>+91 8008258425</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <span>Hyderabad, India</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <a
              href="https://github.com/vinaikolluri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition duration-300"
            >
              <Github className="h-4 w-4 text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinai-kolluri/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition duration-300"
            >
              <Linkedin className="h-4 w-4 text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://wa.me/918008258425"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition duration-300"
            >
              <MessageCircle className="h-4 w-4 text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-800/80 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-center">Contact</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-400 text-sm mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="query" className="block text-gray-400 text-sm mb-1">
                Your Query
              </label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                placeholder="Write your message here"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded font-medium text-sm transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
