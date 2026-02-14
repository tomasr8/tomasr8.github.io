import React, { useContext } from "react"
import { AppContext } from "../AppContext"

export default function Navbar({
  mobileMenuOpen,
  toggleMobileMenu,
}: {
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
}) {
  const { isDark, toggleTheme } = useContext(AppContext)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#about">
          tomasr
        </a>

        {/* Desktop navigation */}
        <div className="navbar-links">
          <a href="#about">about</a>
          <a href="#oss">open-source</a>
          <a href="#projects">projects</a>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {isDark ? "[☀]" : "[☽]"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="mobile-controls">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {isDark ? "[☀]" : "[☽]"}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? "[×]" : "[≡]"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <a href="#about">about</a>
        <a href="#oss">open-source</a>
        <a href="#projects">projects</a>
      </div>
    </nav>
  )
}
