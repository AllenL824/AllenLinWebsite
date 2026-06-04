export interface Experience {
  company: string
  role: string
  dateRange: string
  location: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Software Engineering Intern",
    dateRange: "May 2025 – Aug 2025",
    location: "City, State",
    bullets: [
      "Built X feature using Y technology, improving Z metric by N%",
      "Collaborated with a team of N engineers to ship a major feature",
      "Wrote unit and integration tests, achieving N% code coverage",
    ],
  },
]
