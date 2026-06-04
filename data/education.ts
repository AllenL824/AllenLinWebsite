export interface EducationEntry {
  university: string
  degree: string
  graduationYear: string
  coursework: string[]
}

export const education: EducationEntry = {
  university: "[Your University]",
  degree: "Bachelor of Science in Computer Science",
  graduationYear: "Expected May 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Computer Systems",
    "Machine Learning",
    "Software Engineering",
    "Databases",
    "Operating Systems",
  ],
}
