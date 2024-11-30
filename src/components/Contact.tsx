import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_qhwzb6l";
    const templateID = "template_4qr78h5";
    const publicKey = "-dp50qD5PYDo4mFBv";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          query: formData.query,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", query: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Contact Info Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-3">Get In Touch</h2>
          <p className="text-gray-400 mb-5 text-sm">
            I would love to hear from you. Feel free to reach out!
          </p>
          <div className="space-y-2 text-gray-300 text-sm">
            <ContactInfo icon={<Mail />} text="kollurivinaichowdary@gmail.com" />
            <ContactInfo icon={<Phone />} text="+91 8008258425" />
            <ContactInfo icon={<MapPin />} text="Hyderabad, India" />
          </div>
          <SocialLinks />
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-800/80 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-center">Contact</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Your Name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <InputField
              label="Email Address"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            <InputField
              label="Phone Number"
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            <TextAreaField
              label="Your Query"
              id="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Write your message here"
            />
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

// Component for rendering contact information
function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-5 w-5 text-cyan-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

// Component for social media links
function SocialLinks() {
  const links = [
    {
      href: "https://github.com/vinaikolluri",
      icon: <Github />,
    },
    {
      href: "https://www.linkedin.com/in/vinai-kolluri/",
      icon: <Linkedin />,
    },
    {
      href: "https://wa.me/918008258425",
      icon: <MessageCircle />,
    },
  ];

  return (
    <div className="flex gap-2 mt-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-700 hover:bg-cyan-500 transition duration-300"
        >
          <span className="h-4 w-4 text-gray-300 hover:text-white">{link.icon}</span>
        </a>
      ))}
    </div>
  );
}

// Component for input fields
function InputField({ label, id, type, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-400 text-sm mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

// Component for textarea fields
function TextAreaField({ label, id, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-400 text-sm mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows="3"
        className="w-full px-3 py-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
