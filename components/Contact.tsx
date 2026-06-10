import { Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4">
        06. What&apos;s Next?
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
        Get In Touch
      </h2>
      <p className="text-slate-400 text-lg leading-relaxed mb-10">
        I&apos;m currently open to new opportunities. Whether you have a question, a project idea,
        or just want to say hi — my inbox is always open!
      </p>
      <a
        href="mailto:allenlin2824@gmail.com"
        className="inline-block px-8 py-4 border border-cyan-400 text-cyan-400 rounded font-mono hover:bg-cyan-400/10 transition-colors text-sm"
      >
        Say Hello
      </a>
      <div className="flex justify-center gap-6 mt-12">
        <a
          href="https://github.com/AllenL824"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/allenl824"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
      </div>
      <p className="text-slate-600 font-mono text-xs mt-16">
        Designed &amp; Built by Allen Lin
      </p>
    </div>
  )
}
