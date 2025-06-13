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

## Features

- 🎨 Modern, responsive design using brand color palette
- 📱 Mobile-first responsive layout
- 🎠 Hero image slider with autoplay
- 📄 Multi-page navigation (Home, About, Services, Contact)
- 📋 Interactive FAQ accordion
- 🗺️ Embedded Google Maps for location
- ✉️ Direct mailto and tel links for contact
- 🎭 Smooth scroll animations and transitions
- 🧭 Smart navbar that hides on scroll down, shows on scroll up

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

## Services

Midtown Wholesale LLC specializes in:

- 🍬 Candy & Snacks
- 🧻 Everyday Essentials  
- 🚬 Tobacco & Vapes
- 👕 Apparel
- 🛒 Convenience-Store Mix
- 🚚 Local Delivery (Milwaukee area)

## Contact Information

- **Email:** midtownwholesalewi@gmail.com
- **Phone:** (414) 828-8178
- **Address:** 4830 S 10th St, Milwaukee, WI 53221
- **Minimum Order:** $250

## Deployment

This project is configured for static deployment and can be easily deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

The production build creates static files in the `dist/` directory.

## License

© 2024 Midtown Wholesale LLC. All rights reserved.
