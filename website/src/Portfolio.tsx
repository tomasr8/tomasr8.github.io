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
              <span className="text-xl font-bold text-indigo-500">Tomas Roun</span>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>About</a>
              <a href="#projects" className={`${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}>Projects</a>
              
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
        {/* <div id="test"></div> */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="flex-1 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Tomas</h1>
              <h2 className="text-2xl md:text-3xl text-indigo-500 font-medium mb-6">Full Stack Developer</h2>
              <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-8 max-w-xl transition-colors duration-300`}>
                I build scalable web applications with modern technologies. 
                Passionate about crafting clean code and creating intuitive user experiences.
              </p>
              <div className="flex gap-4">
                  <a href="#" className={`p-2 ${darkMode ? 'bg-slate-700 text-indigo-400 hover:bg-slate-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'} rounded-full transition-colors duration-300`}>
                    <Github size={24} />
                  </a>
                  <a href="#" className={`p-2 ${darkMode ? 'bg-slate-700 text-indigo-400 hover:bg-slate-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'} rounded-full transition-colors duration-300`}>
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className={`p-2 ${darkMode ? 'bg-slate-700 text-indigo-400 hover:bg-slate-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'} rounded-full transition-colors duration-300`}>
                    <Mail size={24}/>
                  </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className={`w-64 h-64 rounded-full ${darkMode ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} flex items-center justify-center text-6xl font-bold transition-colors duration-300`}>
                <img src="/src/me.jpg" alt="Tomas Roun" className="rounded-full w-64 h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured projects section */}
      <section id="oss" className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Source Contributions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                    Co-maintainer of <a href="https://github.com/indico/indico" target="_blank" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>Indico</a>
                </li>
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                    Contributor to <a href="https://github.com/python/cpython" target="_blank" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>CPython</a>
                </li>
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                    Contributor to <a href="https://github.com/python-babel/babel" target="_blank" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>Babel</a>
                </li>
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                <a href="https://github.com/pycqa/flake8-pyi" target="_blank" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>flake8</a>
                </li>
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                  And many others including ruff, pyodide, ..
                </li>
            </ul>
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

    </div>
  );
}
