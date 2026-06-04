import { render, screen } from "@testing-library/react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"

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
    expect(screen.getByText("Company Name")).toBeInTheDocument()
  })

  it("renders role and date range", () => {
    render(<Experience />)
    expect(screen.getByText("Software Engineering Intern")).toBeInTheDocument()
    expect(screen.getByText("May 2025 – Aug 2025")).toBeInTheDocument()
  })
})
