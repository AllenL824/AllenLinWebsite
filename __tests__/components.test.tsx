import { render, screen } from "@testing-library/react"
import Hero from "@/components/Hero"
import About from "@/components/About"

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
