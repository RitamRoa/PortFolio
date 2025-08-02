import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;