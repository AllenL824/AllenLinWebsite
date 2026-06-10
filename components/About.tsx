import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">01.</span>
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            Hi! I&apos;m Allen, a Computer Science student at West Virginia University pursuing a
            B.S. in CS with an emphasis in Artificial Intelligence and a minor in Statistics. I
            maintain a 4.0 GPA and am passionate about building things at the intersection of
            machine learning research and full-stack software engineering.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            I currently do research at WVU&apos;s Machine Intelligence Lab, studying sycophantic
            behavior in large language models. I&apos;ve also interned as a software engineer at
            the WV Department of Transportation, modernizing legacy ASP.NET infrastructure, and
            worked as a lab technician at WVU&apos;s IDEMIA Biometrics Lab. I&apos;m actively
            looking for summer 2026 internship and research opportunities.
          </p>
          <div className="flex gap-4">
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
            <a
              href="mailto:allenlin2824@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
        <div className="shrink-0 mx-auto md:mx-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-cyan-500/30">
            <Image
              src="/profile.jpg"
              alt="Allen Lin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
