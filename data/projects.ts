export interface Project {
  name: string
  description: string
  tech: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: "Alzheimer's Disease Prediction",
    description:
      "ML models predicting Alzheimer's disease status from ADNI blood biomarker data, achieving 86% accuracy with age-stratified cross-validation and biomarker importance analysis.",
    tech: ["Python", "scikit-learn", "PyTorch", "NumPy", "pandas"],
    github: "https://github.com/AllenL824/alzheimers-prediction",
  },
  {
    name: "BudgetFlow",
    description:
      "Full-stack financial tracking platform built at CMU TartanHacks with an AI advisor powered by Anthropic Claude, D3.js Sankey diagram visualizations, and real-time budget analytics.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "D3.js"],
    github: "https://github.com/AllenL824/budgetflow",
  },
  {
    name: "Peak Planner",
    description:
      "Full-stack web app for planning and tracking hikes across U.S. state and national parks, featuring interactive maps, park APIs, user authentication, and wish lists.",
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    github: "https://github.com/AllenL824/peak-planner",
  },
]
