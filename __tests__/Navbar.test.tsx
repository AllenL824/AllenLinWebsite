import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Navbar from "@/components/Navbar"

describe("Navbar", () => {
  it("renders all nav links", () => {
    render(<Navbar activeSection="" />)
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /education/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument()
  })

  it("highlights the active section link", () => {
    render(<Navbar activeSection="projects" />)
    const projectsLink = screen.getByRole("link", { name: /projects/i })
    expect(projectsLink).toHaveClass("text-cyan-400")
  })

  it("opens mobile menu when hamburger is clicked", async () => {
    const user = userEvent.setup()
    render(<Navbar activeSection="" />)
    const hamburger = screen.getByRole("button", { name: /toggle menu/i })
    await user.click(hamburger)
    expect(screen.getByRole("button", { name: /toggle menu/i })).toBeInTheDocument()
  })
})
