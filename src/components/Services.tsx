import React from 'react';
import { Users, Shield, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-cyan-400" />,
      title: "DevSecOps Training",
      description: "Comprehensive training programs for teams transitioning to DevSecOps practices.",
      features: ["Security Integration", "Best Practices", "Hands-on Labs"],
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "Team Workshops",
      description: "Interactive workshops focused on practical security implementation.",
      features: ["Real-world Scenarios", "Tool Training", "Best Practices"],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-cyan-400" />,
      title: "Freelancing",
      description: "Providing freelance DevSecOps and security consulting services to businesses in need of expertise.",
      features: ["Flexible Hours", "Remote Work", "Security Consulting", "Automation Solutions"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-slate-700/30 rounded-lg shadow-lg hover:bg-slate-700/50 transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="mt-auto space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
