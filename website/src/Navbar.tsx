import React from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Navbar({
  darkMode,
  mobileMenuOpen,
  toggleDarkMode,
  toggleMobileMenu,
}: {
  darkMode: boolean
  mobileMenuOpen: boolean
  toggleDarkMode: () => void
  toggleMobileMenu: () => void
}) {
  return (
    <nav
      className={`${
        darkMode ? "bg-slate-800 shadow-slate-700/30" : "bg-white shadow-sm"
      } fixed w-full z-10 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-500">
              Tomas Roun
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className={`${
                darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600"
              } transition-colors`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`${
                darkMode ? "hover:text-indigo-400" : "hover:text-indigo-600"
              } transition-colors`}
            >
              Projects
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-slate-700 text-yellow-300 hover:bg-slate-600"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              } transition-colors`}
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
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-slate-700 text-yellow-300"
                  : "bg-slate-200 text-slate-700"
              } transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${
                darkMode
                  ? "text-slate-300 hover:text-indigo-400"
                  : "text-slate-700 hover:text-indigo-600"
              } transition-colors`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode
              ? "bg-slate-800 shadow-lg shadow-slate-700/30"
              : "bg-white shadow-lg"
          } transition-colors duration-300`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className={`block px-3 py-2 rounded-md ${
                darkMode
                  ? "hover:bg-slate-700 hover:text-indigo-400"
                  : "hover:bg-indigo-50 hover:text-indigo-600"
              } transition-colors`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`block px-3 py-2 rounded-md ${
                darkMode
                  ? "hover:bg-slate-700 hover:text-indigo-400"
                  : "hover:bg-indigo-50 hover:text-indigo-600"
              } transition-colors`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`block px-3 py-2 rounded-md ${
                darkMode
                  ? "hover:bg-slate-700 hover:text-indigo-400"
                  : "hover:bg-indigo-50 hover:text-indigo-600"
              } transition-colors`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`block px-3 py-2 rounded-md ${
                darkMode
                  ? "hover:bg-slate-700 hover:text-indigo-400"
                  : "hover:bg-indigo-50 hover:text-indigo-600"
              } transition-colors`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
