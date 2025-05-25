import React, { useContext } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { AppContext } from "./AppContext"

export default function Navbar({
  mobileMenuOpen,
  toggleMobileMenu,
}: {
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
}) {
  const { isDark, toggleTheme } = useContext(AppContext)

  return (
    <nav className="bg-white shadow-sm dark:bg-slate-800 dark:shadow-slate-700/30 fixed w-full z-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a className="text-xl font-bold text-indigo-500" href="#about">
              Tomas Roun
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full cursor-pointer bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-yellow-300 dark:hover:bg-slate-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Dark mode toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-yellow-300 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-700/30 transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 dark:hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 dark:hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 dark:hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 dark:hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
