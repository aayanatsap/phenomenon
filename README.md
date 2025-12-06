<p align="center">
  <img src="media/logo.png" alt="Phenomenon Logo" width="300"/>
</p>

<h1 align="center">✨ Phenomenon 2024 ✨</h1>

<p align="center">
  <strong>The Official Website for St. Joseph's Boys' High School's Premier Cultural & Literary Festival</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#author">Author</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Three.js-r169-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js"/>
</p>

---

## 🌟 Overview

**Phenomenon** is the flagship cultural and literary festival of St. Joseph's Boys' High School, Bangalore. This repository contains the official event website—a stunning, immersive web experience featuring 3D animations, interactive UI components, and a cosmic-themed design that captures the spirit of the festival.

The 12th edition of Phenomenon brings together **20+ events** spanning music, dance, art, literature, sports, and more, attracting participants from schools and colleges across the region.

---

## ✨ Features

### 🎨 Visual Experience
- **Cosmic Theme** — Deep galaxy-inspired color palette with electric blues and soft pinks
- **Shooting Stars Animation** — Dynamic SVG-based shooting stars that traverse the viewport
- **Stars Background** — Procedurally generated starfield creating depth and atmosphere
- **3D Interactive Cards** — Mouse-tracking perspective transforms for immersive card interactions

### 🎭 Interactive Components
- **Floating Navigation** — Smooth, responsive navbar with scroll-aware behavior
- **Swiper Carousel** — Coverflow effect event showcase with touch-enabled navigation
- **Countdown Timer** — Real-time countdown to the festival date with digital clock aesthetic
- **Animated Logo** — Click-to-zoom interaction with smooth CSS animations

### 📱 Responsive Design
- Mobile-first approach with breakpoints for tablet and desktop
- Fluid typography and spacing using Tailwind's responsive utilities
- Touch-optimized interactions for mobile users

### 🎯 Event Management
- Comprehensive event listings with rules and descriptions
- Registration flow for individual and delegation participants
- Schedule integration via Google Drive links

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4, Custom CSS Animations |
| **3D Graphics** | Three.js, React Three Fiber, React Three Drei |
| **Animations** | Framer Motion, CSS Keyframes |
| **UI Components** | Swiper.js, Lucide Icons, Tabler Icons |
| **Fonts** | Custom OTF/TTF (Aquire, Trench, Digital7) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/phenomenon.git
   cd phenomenon
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
phenomenon/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── artist/            # Featured artist page
│   ├── contact/           # Contact information
│   ├── events/            # Event listings & details
│   ├── registrations/     # Registration forms
│   │   ├── delegation/    # School delegation registration
│   │   └── individual/    # Individual participant registration
│   ├── rules/             # Festival rules & guidelines
│   ├── globals.css        # Global styles & font faces
│   ├── layout.tsx         # Root layout with navbar, footer, stars
│   └── page.tsx           # Homepage
│
├── components/
│   └── ui/                # Reusable UI components
│       ├── 3d-card.tsx    # Interactive 3D card with mouse tracking
│       ├── 3d-pin.tsx     # 3D pin component
│       ├── EventsCard.tsx # Event display card
│       ├── floating-navbar.tsx
│       ├── Footer.tsx
│       ├── Logo.tsx       # Animated logo component
│       ├── Navbar.tsx
│       ├── shooting-stars.tsx
│       ├── stars-background.tsx
│       ├── swipcards.tsx  # Swiper carousel
│       └── Timer.tsx      # Countdown timer
│
├── lib/
│   ├── plugins/           # Custom Tailwind plugins
│   └── utils.ts           # Utility functions (cn helper)
│
├── media/                 # Static assets
│   └── pictures/          # Event banner images
│
├── public/
│   └── fonts/             # Custom font files
│
├── tailwind.config.ts     # Tailwind configuration with custom theme
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Galaxy Blue | `#0A0A1A` | Secondary backgrounds |
| Dark Galaxy | `#01010F` | Primary background |
| Baby Blue | `#3D52A0` | Accent elements |
| Light Blue | `#7091E6` | Primary accent, headings |
| Mid Gray | `#8697C4` | Secondary text |
| Light Gray | `#ADBBDA` | Tertiary text |
| White Pink | `#EDE8F5` | Primary text |

### Typography

- **Aquire / Aquire Bold** — Display headings, buttons
- **Trench** — Body text, descriptions
- **Digital7 Mono** — Countdown timer digits

---

## 📸 Screenshots

<p align="center">
  <em>Homepage with animated logo and countdown timer</em>
</p>

<p align="center">
  <em>Event carousel with coverflow effect</em>
</p>

<p align="center">
  <em>Detailed event cards with rules</em>
</p>

---

## 🙏 Acknowledgments

- **St. Joseph's Boys' High School** — For hosting Phenomenon
- **T Roshan Pramod** — Co-developer
- **Paradoxical Media** — Development partner
- **Aceternity UI** — Component inspiration

---

## 👨‍💻 Author

<p align="center">
  <img src="https://github.com/aayanbothra.png" width="100" style="border-radius: 50%;" alt="Aayan Bothra"/>
</p>

<h3 align="center">Aayan Bothra</h3>

<p align="center">
  <a href="https://github.com/aayanbothra">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://linkedin.com/in/aayanbothra">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
</p>

<p align="center">
  <em>Full-stack developer passionate about creating immersive web experiences</em>
</p>

---

## 📄 License

This project is proprietary software developed for St. Joseph's Boys' High School.

---

<p align="center">
  <strong>⭐ Star this repo if you found it inspiring!</strong>
</p>

<p align="center">
  Made with 💙 for Phenomenon 2024
</p>
