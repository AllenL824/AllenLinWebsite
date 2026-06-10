export interface Experience {
  company: string
  role: string
  dateRange: string
  location: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: "WVU Machine Intelligence Lab",
    role: "Undergraduate Researcher",
    dateRange: "Aug. 2025 – Present",
    location: "Morgantown, WV",
    bullets: [
      "Designed and deployed SycEval, an end-to-end evaluation pipeline benchmarking sycophancy across 6 LLMs (Llama, Gemma, Phi) on two medical QA datasets using HPC clusters",
      "Implemented a Claim-Level Conformal Prediction framework providing statistically grounded guarantees for suppressing sycophantic model outputs without retraining",
      "Identified a model-dependent scaling effect where conformal intervention reliably reduces sycophancy in small models but worsens it in certain larger models",
      "Conducted large-scale experiments (N=1,000 per run, 12 parallel SLURM jobs) across MedQuad and HealthSearchQA datasets on a GPU cluster",
    ],
  },
  {
    company: "WV Department of Transportation",
    role: "Software Engineering Intern",
    dateRange: "May 2025 – Aug. 2025",
    location: "Charleston, WV",
    bullets: [
      "Migrated a legacy ASP.NET Web Forms application to a modern ASP.NET Core MVC architecture, enhancing maintainability and extending the system's usable lifecycle by 5+ years",
      "Connected the upgraded application to an existing SQL Server database, integrating schema relationships through Entity Framework",
      "Refactored features into Models, Views, and Controllers, and implemented dynamic routing and form validation for a responsive UI",
      "Collaborated with internal departments to gather requirements, test features, and deliver iterative improvements using Git and Agile practices",
    ],
  },
  {
    company: "WVU IDEMIA Biometrics Lab",
    role: "Lab Technician",
    dateRange: "Feb. 2025 – Aug. 2025",
    location: "Morgantown, WV",
    bullets: [
      "Processed and annotated hundreds of biometric data points—including iris scans, fingerprint scans, and scripted/unscripted audio—for machine learning model training",
      "Structured large multimodal datasets to support research on biometric authentication, fraud detection, and forensic analysis",
      "Conducted quality checks and preprocessing to ensure clean, consistent inputs for machine learning pipelines",
    ],
  },
]
