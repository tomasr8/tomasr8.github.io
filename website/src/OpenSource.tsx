import React from "react"

export default function OpenSource({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="oss"
      className={`py-16 ${
        darkMode ? "bg-slate-800" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Open Source Contributions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="max-w-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li
              className={`text-xl ${
                darkMode ? "text-slate-300" : "text-slate-600"
              } max-w-xl transition-colors duration-300`}
            >
              <a
                href="https://github.com/indico/indico"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                } font-medium transition-colors`}
              >
                Indico
              </a>{" "}
              core developer for the last 4+ years
            </li>
            <li
              className={`text-xl ${
                darkMode ? "text-slate-300" : "text-slate-600"
              } max-w-xl transition-colors duration-300`}
            >
              <a
                href="https://github.com/python/cpython"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                } font-medium transition-colors`}
              >
                CPython
              </a>{" "}
              contributor and member of the triage team
            </li>
            <li
              className={`text-xl ${
                darkMode ? "text-slate-300" : "text-slate-600"
              } max-w-xl transition-colors duration-300`}
            >
              <a
                href="https://github.com/python-babel/babel"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                } font-medium transition-colors`}
              >
                Babel
              </a>{" "}
              contributor
            </li>
            <li
              className={`text-xl ${
                darkMode ? "text-slate-300" : "text-slate-600"
              } max-w-xl transition-colors duration-300`}
            >
              <a
                href="https://github.com/pycqa/flake8-pyi"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                } font-medium transition-colors`}
              >
                flake8
              </a>{" "}
              contributor
            </li>
            <li
              className={`text-xl ${
                darkMode ? "text-slate-300" : "text-slate-600"
              } max-w-xl transition-colors duration-300`}
            >
              And many others including ruff, pyodide, ..
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src="/src/python.svg"></img>
          <img src="/src/indico.svg"></img>
          <img src="/src/babel.png"></img>
        </div>
      </div>
    </section>
  )
}
