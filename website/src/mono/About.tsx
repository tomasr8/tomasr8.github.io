import React from "react"

import me from "../media/me.jpg"

export default function About() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I&apos;m Tomas
            </h1>
            <p className="hero-subtitle">
              I am a Full-Stack Software Engineer with background in CompSci, AI
              &amp; Robotics. I currently work on <b>Open Source at CERN</b>. I am
              also a <b>Python Core Developer</b>.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/tomasr8"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                ◈
              </a>
              <a
                href="https://www.linkedin.com/in/tomas-roun"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                ▦
              </a>
              <a
                href="mailto:tomas.roun8+tomasr.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Email"
              >
                ✉
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img
              src={me}
              alt="Tomas Roun"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
