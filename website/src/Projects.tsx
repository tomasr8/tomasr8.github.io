import React, { ReactNode } from "react"

export default function Projects({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="projects" className="py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            darkMode={darkMode}
            title="PyJSX"
            description="A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product filtering, and payment integration."
            technologies={["React", "Node.js", "MongoDB"]}
            link="#about"
            img={null}
          />

          <ProjectCard
            darkMode={darkMode}
            title="QR codes from scratch with OpenCV and Python"
            description="A library and a CLI tool for generating and decoding a custom matrix barcode similar to a QR code."
            technologies={["Python", "OpenCV"]}
            link="#about"
            img={
              <video
                src="src/example.mp4"
                controls
                className="w-full h-full object-contain"
              ></video>
            }
          />

          <ProjectCard
            darkMode={darkMode}
            title="Just travelling through space.."
            description="An immersive simulation of a ship traveling through space done using only 2D canvas to avoid having to use WebGL. Source here."
            technologies={["React", "Node.js", "MongoDB"]}
            link="#about"
            img={
              <img
                src="/src/superluminal.gif"
                className="w-full h-full object-cover"
              />
            }
          />

          <ProjectCard
            darkMode={darkMode}
            title="LP Solver"
            description="No fuss Linear Programming solver with a friendly API. Uses the simplex algorithm."
            technologies={["Python"]}
            link="#about"
            img={
              <img
                src="/src/pivotal.svg"
                className="w-full h-full object-contain"
              />
            }
          />

          <ProjectCard
            darkMode={darkMode}
            title="attiny85 dev board"
            description="An attiny85 development board with a builtin 3v3 output and power and general purpose LEDs. Comes with USB-A. "
            technologies={["Python"]}
            link="#about"
            img={
              <img
                src="/src/attiny.jpg"
                className="w-full h-full object-cover object-[0 -4em]"
              />
            }
          />

          <ProjectCard
            darkMode={darkMode}
            title="CERN Bulletin Archive"
            description="No fuss Linear Programming solver with a friendly API. Uses the simplex algorithm."
            technologies={["Python"]}
            link="#about"
            img={
              <img
                src="/src/bulletin2.png"
                className="w-full h-full object-cover object-top-left"
              />
            }
          />
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className={`${
              darkMode
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-700"
            } font-medium transition-colors`}
          >
            View all projects →
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  darkMode,
  title,
  description,
  technologies,
  link,
  img,
}: {
  darkMode: boolean
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
      className={`${
        darkMode ? "bg-slate-800 shadow-slate-700/30" : "bg-white"
      } p-6 rounded-lg shadow-md transition-colors duration-300`}
    >
      <div
        className={`h-48 ${
          darkMode ? "bg-slate-700" : "bg-indigo-100"
        } rounded-md mb-4 flex items-center justify-center ${
          darkMode ? "text-indigo-400" : "text-indigo-400"
        } transition-colors duration-300`}
      >
        {img}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p
        className={`${
          darkMode ? "text-slate-300" : "text-slate-600"
        } mb-4 transition-colors duration-300`}
      >
        {description}
      </p>
      <div className="flex gap-2">
        {technologies.map(tech => (
          <span
            key={tech}
            className={`px-3 py-1 ${
              darkMode
                ? "bg-indigo-900/30 text-indigo-400"
                : "bg-indigo-100 text-indigo-600"
            } text-sm rounded-full transition-colors duration-300`}
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}
