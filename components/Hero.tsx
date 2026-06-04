export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="text-center px-6 z-10">
        <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-4">
          Hi, my name is
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-slate-100 mb-4">
          Allen Lin
        </h1>
        <h3 className="text-2xl md:text-3xl text-slate-400 mb-6">
          Computer Science Student @ [Your School]
        </h3>
        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">
          I build things for the web and love solving interesting problems.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors font-mono text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-cyan-500 text-slate-900 rounded hover:bg-cyan-400 transition-colors font-mono text-sm font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
