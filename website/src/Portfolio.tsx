import React from "react"
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from 'lucide-react';

import Navbar from "./Navbar";
import About from "./About";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
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

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'} font-sans transition-colors duration-300`}>
      <Navbar
        darkMode={darkMode}
        mobileMenuOpen={mobileMenuOpen}
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
      />
      {/* Hero section */}
      <About darkMode={darkMode} />
      {/* Featured projects section */}
      <section id="oss" className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Source Contributions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="max-w-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                    <a href="https://github.com/indico/indico" target="_blank" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>Indico</a> core developer for the last 4+ years
                </li>
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                    <a href="https://github.com/python/cpython" target="_blank" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>CPython</a> contributor and member of the triage team
                </li>
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                    <a href="https://github.com/python-babel/babel" target="_blank" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>Babel</a> contributor
                </li>
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                <a href="https://github.com/pycqa/flake8-pyi" target="_blank" className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium transition-colors`}>flake8</a> contributor
                </li>
                <li className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-xl transition-colors duration-300`}>
                  And many others including ruff, pyodide, ..
                </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="/src/python.svg"></img>
            <img src="/src/indico.svg"></img>
            <img src="/src/babel.png"></img>
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
