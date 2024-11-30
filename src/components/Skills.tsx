import React from 'react';
import { Code2, Cloud, Lock, Server, Shield, Database, Terminal, GitBranch, Box } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      name: "CI/CD Pipeline Security"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      name: "Cloud Security (AWS/Azure/GCP)"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      name: "Application Security"
    },
    {
      icon: <Server className="h-6 w-6" />,
      name: "Infrastructure as Code"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      name: "Security Automation"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      name: "Java & Spring Boot"
    },
    {
      icon: <Database className="h-6 w-6" />,
      name: "Database Management"
    },
    {
      icon: <Box className="h-6 w-6" />,
      name: "Containerization"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skill Set</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-700/30 p-6 rounded-lg group hover:bg-slate-700/50 transition-colors">
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
