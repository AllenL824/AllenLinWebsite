import { render, screen } from "@testing-library/react"
import Hero from "@/components/Hero"

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
