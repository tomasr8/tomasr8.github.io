import React, { ReactNode } from "react"

import pyjsx from "../media/pyjsx.png"
import srCode from "../media/example.mp4"
import superluminal from "../media/superluminal.gif"
import pivotal from "../media/pivotal.svg"
import attiny85 from "../media/attiny.jpg"
import bulletin from "../media/bulletin.png"
import ida from "../media/ida.jpg"

function ProjectCard({
  className = "",
  title,
  description,
  technologies,
  link,
  img,
}: {
  className?: string
  title: string
  description: string
  technologies: string[]
  link: string
  img: ReactNode
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${className}`}
    >
      <div className="project-img-wrap">
        {img}
      </div>
      <div className="project-title">{title}</div>
      <p className="project-desc">{description}</p>
      <div className="project-tags">
        {technologies.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  const projects = [
    {
      title: "PyJSX",
      description: "Write JSX directly in Python",
      technologies: ["Python"],
      link: "https://github.com/tomasr8/pyjsx",
      img: <img src={pyjsx} alt="PyJSX project screenshot" style={{ objectFit: "contain" as const }} />,
    },
    {
      title: "QR codes from scratch",
      description: "Generating and decoding a custom matrix barcode similar to a QR code",
      technologies: ["Python", "OpenCV"],
      link: "https://github.com/tomasr8/sr-code",
      img: <video src={srCode} controls style={{ objectPosition: "-1.8em 0em" }} />,
    },
    {
      title: "Superluminal",
      description: "An immersive simulation of a ship traveling at light speed",
      technologies: ["JS"],
      link: "https://tomasr8.github.io/superluminal",
      img: <img src={superluminal} alt="Space travel simulation" />,
    },
    {
      title: "LP Solver",
      description: "No fuss Linear Programming solver with a friendly API",
      technologies: ["Python"],
      link: "https://github.com/tomasr8/pivotal",
      img: <img src={pivotal} alt="LP Solver logo" style={{ objectFit: "contain" as const }} />,
    },
    {
      title: "attiny85 Dev Board",
      description: "An attiny85 development board with programmable LEDs, 3v3 output and USB-A",
      technologies: ["PCB Design"],
      link: "https://github.com/tomasr8/attiny85-dev-board",
      img: <img src={attiny85} alt="attiny85 dev board" style={{ objectPosition: "0 -4em" }} />,
    },
    {
      title: "CERN Bulletin Archive",
      description: "An online archive of the CERN Bulletin covering news and events going back to the 1960s",
      technologies: ["Python", "Flask", "React", "PostgreSQL"],
      link: "https://bulletin.app.cern.ch",
      img: <img src={bulletin} alt="CERN Bulletin Archive" style={{ objectPosition: "top left" }} />,
    },
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              img={project.img}
            />
          ))}
        </div>

        <div className="projects-grid-single">
          <ProjectCard
            title="Macropad"
            description="DIY 3-key macropad"
            technologies={["3D Modeling", "PCB Design"]}
            link="https://github.com/tomasr8/ida"
            img={<img src={ida} alt="macropad" style={{ objectPosition: "0em -4em" }} />}
          />
        </div>
      </div>
    </section>
  )
}
