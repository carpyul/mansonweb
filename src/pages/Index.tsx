import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              BA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors cursor-pointer">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors cursor-pointer">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors cursor-pointer">Skills</a>
              <a href="#services" className="hover:text-blue-400 transition-colors cursor-pointer">Services</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors cursor-pointer">Portfolio</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors cursor-pointer">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Visual Content
                </span>
                <br />
                <span className="text-white">Creator & Designer</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-8 max-w-lg animate-fade-in animation-delay-200 leading-relaxed">
                Transforming voice-overs into compelling visuals. Bridging creativity and code to tell your story through multimedia experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in animation-delay-400">
                <Button onClick={() => scrollToSection('portfolio')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 text-lg">
                  View My Work
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-slate-600 hover:bg-slate-800 px-8 py-3 text-lg text-slate-50">
                  Get In Touch
                </Button>
              </div>
              
              <div className="flex space-x-6 animate-fade-in animation-delay-600">
                <a href="mailto:burrell@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/burrell" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/burrell" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column - Professional Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-800">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
                
                {/* Main image container */}
                <div className="relative z-10 w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-800">
                    <img alt="Burrell Alejandro - Visual Content Creator" className="w-full h-full object-cover" src="https://i.imgur.com/xfRf4Ww.jpeg" />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-8 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-16 -right-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Multimedia engineering technology student at Batam State Polytechnic | Expected Graduation 2026. 
                I have experience in Unity game development, Blender 3D asset creation, VR interaction, and visual storytelling.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Currently at MagnetesMedia, I craft visual content for educational YouTube videos using motion graphics, 
                screen simulation, and minimal 3D visuals.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Blender', 'Adobe Suite', 'Unity', 'Figma'].map(tool => <div key={tool} className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-slate-300">{tool}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/50">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Education</h3>
                <h4 className="font-medium">Batam State Polytechnic</h4>
                <p className="text-slate-400">Multimedia Engineering Technology</p>
                <p className="text-slate-500">Expected 2026</p>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/50">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Current Role</h3>
                <h4 className="font-medium">Visual Content Creator</h4>
                <p className="text-slate-400">MagnetesMedia</p>
                <p className="text-slate-500">May 2024 – Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-400">Creative</h3>
              <div className="space-y-6">
                {[{
                skill: 'Motion Graphic Design',
                level: 90
              }, {
                skill: '3D Design (Blender)',
                level: 85
              }, {
                skill: 'Video Production',
                level: 88
              }, {
                skill: 'UI/UX Design',
                level: 80
              }].map(item => <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">{item.skill}</span>
                      <span className="text-slate-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000" style={{
                    width: `${item.level}%`
                  }}></div>
                    </div>
                  </div>)}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-purple-400">Technical</h3>
              <div className="space-y-6">
                {[{
                skill: 'Blender',
                level: 85
              }, {
                skill: 'Adobe Suite',
                level: 90
              }, {
                skill: 'Unity',
                level: 75
              }, {
                skill: 'Figma',
                level: 80
              }].map(item => <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">{item.skill}</span>
                      <span className="text-slate-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all duration-1000" style={{
                    width: `${item.level}%`
                  }}></div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            What I Offer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: 'Motion Graphics',
            description: 'Creating engaging animated content for videos and digital media',
            icon: '🎬'
          }, {
            title: '3D Visualization',
            description: 'Developing stunning 3D models and animations using Blender',
            icon: '🎯'
          }, {
            title: 'Interactive Media',
            description: 'Building immersive VR experiences and Unity applications',
            icon: '🚀'
          }].map(service => <div key={service.title} className="bg-slate-700/30 rounded-lg p-8 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </h2>
          
          <div className="mb-8 flex justify-center">
            <div className="flex space-x-4 bg-slate-800 rounded-lg p-1">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md">All Projects</button>
              <button className="px-6 py-2 text-slate-400 hover:text-white transition-colors">Academic</button>
              <button className="px-6 py-2 text-slate-400 hover:text-white transition-colors">Professional</button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: 'The Dark Truth About PayPal',
            category: 'Professional',
            description: 'Motion graphics and visual storytelling for educational content',
            image: '🎬'
          }, {
            title: 'Mahakarya VR Game',
            category: 'Academic',
            description: 'Core Unity development for VR gaming experience',
            image: '🎮'
          }, {
            title: 'Virginia 3D Advertisement',
            category: 'Professional',
            description: '3D modeling and LRC for advertising campaign',
            image: '🎯'
          }, {
            title: 'Citizen Complaint Website',
            category: 'Academic',
            description: 'UI Design focused on public accessibility',
            image: '💻'
          }, {
            title: 'Arduino Unity Fishing Game',
            category: 'Academic',
            description: 'Game design with Arduino hardware integration',
            image: '🎣'
          }, {
            title: 'UMKM Bulletin Video',
            category: 'Academic',
            description: 'Video shooting, editing, and motion graphics',
            image: '📹'
          }].map(project => <div key={project.title} className="bg-slate-700/30 rounded-lg overflow-hidden border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <span className="text-xs text-blue-400 font-medium">{project.category}</span>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm">{project.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-slate-300 mb-8">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>burrell@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 text-blue-400">📱</span>
                  <span>+6282133344576</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span>linkedin.com/in/burrell</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Burrell Alejandro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;