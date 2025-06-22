import React, { ReactNode } from "react"

import pyjsx from "src/media/pyjsx.png"
import srCode from "src/media/example.mp4"
import superluminal from "src/media/superluminal.gif"
import pivotal from "src/media/pivotal.svg"
import attiny85 from "src/media/attiny.jpg"
import bulletin from "src/media/bulletin.png"
import ida from "src/media/ida.png"

export default function Projects() {
  const projects = [
    {
      title: "PyJSX",
      description: "Write JSX directly in Python",
      technologies: ["Python"],
      link: "https://github.com/tomasr8/pyjsx",
      img: (
        <img
          src={pyjsx}
          className="w-full h-full object-contain rounded-sm"
          alt="PyJSX project screenshot"
        />
      ),
    },
    {
      title: "QR codes from scratch",
      description:
        "Generating and decoding a custom matrix barcode similar to a QR code",
      technologies: ["Python", "OpenCV"],
      link: "https://github.com/tomasr8/sr-code",
      img: (
        <video
          src={srCode}
          controls
          className="w-full h-full object-cover object-[-1.8em_0em] rounded-sm"
        ></video>
      ),
    },
    {
      title: "Superluminal",
      description: "An immersive simulation of a ship traveling at light speed",
      technologies: ["JS"],
      link: "https://tomasr8.github.io/superluminal",
      img: (
        <img
          src={superluminal}
          className="w-full h-full object-cover rounded-sm"
          alt="Space travel simulation gif"
        />
      ),
    },
    {
      title: "LP Solver",
      description: "No fuss Linear Programming solver with a friendly API",
      technologies: ["Python"],
      link: "https://github.com/tomasr8/pivotal",
      img: (
        <img
          src={pivotal}
          className="w-full h-full object-contain rounded-sm"
          alt="LP Solver logo"
        />
      ),
    },
    {
      title: "attiny85 Dev Board",
      description:
        "An attiny85 development board with programmable LEDs, 3v3 output and USB-A",
      technologies: ["PCB Design"],
      link: "https://github.com/tomasr8/attiny85-dev-board",
      img: (
        <img
          src={attiny85}
          className="w-full h-full object-cover object-[0_-4em] rounded-sm"
          alt="attiny85 dev board image"
        />
      ),
    },
    {
      title: "CERN Bulletin Archive",
      description:
        "An online archive of the CERN Bulletin, a weekly publication covering news and events going back to the 1960s",
      technologies: ["Python", "Flask", "React", "PostgreSQL"],
      link: "https://bulletin.app.cern.ch",
      img: (
        <img
          src={bulletin}
          className="w-full h-full object-cover object-top-left rounded-sm"
          alt="CERN Bulletin Archive screenshot"
        />
      ),
    },
  ]

  return (
    <section id="projects" className="py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        <div className="flex mx-4 mt-8 justify-center">
          <ProjectCard
            className="basis-[50%]"
            title="Macropad"
            description="DIY 3-key macropad"
            technologies={["3D Modeling", "PCB Design"]}
            link="https://github.com/tomasr8/ida"
            img={
              <img
                src={ida}
                className="w-full h-full object-cover object-[0em_-4em] rounded-sm"
                alt="macropad"
              />
            }
          />
        </div>
      </div>
    </section>
  )
}

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
  className +=
    " bg-white hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:shadow-slate-700/30 p-6 rounded-lg shadow-md transition-colors duration-300"

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <div className="h-48 bg-indigo-100 dark:bg-slate-700 rounded-md mb-4 flex items-center justify-center text-indigo-400 transition-colors duration-300">
        {img}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
        {description}
      </p>
      <div className="flex gap-2">
        {technologies.map(tech => (
          <span
            key={tech}
            className="px-3 py-1 bg-indigo-200/50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 text-sm rounded-full transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}
