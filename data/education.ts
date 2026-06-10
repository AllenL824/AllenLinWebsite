export interface EducationEntry {
  university: string
  degree: string
  gpa: string
  graduationYear: string
  coursework: string[]
}

export const education: EducationEntry = {
  university: "West Virginia University",
  degree: "Bachelor of Science in Computer Science — AI Emphasis & Statistics Minor",
  gpa: "4.00 — President's List",
  graduationYear: "Expected May 2028",
  coursework: [
    "Applied Machine Learning",
    "Data Structures & Algorithms",
    "Files & Data Structures",
    "Probability & Statistics",
    "Discrete Mathematics",
    "Computer System Concepts",
    "Intro to Software Engineering",
    "Microprocessor Systems",
    "Digital Logic Design",
    "Calculus III",
  ],
}
