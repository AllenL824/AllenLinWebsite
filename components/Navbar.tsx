"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur border-b border-slate-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-cyan-400 font-bold text-xl hover:text-cyan-300 transition-colors"
        >
          Allen Lin
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm transition-colors hover:text-cyan-400 ${
                  activeSection === href.slice(1)
                    ? "text-cyan-400"
                    : "text-slate-400"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-slate-900 z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
