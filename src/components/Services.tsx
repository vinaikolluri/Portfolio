import React from 'react';
import { Users, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-cyan-400" />,
      title: "DevSecOps Training",
      description: "Comprehensive training programs for teams transitioning to DevSecOps practices.",
      features: ["Security Integration", "Best Practices", "Hands-on Labs"]
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "Team Workshops",
      description: "Interactive workshops focused on practical security implementation.",
      features: ["Real-world Scenarios", "Tool Training", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-700/30 p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
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
