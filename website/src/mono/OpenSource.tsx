import React from "react"

import indico from "../media/indico.svg"
import python from "../media/python.svg"
import babel from "../media/babel.png"
import pycqa from "../media/pycqa.jpeg"

function ProjectItem({
  project,
  imgSrc,
}: {
  project: {
    url: string
    name: string
    description: string
    contribUrl: string
  }
  imgSrc: string
}) {
  return (
    <li className="oss-item">
      <div className="oss-item-info">
        <img
          className="oss-logo"
          src={imgSrc}
          alt={`${project.name} logo`}
        />
        <div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="oss-name"
          >
            {project.name}
          </a>
          <div className="oss-role">{project.description}</div>
        </div>
      </div>
      <a
        href={project.contribUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="oss-contrib-link"
      >
        [↗] contributions
      </a>
    </li>
  )
}

export default function OpenSource() {
  const projects = [
    {
      url: "https://github.com/indico/indico",
      name: "Indico",
      description: "Maintainer",
      contribUrl:
        "https://github.com/search?q=org%3Aindico+author%3Atomasr8+type%3Apr&type=pullrequests",
      imgSrc: indico,
    },
    {
      url: "https://github.com/python/cpython",
      name: "Python",
      description: "Core Developer",
      contribUrl:
        "https://github.com/search?q=org%3Apython+author%3Atomasr8+type%3Apr&type=pullrequests",
      imgSrc: python,
    },
    {
      url: "https://github.com/python-babel/babel",
      name: "Babel",
      description: "Contributor",
      contribUrl:
        "https://github.com/search?q=org%3Apython-babel+author%3Atomasr8+type%3Apr&type=pullrequests",
      imgSrc: babel,
    },
    {
      url: "https://github.com/pycqa/flake8-pyi",
      name: "flake8",
      description: "Contributor",
      contribUrl:
        "https://github.com/search?q=org%3Apycqa+author%3Atomasr8+type%3Apr&type=pullrequests",
      imgSrc: pycqa,
    },
  ]

  return (
    <section id="oss" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Open Source</h2>

        <ul className="oss-list">
          {projects.map(project => (
            <ProjectItem
              key={project.name}
              project={project}
              imgSrc={project.imgSrc}
            />
          ))}
        </ul>

        <div className="oss-footer">
          Also contributed patches to{" "}
          <a href="https://github.com/astral-sh/ruff" target="_blank" rel="noopener noreferrer">ruff</a>,{" "}
          <a href="https://github.com/pyodide/pyodide" target="_blank" rel="noopener noreferrer">pyodide</a>,{" "}
          <a href="https://github.com/dexie/Dexie.js" target="_blank" rel="noopener noreferrer">dexie</a>{" "}
          and more.
        </div>
      </div>
    </section>
  )
}
