import React from "react"
import { useState } from "react"

import Navbar from "./Navbar"
import About from "./About"
import OpenSource from "./OpenSource"
import Projects from "./Projects"
import { AppContextProvider } from "./AppContext"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(open => !open)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <AppContextProvider>
        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        <About />
        <OpenSource />
        <Projects />
      </AppContextProvider>
    </div>
  )
}
