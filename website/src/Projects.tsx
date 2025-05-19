import React from "react"

export default function Projects({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="projects" className="py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
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
              Project Preview
            </div>
            <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
            <p
              className={`${
                darkMode ? "text-slate-300" : "text-slate-600"
              } mb-4 transition-colors duration-300`}
            >
              A full-stack e-commerce solution with React, Node.js, and MongoDB.
              Features include user authentication, product filtering, and
              payment integration.
            </p>
            <div className="flex gap-2">
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                React
              </span>
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                Node.js
              </span>
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                MongoDB
              </span>
            </div>
          </div>

          <div
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
              Project Preview
            </div>
            <h3 className="text-xl font-bold mb-2">Task Management App</h3>
            <p
              className={`${
                darkMode ? "text-slate-300" : "text-slate-600"
              } mb-4 transition-colors duration-300`}
            >
              A collaborative task management application built with TypeScript,
              React, and Firebase. Features real-time updates, drag-and-drop
              interface, and team collaboration tools.
            </p>
            <div className="flex gap-2">
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                TypeScript
              </span>
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                React
              </span>
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                Firebase
              </span>
            </div>
          </div>

          <div
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
              Project Preview
            </div>
            <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
            <p
              className={`${
                darkMode ? "text-slate-300" : "text-slate-600"
              } mb-4 transition-colors duration-300`}
            >
              A full-stack e-commerce solution with React, Node.js, and MongoDB.
              Features include user authentication, product filtering, and
              payment integration.
            </p>
            <div className="flex gap-2">
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                React
              </span>
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                Node.js
              </span>
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                MongoDB
              </span>
            </div>
          </div>

          <div
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
              Project Preview
            </div>
            <h3 className="text-xl font-bold mb-2">Task Management App</h3>
            <p
              className={`${
                darkMode ? "text-slate-300" : "text-slate-600"
              } mb-4 transition-colors duration-300`}
            >
              A collaborative task management application built with TypeScript,
              React, and Firebase. Features real-time updates, drag-and-drop
              interface, and team collaboration tools.
            </p>
            <div className="flex gap-2">
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                TypeScript
              </span>
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                React
              </span>
              <span
                className={`px-3 py-1 ${
                  darkMode
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100 text-indigo-600"
                } text-sm rounded-full transition-colors duration-300`}
              >
                Firebase
              </span>
            </div>
          </div>
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
