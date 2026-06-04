import { education } from "@/data/education"

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">05.</span>
        Education
      </h2>
      <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
          <div>
            <h3 className="text-slate-100 font-bold text-xl mb-1">{education.university}</h3>
            <p className="text-cyan-400 font-medium">{education.degree}</p>
          </div>
          <span className="text-slate-500 font-mono text-sm mt-2 sm:mt-0">
            {education.graduationYear}
          </span>
        </div>
        <div>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-wider mb-3">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="text-slate-400 text-sm bg-slate-900 px-3 py-1 rounded border border-slate-700"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
