export interface Project {
  name: string
  description: string
  tech: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: "Project One",
    description: "A web app that does X. Built to solve Y problem.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/username/project-one",
    demo: "https://project-one.vercel.app",
  },
  {
    name: "Project Two",
    description: "A CLI tool for automating Z workflow.",
    tech: ["Python", "Click"],
    github: "https://github.com/username/project-two",
  },
  {
    name: "Project Three",
    description: "A machine learning model that classifies X with Y% accuracy.",
    tech: ["PyTorch", "scikit-learn", "Jupyter"],
    github: "https://github.com/username/project-three",
  },
]
