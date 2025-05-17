import React from "react"
import { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, Menu, X, Moon, Sun } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  
  // Initialize darkMode based on user preference or system preference
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
  }, []);

  // Update classList and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleContactSubmit = () => {
    console.log('Contact form submitted', { contactName, contactEmail, contactMessage });
    // In a real application, you would handle the form submission here
    
    // Reset fields
    setContactName('');
    setContactEmail('');
    setContactMessage('');
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'} font-sans transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-slate-800 shadow-slate-700/30' : 'bg-white shadow-sm'} fixed w-full z-10 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-500">Alex Morgan</span>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>About</a>
              <a href="#skills" className={`${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Skills</a>
              <a href="#projects" className={`${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Projects</a>
              <a href="#contact" className={`${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Contact</a>
              
              {/* Dark mode toggle */}
              <button 
                onClick={toggleDarkMode} 
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 text-yellow-300 hover:bg-slate-600' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'} transition-colors`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Dark mode toggle for mobile */}
              <button 
                onClick={toggleDarkMode} 
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 text-yellow-300' : 'bg-slate-200 text-slate-700'} transition-colors`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button onClick={toggleMobileMenu} className={`p-2 rounded-md ${darkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-600'} transition-colors`}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-slate-800 shadow-lg shadow-slate-700/30' : 'bg-white shadow-lg'} transition-colors duration-300`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className={`block px-3 py-2 rounded-md ${darkMode ? 'hover:bg-slate-700 hover:text-indigo-400' : 'hover:bg-indigo-50 hover:text-indigo-600'} transition-colors`}>About</a>
              <a href="#skills" className={`block px-3 py-2 rounded-md ${darkMode ? 'hover:bg-slate-700 hover:text-indigo-400' : 'hover:bg-indigo-50 hover:text-indigo-600'} transition-colors`}>Skills</a>
              <a href="#projects" className={`block px-3 py-2 rounded-md ${darkMode ? 'hover:bg-slate-700 hover:text-indigo-400' : 'hover:bg-indigo-50 hover:text-indigo-600'} transition-colors`}>Projects</a>
              <a href="#contact" className={`block px-3 py-2 rounded-md ${darkMode ? 'hover:bg-slate-700 hover:text-indigo-400' : 'hover:bg-indigo-50 hover:text-indigo-600'} transition-colors`}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero section */}
      <section id="about" className="pt-24 pb-16 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="flex-1 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Alex Morgan</h1>
              <h2 className="text-2xl md:text-3xl text-indigo-500 font-medium mb-6">Full Stack Developer</h2>
              <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-8 max-w-xl transition-colors duration-300`}>
                I build scalable web applications with modern technologies. 
                Passionate about crafting clean code and creating intuitive user experiences.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#contact" 
                  className={`px-6 py-3 ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-md transition-colors`}
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className={`px-6 py-3 border ${darkMode ? 'border-indigo-500 text-indigo-400 hover:bg-indigo-900/30' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'} rounded-md transition-colors`}
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className={`w-64 h-64 rounded-full ${darkMode ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} flex items-center justify-center text-6xl font-bold transition-colors duration-300`}>
                AM
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills section */}
      <section id="skills" className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-6 ${darkMode ? 'bg-slate-700' : 'bg-indigo-50'} rounded-lg transition-colors duration-300`}>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} transition-colors duration-300`}>Frontend</h3>
              <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-300`}>
                <li>TypeScript / JavaScript</li>
                <li>React & React Native</li>
                <li>Next.js</li>
                <li>Redux / Context API</li>
                <li>CSS3 / Tailwind / Styled Components</li>
              </ul>
            </div>
            
            <div className={`p-6 ${darkMode ? 'bg-slate-700' : 'bg-indigo-50'} rounded-lg transition-colors duration-300`}>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} transition-colors duration-300`}>Backend</h3>
              <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-300`}>
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>MongoDB / PostgreSQL</li>
              </ul>
            </div>
            
            <div className={`p-6 ${darkMode ? 'bg-slate-700' : 'bg-indigo-50'} rounded-lg transition-colors duration-300`}>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} transition-colors duration-300`}>Tools & Practices</h3>
              <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'} transition-colors duration-300`}>
                <li>Git / GitHub</li>
                <li>Docker / CI/CD</li>
                <li>AWS / Azure</li>
                <li>Test-Driven Development</li>
                <li>Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured projects section */}
      <section id="projects" className="py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`${darkMode ? 'bg-slate-800 shadow-slate-700/30' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
              <div className={`h-48 ${darkMode ? 'bg-slate-700' : 'bg-indigo-100'} rounded-md mb-4 flex items-center justify-center ${darkMode ? 'text-indigo-400' : 'text-indigo-400'} transition-colors duration-300`}>
                Project Preview
              </div>
              <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-4 transition-colors duration-300`}>
                A full-stack e-commerce solution with React, Node.js, and MongoDB. 
                Features include user authentication, product filtering, and payment integration.
              </p>
              <div className="flex gap-2">
                <span className={`px-3 py-1 ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} text-sm rounded-full transition-colors duration-300`}>React</span>
                <span className={`px-3 py-1 ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} text-sm rounded-full transition-colors duration-300`}>Node.js</span>
                <span className={`px-3 py-1 ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} text-sm rounded-full transition-colors duration-300`}>MongoDB</span>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-slate-800 shadow-slate-700/30' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
              <div className={`h-48 ${darkMode ? 'bg-slate-700' : 'bg-indigo-100'} rounded-md mb-4 flex items-center justify-center ${darkMode ? 'text-indigo-400' : 'text-indigo-400'} transition-colors duration-300`}>
                Project Preview
              </div>
              <h3 className="text-xl font-bold mb-2">Task Management App</h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-4 transition-colors duration-300`}>
                A collaborative task management application built with TypeScript, React, and Firebase.
                Features real-time updates, drag-and-drop interface, and team collaboration tools.
              </p>
              <div className="flex gap-2">
                <span className={`px-3 py-1 ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} text-sm rounded-full transition-colors duration-300`}>TypeScript</span>
                <span className={`px-3 py-1 ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} text-sm rounded-full transition-colors duration-300`}>React</span>
                <span className={`px-3 py-1 ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} text-sm rounded-full transition-colors duration-300`}>Firebase</span>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a href="#" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>
              View all projects →
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section id="contact" className="py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="md:flex gap-12">
            <div className="flex-1 mb-10 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-6 transition-colors duration-300`}>
                Feel free to reach out for collaborations, job opportunities, or just to say hi!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-4 transition-colors duration-300`} />
                  <span>alex.morgan@example.com</span>
                </div>
                <div className="flex items-center">
                  <div className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-4 transition-colors duration-300`}>📍</div>
                  <span>Seattle, Washington</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Social Links</h3>
                <div className="flex space-x-4">
                  <a href="#" className={`p-2 ${darkMode ? 'bg-slate-700 text-indigo-400 hover:bg-slate-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'} rounded-full transition-colors duration-300`}>
                    <Github size={24} />
                  </a>
                  <a href="#" className={`p-2 ${darkMode ? 'bg-slate-700 text-indigo-400 hover:bg-slate-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'} rounded-full transition-colors duration-300`}>
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className={`p-2 ${darkMode ? 'bg-slate-700 text-indigo-400 hover:bg-slate-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'} rounded-full transition-colors duration-300`}>
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-1 transition-colors duration-300`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className={`w-full px-4 py-2 border ${darkMode ? 'bg-slate-700 border-slate-600 text-white focus:ring-indigo-500' : 'bg-white border-slate-300 focus:ring-indigo-600'} rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300`}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-1 transition-colors duration-300`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className={`w-full px-4 py-2 border ${darkMode ? 'bg-slate-700 border-slate-600 text-white focus:ring-indigo-500' : 'bg-white border-slate-300 focus:ring-indigo-600'} rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-1 transition-colors duration-300`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className={`w-full px-4 py-2 border ${darkMode ? 'bg-slate-700 border-slate-600 text-white focus:ring-indigo-500' : 'bg-white border-slate-300 focus:ring-indigo-600'} rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleContactSubmit}
                  className={`px-6 py-3 ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-md transition-colors`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
