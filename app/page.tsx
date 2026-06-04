"use client"

import { useScrollSpy } from "@/hooks/useScrollSpy"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SectionWrapper from "@/components/SectionWrapper"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

const SECTIONS = ["about", "experience", "projects", "skills", "education", "contact"]

export default function Home() {
  const activeSection = useScrollSpy(SECTIONS)

  return (
    <main>
      <Navbar activeSection={activeSection} />
      <Hero />
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="experience">
        <Experience />
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>
      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </main>
  )
}
