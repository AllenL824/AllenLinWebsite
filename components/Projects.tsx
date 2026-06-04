import { projects } from "@/data/projects"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">03.</span>
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-slate-800 rounded-lg p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200 border border-slate-700"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-slate-100 font-semibold text-lg">{project.name}</h3>
              <div className="flex gap-3 shrink-0 ml-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-slate-400 text-sm flex-1 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-cyan-400 font-mono text-xs bg-cyan-500/10 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
