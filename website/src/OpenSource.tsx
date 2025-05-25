import React from "react"
import { GitPullRequestArrow } from "lucide-react"

function ContribLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-100 hover:bg-purple-200 text-purple-800 text-sm font-semibold px-2 py-1 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-purple-400 border border-purple-400 inline-flex items-center justify-center"
    >
      <GitPullRequestArrow className="w-5 h-5 me-2" /> See contributions
    </a>
  )
}

function ProjectItem({
  project,
  img,
}: {
  project: {
    url: string
    name: string
    description: string
    contribUrl: string
  }
  img: React.ReactNode
}) {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-6">
        <div className="shrink-0">{img}</div>
        <div className="flex-1 min-w-0">
          <p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
            >
              {project.name}
            </a>
          </p>
          <p className="text-md text-slate-600 dark:text-slate-300 transition-colors duration-300">
            {project.description}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <ContribLink url={project.contribUrl} />
        </div>
      </div>
    </li>
  )
}

export default function OpenSource() {
  const projects = [
    {
      url: "https://github.com/indico/indico",
      name: "Indico",
      description: "core developer for the last 4+ years",
      contribUrl:
        "https://github.com/search?q=org%3Aindico+author%3Atomasr8+type%3Apr&type=pullrequests",
      imgSrc: "/src/indico.svg",
    },
    {
      url: "https://github.com/python/cpython",
      name: "Python",
      description: "contributor and member of the triage team",
      contribUrl:
        "https://github.com/search?q=org%3Apython+author%3Atomasr8+type%3Apr&type=pullrequests",
      imgSrc: "/src/python.svg",
    },
    {
      url: "https://github.com/python-babel/babel",
      name: "Babel",
      description: "contributor",
      contribUrl:
        "https://github.com/search?q=org%3Apython-babel+author%3Atomasr8+type%3Apr&type=pullrequests",
      imgSrc: "/src/babel.png",
    },
    {
      url: "https://github.com/pycqa/flake8-pyi",
      name: "flake8",
      description: "contributor",
      contribUrl:
        "https://github.com/search?q=org%3Apycqa+author%3Atomasr8+type%3Apr&type=pullrequests",
      imgSrc: "/src/pycqa.jpeg",
    },
  ]

  return (
    <section
      id="oss"
      className="py-16 bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Open Source Contributions
        </h2>

        <ul className="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {projects.map(project => (
            <ProjectItem
              key={project.name}
              project={{
                url: project.url,
                name: project.name,
                description: project.description,
                contribUrl: project.contribUrl,
              }}
              img={
                <img
                  className="w-16 h-16 object-contain"
                  src={project.imgSrc}
                  alt={`${project.name} logo`}
                />
              }
            />
          ))}
        </ul>

        <div className="text-center">
          And many others including{" "}
          <a
            href="https://github.com/astral-sh/ruff"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            ruff
          </a>
          ,{" "}
          <a
            href="https://github.com/pyodide/pyodide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            pyodide
          </a>
          , ..
        </div>
      </div>
    </section>
  )
}
