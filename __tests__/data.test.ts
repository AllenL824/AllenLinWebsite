import { experiences } from "@/data/experience"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"

describe("experience data", () => {
  it("has at least one entry", () => {
    expect(experiences.length).toBeGreaterThan(0)
  })
  it("each entry has required fields", () => {
    experiences.forEach((e) => {
      expect(typeof e.company).toBe("string")
      expect(typeof e.role).toBe("string")
      expect(typeof e.dateRange).toBe("string")
      expect(typeof e.location).toBe("string")
      expect(Array.isArray(e.bullets)).toBe(true)
    })
  })
})

describe("projects data", () => {
  it("has at least one entry", () => {
    expect(projects.length).toBeGreaterThan(0)
  })
  it("each entry has required fields", () => {
    projects.forEach((p) => {
      expect(typeof p.name).toBe("string")
      expect(typeof p.description).toBe("string")
      expect(Array.isArray(p.tech)).toBe(true)
      expect(typeof p.github).toBe("string")
    })
  })
})

describe("skills data", () => {
  it("has at least one category", () => {
    expect(Object.keys(skills).length).toBeGreaterThan(0)
  })
  it("each category has an array of strings", () => {
    Object.values(skills).forEach((items) => {
      expect(Array.isArray(items)).toBe(true)
      items.forEach((item) => expect(typeof item).toBe("string"))
    })
  })
})
