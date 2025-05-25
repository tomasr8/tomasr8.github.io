import React, { ReactNode } from "react"

export default function Projects() {
  const projects = [
    {
      title: "PyJSX",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product filtering, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#about",
      img: (
        <img
          src="/src/pyjsx.png"
          className="w-full h-full object-contain"
          alt="PyJSX project screenshot"
        />
      ),
    },
    {
      title: "QR codes from scratch with OpenCV and Python",
      description:
        "A library and a CLI tool for generating and decoding a custom matrix barcode similar to a QR code.",
      technologies: ["Python", "OpenCV"],
      link: "#about",
      img: (
        <video
          src="src/example.mp4"
          controls
          className="w-full h-full object-contain"
        ></video>
      ),
    },
    {
      title: "Just travelling through space..",
      description:
        "An immersive simulation of a ship traveling through space done using only 2D canvas to avoid having to use WebGL. Source here.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#about",
      img: (
        <img
          src="/src/superluminal.gif"
          className="w-full h-full object-cover"
          alt="Space travel simulation gif"
        />
      ),
    },
    {
      title: "LP Solver",
      description:
        "No fuss Linear Programming solver with a friendly API. Uses the simplex algorithm.",
      technologies: ["Python"],
      link: "#about",
      img: (
        <img
          src="/src/pivotal.svg"
          className="w-full h-full object-contain"
          alt="LP Solver logo"
        />
      ),
    },
    {
      title: "attiny85 dev board",
      description:
        "An attiny85 development board with a builtin 3v3 output and power and general purpose LEDs. Comes with USB-A.",
      technologies: ["Python"],
      link: "#about",
      img: (
        <img
          src="/src/attiny.jpg"
          className="w-full h-full object-cover object-[0 -4em]"
          alt="attiny85 dev board image"
        />
      ),
    },
    {
      title: "CERN Bulletin Archive",
      description:
        "A project to archive and make accessible the CERN Bulletin, a publication that documents the activities and achievements of CERN.",
      technologies: ["Python"],
      link: "#about",
      img: (
        <img
          src="/src/bulletin2.png"
          className="w-full h-full object-cover object-top-left"
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

        <div className="mt-10 text-center">
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            View all projects →
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  link,
  img,
}: {
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
      className="bg-white dark:bg-slate-800 dark:shadow-slate-700/30 p-6 rounded-lg shadow-md transition-colors duration-300"
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
            className="px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 text-sm rounded-full transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}
