"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
