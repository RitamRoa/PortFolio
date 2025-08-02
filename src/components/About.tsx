import React from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          About Me
        </h2>
        
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I'm a Computer Science Engineering student at RV University, passionate about solving real-world problems through technology. With a strong foundation in full-stack development and a particular focus on frontend technologies, I approach each project with creativity and precision.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            As an Comp-Sci Engineer, I'm fascinated by how anything and everything related to it. It first started out with me tel-eng project as many of my friends in the campus spoke telugu and i wanted to know what they were saying.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you can find me listening to rock music or developing games as a creative outlet. Made a horror game which is inspired from the youtube series "The Backrooms" by Kane Pixels, which you can check out on my GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;