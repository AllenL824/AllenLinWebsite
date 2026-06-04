import { experiences } from "@/data/experience"

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">02.</span>
        Experience
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-700" />
        <div className="space-y-12 pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-900 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-shadow" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-slate-100 font-semibold text-lg">{exp.role}</h3>
                <span className="text-slate-500 font-mono text-sm">{exp.dateRange}</span>
              </div>
              <p className="text-cyan-400 font-medium mb-3">
                <span>{exp.company}</span>
                <span className="text-slate-500"> · {exp.location}</span>
              </p>
              <ul className="space-y-1.5">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-slate-400 text-sm flex gap-2">
                    <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
