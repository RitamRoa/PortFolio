import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const characters = title.innerText.split('');
    title.innerHTML = '';
    
    characters.forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      span.style.transitionDelay = `${index * 0.05}s`;
      title.appendChild(span);
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
    });
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[#0a0f1c]">
        {/* Matrix-like animation in the background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 text-blue-400 animate-matrix-text">
            01001100 01001111 01010010 01000101 01001101
          </div>
          <div className="absolute top-0 left-2/4 text-purple-400 animate-matrix-text animation-delay-300">
            10101010 11001100 10101010 11001100
          </div>
          <div className="absolute top-0 left-3/4 text-blue-400 animate-matrix-text animation-delay-700">
            01001100 01001111 01010010 01000101 01001101
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/80 to-[#0a0f1c]"></div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 ref={titleRef} className="font-display text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Ritam Rao
        </h1>
        <p className="font-display text-xl md:text-2xl text-gray-300 mb-12 opacity-0 transform translate-y-8 animate-fadeIn">
          Computer Science Engineer & Part-time Game Developer
        </p>
        
        <div className="flex justify-center space-x-8 mb-16 opacity-0 transform translate-y-8 animate-fadeIn animation-delay-300">
          <a 
            href="https://github.com/RitamRoa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0a0f1c]/50 backdrop-blur-sm hover:bg-blue-500/20 p-4 rounded-xl transition-all duration-300 hover:scale-110 tech-border group"
            aria-label="GitHub"
          >
            <Github size={28} className="text-blue-400 group-hover:text-white transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ritam-rao-86503a2b6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0a0f1c]/50 backdrop-blur-sm hover:bg-purple-500/20 p-4 rounded-xl transition-all duration-300 hover:scale-110 tech-border group"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="text-purple-400 group-hover:text-white transition-colors" />
          </a>
        </div>
        
        <a
          href="#about"
          className="inline-block animate-bounce mt-8 text-blue-400 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} />
        </a>
      </div>
    </section>
  );
};

export default Hero;