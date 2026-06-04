# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, data-driven personal portfolio site for Allen Lin using Next.js 14 + Tailwind CSS with a dark theme and cyan accent.

**Architecture:** All personal content (projects, experience, skills) lives in TypeScript data files under `data/`. React components in `components/` map over this data. A single `app/page.tsx` composes all section components in order. Scroll behavior (active nav link, fade-in) is handled by two lightweight custom hooks.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v3, lucide-react, Jest + React Testing Library

---

## File Map

| File | Responsibility |
|---|---|
| `package.json` | Dependencies and scripts |
| `next.config.js` | Next.js config |
| `tsconfig.json` | TypeScript config with `@/*` path alias |
| `tailwind.config.ts` | Tailwind content paths |
| `postcss.config.js` | PostCSS for Tailwind |
| `jest.config.ts` | Jest config via next/jest |
| `jest.setup.ts` | jest-dom matchers |
| `app/globals.css` | Tailwind directives + hero gradient keyframes |
| `app/layout.tsx` | Root layout: dark bg, Inter font, metadata |
| `app/page.tsx` | Single page composing all sections |
| `data/experience.ts` | Experience interface + entries array |
| `data/projects.ts` | Project interface + entries array |
| `data/skills.ts` | Skills grouped by category |
| `hooks/useScrollSpy.ts` | Returns active section id as user scrolls |
| `hooks/useInView.ts` | Intersection observer for fade-in animations |
| `components/SectionWrapper.tsx` | Fade-in wrapper for each section |
| `components/Navbar.tsx` | Fixed top nav, active link, mobile hamburger |
| `components/Hero.tsx` | Full-viewport hero with name, tagline, CTAs |
| `components/About.tsx` | Two-column bio + photo + social links |
| `components/Experience.tsx` | Vertical timeline from `data/experience.ts` |
| `components/Projects.tsx` | Card grid from `data/projects.ts` |
| `components/Skills.tsx` | Grouped badges from `data/skills.ts` |
| `components/Education.tsx` | School, degree, coursework card |
| `components/Contact.tsx` | Centered email CTA + social icons |
| `__tests__/data.test.ts` | Data shape validation |
| `__tests__/Navbar.test.tsx` | Navbar render + mobile toggle |
| `__tests__/components.test.tsx` | Render tests for all content components |

---

## Task 1: Project Setup

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `jest.config.ts`
- Create: `jest.setup.ts`
- Create: `app/globals.css`
- Create: `app/layout.tsx`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "allenlinwebsite",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "next": "14.2.29",
    "react": "^18",
    "react-dom": "^18",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.29",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

- [ ] **Step 2: Create `next.config.js`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = nextConfig
```

- [ ] **Step 3: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Create `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: {} },
  plugins: [],
}
export default config
```

- [ ] **Step 5: Create `postcss.config.js`**

```js
module.exports = {
  plugins: { tailwindcss: {}, autoprefixer: {} },
}
```

- [ ] **Step 6: Create `jest.config.ts`**

```ts
import type { Config } from "jest"
import nextJest from "next/jest.js"

const createJestConfig = nextJest({ dir: "./" })

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/$1" },
}

export default createJestConfig(config)
```

- [ ] **Step 7: Create `jest.setup.ts`**

```ts
import "@testing-library/jest-dom"
```

- [ ] **Step 8: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-gradient {
  background: linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #164e63);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
```

- [ ] **Step 9: Create `app/layout.tsx`**

```tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Allen Lin | Portfolio",
  description: "Personal portfolio of Allen Lin, Computer Science student.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 10: Install dependencies**

```bash
npm install
```

Expected: dependencies installed, `node_modules/` created.

- [ ] **Step 11: Verify dev server starts**

```bash
npm run dev &
sleep 5 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

Expected: `200` (or `404` if no page yet — either proves the server is running). Kill the dev server after.

- [ ] **Step 12: Commit**

```bash
git add package.json next.config.js tsconfig.json tailwind.config.ts postcss.config.js jest.config.ts jest.setup.ts app/globals.css app/layout.tsx package-lock.json
git commit -m "feat: initialize Next.js + Tailwind project with Jest"
```

---

## Task 2: Data Layer

**Files:**
- Create: `data/experience.ts`
- Create: `data/projects.ts`
- Create: `data/skills.ts`
- Create: `__tests__/data.test.ts`

- [ ] **Step 1: Write the failing data shape tests**

Create `__tests__/data.test.ts`:

```ts
import { experiences } from "@/data/experience"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"

describe("experience data", () => {
  it("has at least one entry", () => {
    expect(experiences.length).toBeGreaterThan(0)
  })
  it("each entry has required fields", () => {
    experiences.forEach((e) => {
      expect(typeof e.company).toBe("string")
      expect(typeof e.role).toBe("string")
      expect(typeof e.dateRange).toBe("string")
      expect(typeof e.location).toBe("string")
      expect(Array.isArray(e.bullets)).toBe(true)
    })
  })
})

describe("projects data", () => {
  it("has at least one entry", () => {
    expect(projects.length).toBeGreaterThan(0)
  })
  it("each entry has required fields", () => {
    projects.forEach((p) => {
      expect(typeof p.name).toBe("string")
      expect(typeof p.description).toBe("string")
      expect(Array.isArray(p.tech)).toBe(true)
      expect(typeof p.github).toBe("string")
    })
  })
})

describe("skills data", () => {
  it("has at least one category", () => {
    expect(Object.keys(skills).length).toBeGreaterThan(0)
  })
  it("each category has an array of strings", () => {
    Object.values(skills).forEach((items) => {
      expect(Array.isArray(items)).toBe(true)
      items.forEach((item) => expect(typeof item).toBe("string"))
    })
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --testPathPattern="data.test" --no-coverage
```

Expected: FAIL — `Cannot find module '@/data/experience'`

- [ ] **Step 3: Create `data/experience.ts`**

```ts
export interface Experience {
  company: string
  role: string
  dateRange: string
  location: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Software Engineering Intern",
    dateRange: "May 2025 – Aug 2025",
    location: "City, State",
    bullets: [
      "Built X feature using Y technology, improving Z metric by N%",
      "Collaborated with a team of N engineers to ship a major feature",
      "Wrote unit and integration tests, achieving N% code coverage",
    ],
  },
]
```

- [ ] **Step 4: Create `data/projects.ts`**

```ts
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
    tech: ["Python", "PyTorch", "scikit-learn"],
    github: "https://github.com/username/project-three",
  },
]
```

- [ ] **Step 5: Create `data/skills.ts`**

```ts
export const skills: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "C++"],
  Frameworks: ["React", "Next.js", "Node.js", "Express"],
  Tools: ["Git", "Docker", "AWS", "Figma", "Linux"],
}
```

- [ ] **Step 6: Run tests to verify they pass**

```bash
npm test -- --testPathPattern="data.test" --no-coverage
```

Expected: PASS — 6 tests passing

- [ ] **Step 7: Commit**

```bash
git add data/ __tests__/data.test.ts
git commit -m "feat: add data layer for experience, projects, and skills"
```

---

## Task 3: Hooks

**Files:**
- Create: `hooks/useScrollSpy.ts`
- Create: `hooks/useInView.ts`

- [ ] **Step 1: Create `hooks/useScrollSpy.ts`**

```ts
"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
```

- [ ] **Step 2: Create `hooks/useInView.ts`**

```ts
"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add hooks/
git commit -m "feat: add useScrollSpy and useInView hooks"
```

---

## Task 4: SectionWrapper + Navbar Components

**Files:**
- Create: `components/SectionWrapper.tsx`
- Create: `components/Navbar.tsx`
- Create: `__tests__/Navbar.test.tsx`

- [ ] **Step 1: Write failing Navbar tests**

Create `__tests__/Navbar.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --testPathPattern="Navbar.test" --no-coverage
```

Expected: FAIL — `Cannot find module '@/components/Navbar'`

- [ ] **Step 3: Create `components/SectionWrapper.tsx`**

```tsx
"use client"

import { useInView } from "@/hooks/useInView"

export default function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode
  id: string
  className?: string
}) {
  const { ref, inView } = useInView()

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  )
}
```

- [ ] **Step 4: Create `components/Navbar.tsx`**

```tsx
"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur border-b border-slate-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-cyan-400 font-bold text-xl hover:text-cyan-300 transition-colors"
        >
          Allen Lin
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm transition-colors hover:text-cyan-400 ${
                  activeSection === href.slice(1)
                    ? "text-cyan-400"
                    : "text-slate-400"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-slate-900 z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
npm test -- --testPathPattern="Navbar.test" --no-coverage
```

Expected: PASS — 3 tests passing

- [ ] **Step 6: Commit**

```bash
git add components/SectionWrapper.tsx components/Navbar.tsx __tests__/Navbar.test.tsx
git commit -m "feat: add SectionWrapper and Navbar components"
```

---

## Task 5: Hero Component

**Files:**
- Create: `components/Hero.tsx`
- Create: `__tests__/components.test.tsx` (new file, Hero test only)

- [ ] **Step 1: Write failing Hero test**

Create `__tests__/components.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: FAIL — `Cannot find module '@/components/Hero'`

- [ ] **Step 3: Create `components/Hero.tsx`**

```tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="text-center px-6 z-10">
        <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-4">
          Hi, my name is
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-slate-100 mb-4">
          Allen Lin
        </h1>
        <h3 className="text-2xl md:text-3xl text-slate-400 mb-6">
          Computer Science Student @ [Your School]
        </h3>
        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">
          I build things for the web and love solving interesting problems.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors font-mono text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-cyan-500 text-slate-900 rounded hover:bg-cyan-400 transition-colors font-mono text-sm font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: PASS — 2 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx __tests__/components.test.tsx
git commit -m "feat: add Hero component"
```

---

## Task 6: About Component

**Files:**
- Modify: `__tests__/components.test.tsx` (append About tests)
- Create: `components/About.tsx`
- Create: `public/profile.jpg` (placeholder)

- [ ] **Step 1: Add failing About test to `__tests__/components.test.tsx`**

Append after the existing Hero describe block:

```tsx
import About from "@/components/About"

// ... existing Hero tests above ...

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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: FAIL — `Cannot find module '@/components/About'`

- [ ] **Step 3: Add a placeholder profile image**

```bash
curl -s "https://via.placeholder.com/400x400/1e293b/06b6d4?text=AL" -o public/profile.jpg
```

If `public/` doesn't exist, create it first:

```bash
mkdir -p public
```

- [ ] **Step 4: Create `components/About.tsx`**

```tsx
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">01.</span>
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            Hi! I&apos;m Allen, a Computer Science student at [Your University] passionate about
            building software that makes a difference. I love working on full-stack projects and
            exploring machine learning.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            When I&apos;m not coding, you can find me [your hobbies]. I&apos;m currently looking
            for internship opportunities for [semester/year].
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:allenlin2824@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
        <div className="shrink-0 mx-auto md:mx-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-cyan-500/30">
            <Image
              src="/profile.jpg"
              alt="Allen Lin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: PASS — 4 tests passing

- [ ] **Step 6: Commit**

```bash
git add components/About.tsx public/profile.jpg __tests__/components.test.tsx
git commit -m "feat: add About component"
```

---

## Task 7: Experience Component

**Files:**
- Modify: `__tests__/components.test.tsx` (append Experience tests)
- Create: `components/Experience.tsx`

- [ ] **Step 1: Add failing Experience test to `__tests__/components.test.tsx`**

Append after the About describe block:

```tsx
import Experience from "@/components/Experience"

describe("Experience", () => {
  it("renders a timeline entry for each experience", () => {
    render(<Experience />)
    // Sample data has "Company Name" — verify it appears
    expect(screen.getByText("Company Name")).toBeInTheDocument()
  })

  it("renders role and date range", () => {
    render(<Experience />)
    expect(screen.getByText("Software Engineering Intern")).toBeInTheDocument()
    expect(screen.getByText("May 2025 – Aug 2025")).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: FAIL — `Cannot find module '@/components/Experience'`

- [ ] **Step 3: Create `components/Experience.tsx`**

```tsx
import { experiences } from "@/data/experience"

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">02.</span>
        Experience
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-700" />
        <div className="space-y-12 pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-900 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-shadow" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-slate-100 font-semibold text-lg">{exp.role}</h3>
                <span className="text-slate-500 font-mono text-sm">{exp.dateRange}</span>
              </div>
              <p className="text-cyan-400 font-medium mb-3">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-1.5">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-slate-400 text-sm flex gap-2">
                    <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: PASS — 6 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/Experience.tsx __tests__/components.test.tsx
git commit -m "feat: add Experience component"
```

---

## Task 8: Projects Component

**Files:**
- Modify: `__tests__/components.test.tsx` (append Projects tests)
- Create: `components/Projects.tsx`

- [ ] **Step 1: Add failing Projects test to `__tests__/components.test.tsx`**

Append after the Experience describe block:

```tsx
import Projects from "@/components/Projects"

describe("Projects", () => {
  it("renders a card for each project", () => {
    render(<Projects />)
    expect(screen.getByText("Project One")).toBeInTheDocument()
    expect(screen.getByText("Project Two")).toBeInTheDocument()
    expect(screen.getByText("Project Three")).toBeInTheDocument()
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: FAIL — `Cannot find module '@/components/Projects'`

- [ ] **Step 3: Create `components/Projects.tsx`**

```tsx
import { projects } from "@/data/projects"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">03.</span>
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-slate-800 rounded-lg p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200 border border-slate-700"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-slate-100 font-semibold text-lg">{project.name}</h3>
              <div className="flex gap-3 shrink-0 ml-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-slate-400 text-sm flex-1 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-cyan-400 font-mono text-xs bg-cyan-500/10 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: PASS — 9 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/Projects.tsx __tests__/components.test.tsx
git commit -m "feat: add Projects component"
```

---

## Task 9: Skills Component

**Files:**
- Modify: `__tests__/components.test.tsx` (append Skills tests)
- Create: `components/Skills.tsx`

- [ ] **Step 1: Add failing Skills test to `__tests__/components.test.tsx`**

Append after the Projects describe block:

```tsx
import Skills from "@/components/Skills"

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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: FAIL — `Cannot find module '@/components/Skills'`

- [ ] **Step 3: Create `components/Skills.tsx`**

```tsx
import { skills } from "@/data/skills"

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">04.</span>
        Skills
      </h2>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-slate-300 text-sm bg-slate-800 px-3 py-1.5 rounded border border-slate-700 hover:border-cyan-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: PASS — 11 tests passing

- [ ] **Step 5: Commit**

```bash
git add components/Skills.tsx __tests__/components.test.tsx
git commit -m "feat: add Skills component"
```

---

## Task 10: Education + Contact Components

**Files:**
- Modify: `__tests__/components.test.tsx` (append Education + Contact tests)
- Create: `components/Education.tsx`
- Create: `components/Contact.tsx`

- [ ] **Step 1: Add failing Education and Contact tests to `__tests__/components.test.tsx`**

Append after the Skills describe block:

```tsx
import Education from "@/components/Education"
import Contact from "@/components/Contact"

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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: FAIL — `Cannot find module '@/components/Education'`

- [ ] **Step 3: Create `components/Education.tsx`**

```tsx
export default function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Computer Systems",
    "Machine Learning",
    "Software Engineering",
    "Databases",
    "Operating Systems",
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        <span className="text-cyan-400 font-mono text-xl mr-3">05.</span>
        Education
      </h2>
      <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
          <div>
            <h3 className="text-slate-100 font-bold text-xl mb-1">[Your University]</h3>
            <p className="text-cyan-400 font-medium">
              Bachelor of Science in Computer Science
            </p>
          </div>
          <span className="text-slate-500 font-mono text-sm mt-2 sm:mt-0">
            Expected May 2027
          </span>
        </div>
        <div>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-wider mb-3">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="text-slate-400 text-sm bg-slate-900 px-3 py-1 rounded border border-slate-700"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create `components/Contact.tsx`**

```tsx
import { Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4">
        06. What&apos;s Next?
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
        Get In Touch
      </h2>
      <p className="text-slate-400 text-lg leading-relaxed mb-10">
        I&apos;m currently open to new opportunities. Whether you have a question, a project idea,
        or just want to say hi — my inbox is always open!
      </p>
      <a
        href="mailto:allenlin2824@gmail.com"
        className="inline-block px-8 py-4 border border-cyan-400 text-cyan-400 rounded font-mono hover:bg-cyan-400/10 transition-colors text-sm"
      >
        Say Hello
      </a>
      <div className="flex justify-center gap-6 mt-12">
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
      </div>
      <p className="text-slate-600 font-mono text-xs mt-16">
        Designed &amp; Built by Allen Lin
      </p>
    </div>
  )
}
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
npm test -- --testPathPattern="components.test" --no-coverage
```

Expected: PASS — 15 tests passing

- [ ] **Step 6: Commit**

```bash
git add components/Education.tsx components/Contact.tsx __tests__/components.test.tsx
git commit -m "feat: add Education and Contact components"
```

---

## Task 11: Page Assembly + Final Verification

**Files:**
- Create: `app/page.tsx`

- [ ] **Step 1: Create `app/page.tsx`**

```tsx
"use client"

import { useScrollSpy } from "@/hooks/useScrollSpy"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SectionWrapper from "@/components/SectionWrapper"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

const SECTIONS = ["about", "experience", "projects", "skills", "education", "contact"]

export default function Home() {
  const activeSection = useScrollSpy(SECTIONS)

  return (
    <main>
      <Navbar activeSection={activeSection} />
      <Hero />
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="experience">
        <Experience />
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>
      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </main>
  )
}
```

- [ ] **Step 2: Run the full test suite**

```bash
npm test -- --no-coverage
```

Expected: All tests passing (data tests + Navbar tests + component tests)

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: build succeeds with no errors

- [ ] **Step 5: Spot-check in browser**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify:
- Dark background loads
- Hero gradient animation is visible
- Navbar links are present
- Scrolling highlights the active nav link
- Sections fade in as you scroll
- Mobile hamburger works (resize browser to < 768px)
- Project cards have hover lift effect

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble full portfolio page"
```

---

## Post-Build: Personalize Your Data

After implementation is complete, update these files with your real information:

| File | What to update |
|---|---|
| `data/experience.ts` | Real companies, roles, dates, bullets |
| `data/projects.ts` | Real project names, descriptions, GitHub URLs |
| `data/skills.ts` | Your actual tech stack |
| `components/About.tsx` | Real bio text, GitHub/LinkedIn URLs |
| `components/Hero.tsx` | Your school name, tagline |
| `components/Education.tsx` | Your university, graduation year, coursework |
| `components/Contact.tsx` | Your GitHub/LinkedIn URLs |
| `app/layout.tsx` | Update metadata description if needed |
| `public/profile.jpg` | Replace with your real photo |
