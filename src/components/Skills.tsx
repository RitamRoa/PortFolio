import React from 'react';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  
  const skills = [
    { name: 'C / C++', category: 'Languages' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'C#', category: 'Languages' },
    { name: 'React', category: 'Frontend' },
    { name: 'SQL', category: 'Database' },
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          Skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-l-4 border-blue-400 transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            >
              <div className="text-xs text-blue-300 mb-1">{skill.category}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center text-gray-400 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <p>Continuously expanding my knowledge in AI/ML and game development</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;