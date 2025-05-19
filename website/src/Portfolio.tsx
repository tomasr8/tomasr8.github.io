import React from "react"
import { useState, useEffect } from "react"

import Navbar from "./Navbar"
import About from "./About"
import OpenSource from "./OpenSource"
import Projects from "./Projects"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Initialize darkMode based on user preference or system preference
  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDarkMode(isDarkMode)
  }, [])

  // Update classList and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "dark bg-slate-900 text-slate-100"
          : "bg-slate-50 text-slate-800"
      } font-sans transition-colors duration-300`}
    >
      <Navbar
        darkMode={darkMode}
        mobileMenuOpen={mobileMenuOpen}
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
      />
      <About darkMode={darkMode} />
      <OpenSource darkMode={darkMode} />
      <Projects darkMode={darkMode} />
    </div>
  )
}
