import React from 'react';
import { Calendar, Award, Briefcase, GraduationCap, ArrowDown, Home } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const FullJourney = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const fullJourneyItems = [
    {
      id: 1,
      title: 'Started B.TECH (H) at RV University',
      subtitle: 'Computer Science and Engineering',
      description: 'Embarked on my journey in Computer Science and Engineering at RV University, one of the premier institutions in Bangalore. Currently pursuing my degree with a focus on software development, AI/ML, and system design.',
      period: 'September 2024 - August 2028',
      status: 'Currently in 1st Year',
      icon: GraduationCap,
      type: 'Education',
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Enrolled in B.TECH (H) Computer Science and Engineering',
        'Active participation in coding competitions',
        'Building foundational knowledge in programming and algorithms'
      ]
    },
    {
      id: 2,
      title: 'Software Development Internship at ZANS',
      subtitle: 'Gained Industry Experience',
      description: 'Completed a comprehensive 2-month internship at ZANS. Gained hands-on experience with modern development practices, team collaboration, and project management.',
      period: '1st June 2025 - 31st July 2025',
      status: '2 Months Duration',
      icon: Briefcase,
      type: 'Professional Experience',
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Contributed to the marketing and sales of the company',
      ]
    },
    {
      id: 3,
      title: 'ICSSR Grant Project',
      subtitle: 'Karnataka Police Officers Development App',
      description: 'Successfully built a comprehensive application for the holistic development of Karnataka Police Officers.',
      period: '2025',
      icon: Award,
      type: 'Major Achievement',
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Designed and developed a assessment/psychometric platform',
        'Created solutions for holistic police officer development',
        'Implemented features for skill assessment and training modules',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0f1419] to-[#0a0f1c] text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Complete Journey
            </h1>
            <a 
              href="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-display"
            >
              <Home size={20} className="mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 rounded-full"></div>
              
              {fullJourneyItems.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={item.id}
                    className={`relative mb-16 transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                    }`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden ml-16">
                      <div className={`bg-gradient-to-br ${item.color} p-0.5 rounded-xl`}>
                        <div className="bg-[#0a0f1c] p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-4">
                            <Icon size={24} className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                            <span className="text-sm text-gray-400 font-display uppercase tracking-wider">
                              {item.type}
                            </span>
                          </div>
                          
                          <h3 className="font-display text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-blue-300 text-sm mb-3 font-display font-medium">
                            {item.subtitle}
                          </p>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                            <Calendar size={14} />
                            <span>{item.period}</span>
                          </div>
                          
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white mb-4`}>
                            {item.status}
                          </span>
                          
                          <div>
                            <h4 className="font-display text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className={`hidden md:flex w-full items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content Card */}
                      <div className={`w-5/12 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
                        <div className={`bg-gradient-to-br ${item.color} p-0.5 rounded-xl`}>
                          <div className="bg-[#0a0f1c] p-8 rounded-xl">
                            <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              <Icon size={24} className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                              <span className="text-sm text-gray-400 font-display uppercase tracking-wider">
                                {item.type}
                              </span>
                            </div>
                            
                            <h3 className="font-display text-xl font-bold text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-blue-300 text-sm mb-3 font-display font-medium">
                              {item.subtitle}
                            </p>
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                              {item.description}
                            </p>
                            
                            <div className={`flex items-center gap-2 text-xs text-gray-400 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              <Calendar size={14} />
                              <span>{item.period}</span>
                            </div>
                            
                            <div className={`mb-4 ${isLeft ? 'text-right' : 'text-left'}`}>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                                {item.status}
                              </span>
                            </div>
                            
                            <div className={isLeft ? 'text-right' : 'text-left'}>
                              <h4 className="font-display text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {item.achievements.map((achievement, idx) => (
                                  <li key={idx} className={`text-xs text-gray-300 flex items-start gap-2 ${isLeft ? 'flex-row-reverse text-right' : 'flex-row'}`}>
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline dot */}
                      <div className="w-2/12 flex justify-center pt-8">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} relative z-10 ring-4 ring-[#0a0f1c] flex items-center justify-center`}>
                          <Icon size={14} className="text-white" />
                        </div>
                      </div>

                      {/* Empty space for alternating layout */}
                      <div className="w-5/12"></div>
                    </div>

                    {/* Mobile timeline dot */}
                    <div className="md:hidden absolute left-6 top-8">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} relative z-10 ring-4 ring-[#0a0f1c] flex items-center justify-center`}>
                        <Icon size={14} className="text-white" />
                      </div>
                    </div>

                    {/* Arrow connector for mobile */}
                    {index < fullJourneyItems.length - 1 && (
                      <div className="md:hidden flex justify-center mt-8">
                        <ArrowDown size={24} className="text-gray-500 animate-bounce" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            This journey continues to evolve with new experiences and achievements.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FullJourney;
