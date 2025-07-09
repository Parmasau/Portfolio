import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram, Twitter, Phone, Facebook } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Full Background Image with Enhanced Styling */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/92e3217e-9613-40a1-95a0-2630d75bbc09.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          objectFit: 'cover'
        }}
      >
        {/* Enhanced gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        
        {/* Additional subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-indigo-400/15 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent animate-scale-in drop-shadow-2xl">
            Hi, I'm <span className="animate-pulse bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Nick</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in delay-300 drop-shadow-lg">
            Designer & Developer | Creative Problem Solver
          </p>
          <p className="text-lg text-gray-100 mb-12 max-w-2xl mx-auto animate-fade-in delay-500 drop-shadow-md">
            I craft beautiful, functional web experiences that bring ideas to life. 
            Passionate about clean code, innovative design, and user-centered solutions.
          </p>
          
          {/* Social Links - Updated with proper URLs */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-700">
            <a 
             href="https://github.com/parmasau"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/ParmasauNchoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-blue-300" />
            </a>
            <a 
              href="mailto:nickparmasau@gmail.com" 
              className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-red-300" />
            </a>
            <a 
              href="https://instagram.com/parmasaunick" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-pink-300" />
            </a>
            <a 
              href="https://twitter.com/ParmasauN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-sky-300" />
            </a>
            <a 
              href="tel:+254706709332" 
              className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="Phone"
            >
              <Phone className="w-6 h-6 text-green-300" />
            </a>
            <a 
              href="https://facebook.com/nickparmasau" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border border-white/20"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-blue-400" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1000">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm border border-purple-400/30"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/80 text-white rounded-full font-semibold hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-300 shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" />
      </button>
    </section>
  );
};

export default Hero;