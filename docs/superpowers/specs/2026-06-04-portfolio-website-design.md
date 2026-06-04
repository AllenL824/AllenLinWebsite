# Portfolio Website Design Spec

**Date:** 2026-06-04  
**Project:** AllenLinWebsite — Personal Portfolio  
**Stack:** Next.js + Tailwind CSS  
**Theme:** Dark mode, cyan/teal accent  

---

## Overview

A single-page, data-driven personal portfolio website for a college student. The goal is to showcase experience, projects, skills, and education to recruiters and companies. All personal content (projects, experience, skills) is stored in TypeScript data files and rendered by React components — updating the portfolio only requires editing the data files.

---

## Architecture

```
AllenLinWebsite/
├── app/
│   ├── layout.tsx          # Root layout: dark bg, font, metadata, global styles
│   └── page.tsx            # Single page — renders all sections in order
├── components/
│   ├── Navbar.tsx          # Fixed top nav with smooth-scroll links + mobile hamburger
│   ├── Hero.tsx            # Full-viewport hero: name, subtitle, tagline, CTA buttons
│   ├── About.tsx           # Two-column: profile photo + bio + social links
│   ├── Experience.tsx      # Vertical timeline of internships/jobs/research
│   ├── Projects.tsx        # Card grid of projects
│   ├── Skills.tsx          # Grouped skill badges by category
│   ├── Education.tsx       # School, degree, graduation year, coursework
│   └── Contact.tsx         # Email mailto link + GitHub/LinkedIn icons
├── data/
│   ├── experience.ts       # Array of experience entries
│   ├── projects.ts         # Array of project entries
│   └── skills.ts           # Grouped skills object
└── public/
    └── profile.jpg         # Profile photo
```

**Dependencies:** Next.js, Tailwind CSS, `lucide-react` (icons). No animation libraries.

---

## Visual Design

| Token | Value |
|---|---|
| Background | `slate-900` (#0f172a) |
| Surface | `slate-800` (#1e293b) |
| Accent | `cyan-500` (#06b6d4) |
| Text primary | `slate-100` |
| Text muted | `slate-400` |
| Font | Inter (Google Fonts) |

---

## Sections

### Navbar
- Fixed at top of viewport, full width
- Dark background with `backdrop-blur` and subtle bottom border
- Left: name/logo (links to top)
- Right: navigation links — About · Experience · Projects · Skills · Education · Contact
- Active section highlighted in cyan as user scrolls
- Mobile: hamburger icon; menu slides in from the right as a full-height overlay

### Hero
- Full-viewport-height (`min-h-screen`)
- Centered content: large `h1` name, `h3` subtitle (e.g. "Computer Science Student @ [School]"), one-line tagline
- Two CTA buttons: "View My Work" (scrolls to Projects) and "Get In Touch" (scrolls to Contact)
- Subtle CSS animated gradient background (no JS — achieved via `@keyframes` on a gradient)

### About
- Two-column layout on desktop, stacked on mobile
- Left: circular profile photo
- Right: 2–3 paragraph bio, social icon links (GitHub, LinkedIn, email)

### Experience
- Vertical timeline with a left-aligned line and dot per entry
- Each entry: company, role, date range, location, 2–3 bullet points
- Dot glows cyan on hover
- Data sourced from `data/experience.ts`

### Projects
- 3-column card grid on desktop, 1-column on mobile
- Each card: project name, short description, tech stack tags (cyan badges), GitHub link, optional live demo link
- Cards have hover lift effect (translate-y + shadow)
- Data sourced from `data/projects.ts`

### Skills
- Grouped by category (e.g. Languages, Frameworks, Tools, Other)
- Each skill rendered as a small rounded badge
- Category headings in cyan
- Data sourced from `data/skills.ts`

### Education
- Single card: school name, degree, expected graduation year
- Relevant coursework as a comma-separated list or small badge list

### Contact
- Centered section
- Heading + short invite text ("Let's connect" or similar)
- Large email link styled as a cyan button
- Icon links to GitHub and LinkedIn below

---

## Interactions & Animations

- **Scroll fade-in:** Each section fades up into view using Intersection Observer + Tailwind transition classes (no Framer Motion)
- **Navbar active state:** Highlights current section link as user scrolls through page
- **Navbar opacity:** Becomes more opaque/bordered after scrolling past hero
- **Project cards:** `hover:-translate-y-1 hover:shadow-lg` lift effect
- **Experience timeline dots:** Glow effect on hover via `hover:shadow-cyan-500/50`
- **Buttons:** Outlined cyan, fill on hover with smooth transition

---

## Data Shapes

```ts
// data/experience.ts
export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

// data/projects.ts
export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

// data/skills.ts
export type Skills = Record<string, string[]>;
// e.g. { Languages: ["Python", "TypeScript"], Frameworks: ["React", "Next.js"] }
```

---

## Responsiveness

- Mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- All multi-column layouts collapse to single column on mobile
- Navbar collapses to hamburger below `md`
- Font sizes scale down on small screens

---

## Deployment

- Designed for static export (`next export`) or standard Vercel deployment
- No server-side logic required — all content is static
- Environment: Node.js 18+, Next.js 14+
