import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Blending aesthetics with functionality for exceptional user experiences"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing every detail for lightning-fast, responsive applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Nick Parmasau, a passionate designer and developer with a love for creating 
              digital experiences that make a difference. My journey began with curiosity 
              about design and technology, which has evolved into expertise in both creative 
              and technical domains.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not designing or coding, you'll find me exploring new technologies, 
              participating in tech events, or sharing knowledge with the developer community. 
              I believe in continuous learning and staying at the forefront of design and development.
            </p>
            
            {/* Photo Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/3b1c8f0e-2d4a-4b5c-9f6d-7f8e1c2d3e4f.png" 
                  alt="Nick at tech conference"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/c8d9a196-a439-42ae-b0d8-983b15749a3b.png" 
                  alt="Nick speaking"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Figma', 'UI/UX'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-purple-600 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;