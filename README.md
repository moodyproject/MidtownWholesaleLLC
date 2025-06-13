# Midtown Wholesale LLC

A modern, responsive brochure website for Midtown Wholesale LLC - a family-owned wholesale distribution company based in Milwaukee, Wisconsin.

## Overview

This website showcases Midtown Wholesale LLC's services, company values, and contact information. Built with modern web technologies to provide a fast, accessible, and engaging user experience.

**Tagline:** "A warehouse you can trust."

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Styling:** CSS Modules (no preprocessors)
- **Animations:** AOS (Animate On Scroll)
- **Slider:** Swiper.js
- **Language:** JavaScript (no TypeScript)

## Brand Colors

- **Purple:** #B1A3BC
- **Seafoam:** #A3BCBA  
- **Lilac:** #A692AB
- **Ivory:** #EDE9DE
- **Gray:** #7D7C82

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<username>/midtownLLC.git

# Navigate to project directory
cd midtownLLC

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── assets/              # Static assets
├── components/          # Reusable UI components
│   ├── Navbar/
│   ├── HeroSlider/
│   ├── ServicesGrid/
│   ├── FAQAccordion/
│   └── Footer/
├── pages/               # Route components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── hooks/               # Custom React hooks
│   └── useHideOnScroll.js
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```


## Deployment

This project is configured for static deployment and can be easily deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

The production build creates static files in the `dist/` directory.

## License

© 2025 Midtown Wholesale LLC. All rights reserved.
