import React, { useState } from 'react';
import { Calendar, Award, Briefcase, GraduationCap, ExternalLink, X, ArrowDown, Download } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Journey = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const [showFullJourney, setShowFullJourney] = useState(false);

  const handleDownloadLetter = () => {
    const link = document.createElement('a');
    link.href = '/Ritam Rao Internship Completion Letter.pdf';
    link.download = 'Ritam Rao Internship Completion Letter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const journeyItems = [
    {
      id: 1,
      title: 'RV University B.TECH (H)',
      subtitle: 'Computer Science and Engineering',
      period: 'Sept 2024 - August 2028',
      status: 'Currently in 1st Year',
      icon: GraduationCap,
      type: 'education',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Internship at ZANS',
      subtitle: 'Software Development Intern',
      period: 'June 2025 - July 2025',
      status: '2 months',
      icon: Briefcase,
      type: 'experience',
      color: 'from-green-500 to-emerald-500',
      hasDownload: true
    },
    {
      id: 3,
      title: 'ICSSR Grant Project',
      subtitle: 'Karnataka Police Officers Development App had won ₹18 Lakhs Grant',
      period: '2025',
      status: 'Achievement',
      icon: Award,
      type: 'achievement',
      color: 'from-purple-500 to-pink-500'
    }
  ];

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
      description: 'Completed a comprehensive 2-month internship at ZANS, working on real-world software development projects. Gained hands-on experience with modern development practices, team collaboration, and project management.',
      period: '1st June 2025 - 31st July 2025',
      status: '2 Months Duration',
      icon: Briefcase,
      type: 'Professional Experience',
      color: 'from-green-500 to-emerald-500',
      hasDownload: true,
      achievements: [
        'Worked on production-level software applications',
        'Collaborated with senior developers and learned best practices',
        'Implemented features using modern web technologies',
        'Participated in code reviews and agile development processes'
      ]
    },
    {
      id: 3,
      title: 'ICSSR Grant Project - Major Achievement',
      subtitle: 'Karnataka Police Officers Development App',
      description: 'Successfully built and implemented a comprehensive application for the holistic development of Karnataka Police Officers. This project was awarded an impressive ₹18 Lakhs grant from ICSSR, recognizing its potential impact and innovative approach.',
      period: '2025',
      status: '₹18 Lakhs Grant Winner',
      icon: Award,
      type: 'Major Achievement',
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Designed and developed a comprehensive training platform',
        'Won ₹18 Lakhs ICSSR Grant for the project',
        'Created solutions for holistic police officer development',
        'Implemented features for skill assessment and training modules',
        'Collaborated with Karnataka Police Department stakeholders'
      ]
    }
  ];

  return (
    <section 
      id="journey" 
      ref={ref}
      className="py-20 bg-gradient-to-br from-[#0a0f1c] via-[#0f1419] to-[#0a0f1c] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          My Journey
        </h2>

        {/* Journey Timeline - Mobile and Desktop */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 rounded-full"></div>
            
            {journeyItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={item.id}
                  className={`relative flex items-center mb-12 md:mb-16 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Desktop Layout */}
                  <div className={`hidden md:flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className={`bg-gradient-to-br ${item.color} p-0.5 rounded-xl group hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}>
                        <div className="bg-[#0a0f1c] p-6 rounded-xl h-full">
                          <div className="flex items-center justify-between mb-3">
                            <div className={`flex items-center gap-2 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                              <Icon size={20} className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                              <span className="text-xs text-gray-400 font-display uppercase tracking-wider">
                                {item.type}
                              </span>
                            </div>
                          </div>
                          <h3 className="font-display text-lg font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-2 font-display">
                            {item.subtitle}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                            <Calendar size={12} />
                            <span>{item.period}</span>
                          </div>
                          <div className={`flex items-center gap-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                              {item.status}
                            </span>
                            {item.hasDownload && (
                              <button
                                onClick={handleDownloadLetter}
                                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/30 hover:border-blue-500/50`}
                              >
                                <Download size={12} />
                                Certificate
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-2/12 flex justify-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} relative z-10 ring-4 ring-[#0a0f1c]`}></div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="w-5/12"></div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden w-full">
                    <div className={`bg-gradient-to-br ${item.color} p-0.5 rounded-xl group hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}>
                      <div className="bg-[#0a0f1c] p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Icon size={20} className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                            <span className="text-xs text-gray-400 font-display uppercase tracking-wider">
                              {item.type}
                            </span>
                          </div>
                        </div>
                        <h3 className="font-display text-lg font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2 font-display">
                          {item.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                          <Calendar size={12} />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                            {item.status}
                          </span>
                          {item.hasDownload && (
                            <button
                              onClick={handleDownloadLetter}
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/30 hover:border-blue-500/50"
                            >
                              <Download size={12} />
                              Certificate
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Full Journey Button */}
        <div className={`flex justify-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <button 
            onClick={() => setShowFullJourney(true)}
            className="group inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 text-blue-400 hover:text-blue-300 px-8 py-3 rounded-lg transition-all duration-300 font-display font-medium border border-blue-500/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
          >
            View Full Journey
            <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Full Journey Modal */}
      {showFullJourney && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0f1c] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-blue-500/20">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="font-display text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Complete Journey
              </h2>
              <button
                onClick={() => setShowFullJourney(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 rounded-full"></div>
                
                {fullJourneyItems.map((item, index) => {
                  const Icon = item.icon;
                  
                  return (
                    <div key={item.id} className="relative mb-12 ml-16">
                      {/* Timeline dot */}
                      <div className="absolute -left-11 top-6">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} relative z-10 ring-4 ring-[#0a0f1c] flex items-center justify-center`}>
                          <Icon size={14} className="text-white" />
                        </div>
                      </div>

                      {/* Content Card */}
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
                          
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                              {item.status}
                            </span>
                            {item.hasDownload && (
                              <button
                                onClick={handleDownloadLetter}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/30 hover:border-blue-500/50"
                              >
                                <Download size={12} />
                                Download Certificate
                              </button>
                            )}
                          </div>
                          
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

                      {/* Arrow connector */}
                      {index < fullJourneyItems.length - 1 && (
                        <div className="flex justify-center mt-8">
                          <ArrowDown size={24} className="text-gray-500" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Journey;
