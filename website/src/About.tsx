import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div className="flex-1 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I&apos;m Tomas
            </h1>
            <h2 className="text-2xl md:text-3xl text-indigo-500 font-medium mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl transition-colors duration-300">
              I build scalable web applications with modern technologies.
              Passionate about crafting clean code and creating intuitive user
              experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600 rounded-full transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-2 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600 rounded-full transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="p-2 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600 rounded-full transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 flex items-center justify-center text-6xl font-bold transition-colors duration-300">
              <img
                src="/src/media/me.jpg"
                alt="Tomas Roun"
                className="rounded-full w-64 h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
