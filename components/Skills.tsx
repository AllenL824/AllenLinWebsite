import { skills } from "@/data/skills"

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">04.</span>
        Skills
      </h2>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-slate-300 text-sm bg-slate-800 px-3 py-1.5 rounded border border-slate-700 hover:border-cyan-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
