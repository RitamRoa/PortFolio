import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'JalRakshak',
      description: 'A water conservation platform that empowers communities to solve water issues together. This project focuses on reporting and tracking water-related problems to ensure timely solutions.',
      image: 'https://i.ibb.co/LzWTvYC/jal-rakshak.png',
      liveLink: 'https://jal-rakshak.vercel.app',
      repoLink: 'https://github.com/RitamRoa',
      technologies: ['React', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'Telugu to English Translator',
      description: 'Real-time speech translation application that converts Telugu speech to English text. With over 82 million Telugu speakers worldwide, this tool bridges important communication gaps for Telugu speakers.',
      image: 'https://i.ibb.co/CBtWZsZ/tel-to-eng.png',
      liveLink: 'https://teltoeng.vercel.app/',
      repoLink: 'https://github.com/RitamRoa',
      technologies: ['React', 'Web Speech API', 'Translation API']
    },
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 bg-[#0a0f1c] relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`tech-border bg-[#0a0f1c]/80 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 ' + (index % 2 === 0 ? 'translate-x-0' : '-translate-x-0') 
                  : 'opacity-0 ' + (index % 2 === 0 ? '-translate-x-full' : 'translate-x-full')
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent"></div>
              </div>
              
              <div className="p-6 bg-[#0a0f1c]/90 backdrop-blur-sm">
                <h3 className="font-display text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 font-display text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-md text-xs font-display border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-display text-sm"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-display text-sm"
                  >
                    <Github size={16} className="mr-1" /> Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;