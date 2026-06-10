import { render, screen } from "@testing-library/react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

describe("Hero", () => {
  it("renders name heading", () => {
    render(<Hero />)
    expect(screen.getByRole("heading", { name: /allen lin/i })).toBeInTheDocument()
  })

  it("renders View My Work and Get In Touch links", () => {
    render(<Hero />)
    expect(screen.getByRole("link", { name: /view my work/i })).toHaveAttribute("href", "#projects")
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute("href", "#contact")
  })
})

describe("About", () => {
  it("renders bio text", () => {
    render(<About />)
    expect(screen.getByText(/allen/i)).toBeInTheDocument()
  })

  it("renders GitHub, LinkedIn, and email links", () => {
    render(<About />)
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /email/i })).toBeInTheDocument()
  })
})

describe("Experience", () => {
  it("renders a timeline entry for each experience", () => {
    render(<Experience />)
    expect(screen.getByText("WV Department of Transportation")).toBeInTheDocument()
  })

  it("renders role and date range", () => {
    render(<Experience />)
    expect(screen.getByText("Software Engineering Intern")).toBeInTheDocument()
    expect(screen.getByText("May 2025 – Aug. 2025")).toBeInTheDocument()
  })
})

describe("Projects", () => {
  it("renders a card for each project", () => {
    render(<Projects />)
    expect(screen.getByText("Alzheimer's Disease Prediction")).toBeInTheDocument()
    expect(screen.getByText("BudgetFlow")).toBeInTheDocument()
    expect(screen.getByText("Peak Planner")).toBeInTheDocument()
  })

  it("renders GitHub links", () => {
    render(<Projects />)
    const githubLinks = screen.getAllByRole("link", { name: /github/i })
    expect(githubLinks.length).toBeGreaterThan(0)
  })

  it("renders tech tags for each project", () => {
    render(<Projects />)
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("Python")).toBeInTheDocument()
  })
})

describe("Skills", () => {
  it("renders each skill category heading", () => {
    render(<Skills />)
    expect(screen.getByText("Languages")).toBeInTheDocument()
    expect(screen.getByText("Frameworks")).toBeInTheDocument()
    expect(screen.getByText("Tools")).toBeInTheDocument()
  })

  it("renders skill badges", () => {
    render(<Skills />)
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("Git")).toBeInTheDocument()
  })
})

describe("Education", () => {
  it("renders degree information", () => {
    render(<Education />)
    expect(screen.getByText(/bachelor of science/i)).toBeInTheDocument()
    expect(screen.getByText(/computer science/i)).toBeInTheDocument()
  })

  it("renders coursework section", () => {
    render(<Education />)
    expect(screen.getByText(/relevant coursework/i)).toBeInTheDocument()
  })
})

describe("Contact", () => {
  it("renders a mailto link", () => {
    render(<Contact />)
    const emailLink = screen.getByRole("link", { name: /say hello/i })
    expect(emailLink).toHaveAttribute("href", "mailto:allenlin2824@gmail.com")
  })

  it("renders GitHub and LinkedIn links", () => {
    render(<Contact />)
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument()
  })
})
