import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:ritamrao48@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 bg-[#0a0f1c] relative overflow-hidden"
    >
      {/* Enhanced background animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0 opacity-5">
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

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-12 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          Get In Touch
        </h2>
        
        <div className={`max-w-3xl mx-auto tech-border bg-[#0a0f1c]/90 backdrop-blur-sm rounded-xl p-8 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-full tech-border">
              <Mail size={28} className="text-blue-400" />
            </div>
          </div>
          
          <p className="text-center text-gray-300 mb-8 font-display relative">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Have a question or want to work together? Feel free to reach out!
            </span>
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 font-display group-hover:text-blue-400 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0f1c]/60 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 text-white font-display transition-all duration-300 placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 font-display group-hover:text-blue-400 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0f1c]/60 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 text-white font-display transition-all duration-300 placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 font-display group-hover:text-blue-400 transition-colors">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#0a0f1c]/60 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 text-white font-display transition-all duration-300 resize-none placeholder-gray-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 rounded-lg font-display text-lg font-bold shadow-md hover:from-blue-500 hover:to-purple-600 transition-all duration-300 tech-border group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Send size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;