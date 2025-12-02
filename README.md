# Night Owl - Landing Page

A premium, conversion-focused landing page for **Night Owl** - a late-night social app for insomniacs, night owls, and anyone who finds themselves awake when the world sleeps.

## Features

- **Modern Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Theme**: Beautiful dark mode design optimized for night viewing
- **Performance Optimized**: Fast loading with optimized assets

## Sections

1. **Navigation** - Sticky glass-morphism navbar with smooth scroll
2. **Hero** - Animated starfield, moon, and compelling CTAs
3. **Problem Statement** - Pain points that resonate with the target audience
4. **Features** - Interactive tabbed showcase with phone mockups
5. **How It Works** - Simple 4-step onboarding flow
6. **Night Mode Lock** - Unique feature highlight with split mockup
7. **Testimonials** - Social proof with animated counters
8. **Pricing** - Free vs Premium comparison
9. **FAQ** - Accordion-style frequently asked questions
10. **Final CTA** - Conversion-focused download section
11. **Footer** - Links and social media

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, DM Sans (Google Fonts)

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Black | `#0D0D0D` | Background |
| Surface | `#1A1A1A` | Elevated surfaces |
| Card | `#262626` | Card backgrounds |
| Purple Primary | `#8B5CF6` | Main accent |
| Purple Light | `#C4B5FD` | Brand primary |
| Success | `#6EE7B7` | Online indicators |
| Warning | `#FCD34D` | Timers/alerts |

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main landing page
└── components/
    ├── Navigation.tsx   # Sticky navbar
    ├── Hero.tsx         # Hero section with animations
    ├── ProblemStatement.tsx
    ├── Features.tsx     # Tabbed feature showcase
    ├── HowItWorks.tsx   # Step-by-step guide
    ├── NightModeLock.tsx
    ├── Testimonials.tsx # Reviews and stats
    ├── Pricing.tsx      # Pricing comparison
    ├── FAQ.tsx          # Accordion FAQ
    ├── FinalCTA.tsx     # Download section
    └── Footer.tsx       # Site footer
```

## Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/nightowl-landing)

## License

MIT License - feel free to use this template for your projects.
