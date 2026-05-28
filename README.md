# 📦 ComboStash — B2B Stationery Combo Box Website

<div align="center">

![ComboStash Banner](https://img.shields.io/badge/ComboStash-B2B%20Stationery%20Platform-4f46e5?style=for-the-badge&logo=react&logoColor=white)

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Custom%20Properties-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)
[![No Dependencies](https://img.shields.io/badge/External%20UI%20Libraries-Zero-orange?style=flat-square)](package.json)

<br />

**A fully responsive, interactive B2B website for a stationery combo box business.**  
Built with pure React and CSS — no external UI libraries. Dark/light theme, 28 animations, 3D tilt cards, particle backgrounds, and more.

<br />

[🚀 Live Demo](#) · [📊 View Presentation](#) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Business Model](#-business-model)
- [Features](#-features)
- [Interactive Elements](#-interactive-elements)
- [Website Sections](#-website-sections)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Component Architecture](#-component-architecture)
- [State Management](#-state-management)
- [Custom Hooks](#-custom-hooks)
- [Theme System](#-theme-system)
- [Responsive Design](#-responsive-design)
- [Animations](#-animations)
- [Performance](#-performance)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🏢 About the Project

**ComboStash** is a B2B e-commerce website designed for a business that sells pre-packed stationery combo boxes to small retail shops at wholesale prices. The website serves as a complete digital storefront — showcasing products, explaining the business model, capturing retail partner registrations, and providing an interactive savings calculator.

Suppliers (Manufacturers)
↓
ComboStash (Curates & Bundles)
↓
Small Retailers (Shops)
↓
End Customers

> ⚠️ **Important:** Items are sold **ONLY as combo boxes**, never individually. This is a **B2B platform** — not for individual consumers.

---

## 💼 Business Model

| Aspect | Details |
|--------|---------|
| **Target Audience** | Small retail shops, bookstores, general stores, school suppliers |
| **Product Type** | Pre-curated stationery combo boxes |
| **Pricing Model** | Wholesale (below retail value) with volume discounts |
| **Minimum Order** | 5 boxes per order |
| **Categories** | Back-to-School, Office, Art & Craft, Exam-Ready, Gift Packs, Mega Bulk |
| **Delivery** | 1–5 business days (varies by volume tier) |
| **Payment** | Prepaid / COD / Credit (approved accounts) |

---

## ✨ Features

### 🎨 Design & UI
- **Dark/Light theme** with persistent localStorage preference
- **Glassmorphism** — frosted glass effect on navbar and forms
- **Gradient text** — CSS `background-clip: text` technique
- **Noise texture overlay** — subtle film grain for depth
- **Custom scrollbar** — gradient-themed matching brand colors
- **SVG wave** — smooth footer transition
- **Animated blobs** — morphing SVG background shapes
- **CSS Grid + Flexbox** — modern responsive layouts throughout

### ⚡ Interactivity
- **28 animations** — keyframes + CSS transitions
- **3D Tilt Cards** — mouse-tracking perspective transform with glare
- **Magnetic Buttons** — buttons subtly follow cursor within bounds
- **Custom Cursor** — dot + ring that expands on hover
- **Typewriter Effect** — rotating hero taglines with typing animation
- **Animated Counters** — numbers count up from 0 when scrolled into view
- **Mouse Parallax** — hero elements shift with cursor movement
- **Smooth Scroll** — native CSS with `scroll-padding-top` for navbar offset

### 🔔 Notifications & Feedback
- **Toast Notifications** — slide-in alerts for actions (add to order, form submit)
- **Confetti Explosion** — 50 colored pieces on registration success
- **Page Loader** — animated orbiting stationery items with progress bar
- **Button Loading Spinner** — transforms during form submission

### 📊 Business Tools
- **Savings Calculator** — interactive dual-slider profit estimator
- **Product Filtering** — 7 category buttons with animated active state
- **Testimonials Carousel** — auto-playing with dots and prev/next on mobile
- **FAQ Accordion** — numbered questions, one open at a time

---

## 🎯 Interactive Elements

| Element | Description | Hook/API |
|---------|-------------|----------|
| Page Loader | Orbiting items around 📦, progress bar | `useState`, `useEffect` |
| Custom Cursor | Dot + ring, expands on hover | `useRef`, `mousemove` |
| Scroll Progress | Gradient bar at top of page | `useEffect`, `scroll` |
| Back to Top | SVG ring shows scroll percentage | `useState`, `scroll` |
| Particle Field | Canvas 60-node connected graph | `useRef`, `canvas API` |
| Animated Blobs | SVG morphing shapes | CSS `@keyframes` |
| Typewriter | Rotating taglines, typing effect | `useState`, `useEffect` |
| 3D Tilt Cards | Perspective transform + glare | `useRef`, `mousemove` |
| Magnetic Buttons | Cursor-following spring effect | `useRef`, `mousemove` |
| Animated Counters | Numbers count up on reveal | Custom `useCounter` hook |
| Mouse Parallax | Hero elements follow cursor | Custom `useMousePosition` |
| Scroll Reveal | Elements fade/slide in | Custom `useReveal` hook |
| Product Filter | Category filter buttons | `useState`, `Array.filter` |
| Savings Calculator | Dual range slider calculator | `useState`, real-time math |
| FAQ Accordion | Numbered, single-open | `useState`, max-height |
| Testimonial Carousel | Auto-play, dots, prev/next | `useState`, `setInterval` |
| Toast System | Context-based notifications | `createContext`, `useState` |
| Confetti Burst | 50 pieces on registration | `useState`, CSS animation |
| Active Nav Tracking | Highlights current section | `IntersectionObserver` |

---

## 🗂️ Website Sections
┌─────────────────────────────────────────────────┐
│ NAVBAR (fixed, floating pill, glassmorphism) │
├─────────────────────────────────────────────────┤
│ HERO (particles, blobs, typewriter, parallax) │
├─────────────────────────────────────────────────┤
│ STATS (animated counters, gradient strip) │
├─────────────────────────────────────────────────┤
│ MARQUEE (trusted brands ticker) │
├─────────────────────────────────────────────────┤
│ ABOUT (mission, 4 tilt value cards) │
├─────────────────────────────────────────────────┤
│ HOW IT WORKS (3 step cards with number rings) │
├─────────────────────────────────────────────────┤
│ WHY CHOOSE US (6 gradient icon cards) │
├─────────────────────────────────────────────────┤
│ PRODUCTS (filterable, 6 tilt cards, toasts) │
├─────────────────────────────────────────────────┤
│ SAVINGS CALCULATOR (dual sliders, real-time) │
├─────────────────────────────────────────────────┤
│ PRICING (4 tier cards, popular highlighted) │
├─────────────────────────────────────────────────┤
│ TESTIMONIALS (carousel mobile / grid desktop) │
├─────────────────────────────────────────────────┤
│ FAQ (numbered accordion, 8 questions) │
├─────────────────────────────────────────────────┤
│ CONTACT (glass form, 5 contact cards, toast) │
├─────────────────────────────────────────────────┤
│ REGISTER (benefit cards, form, confetti 🎊) │
├─────────────────────────────────────────────────┤
│ FOOTER (SVG wave, 4-col grid, social links) │
└─────────────────────────────────────────────────┘
[💬] WhatsApp Float [⬆️] Back to Top


combostash/
│
├── public/
│ └── index.html # Font links (Google Fonts Inter)
│
├── src/
│ ├── App.jsx # All 20+ components in single file
│ │ │
│ │ ├── ThemeContext # Global theme (light/dark)
│ │ ├── ThemeProvider # Wraps entire app
│ │ ├── ToastContext # Global notifications
│ │ ├── ToastProvider # Toast management
│ │ │
│ │ ├── PageLoader # Animated loading screen
│ │ ├── CustomCursor # Custom cursor (dot + ring)
│ │ ├── ScrollProgress # Top progress bar
│ │ ├── BackToTop # SVG ring scroll indicator
│ │ ├── Confetti # Registration celebration
│ │ ├── ParticleField # Canvas particle background
│ │ ├── AnimatedBlob # SVG morphing shapes
│ │ │
│ │ ├── MagneticButton # Cursor-following button
│ │ ├── TiltCard # 3D perspective tilt card
│ │ ├── Typewriter # Rotating text animation
│ │ ├── Marquee # Brand ticker strip
│ │ │
│ │ ├── Navbar # Fixed nav with active tracking
│ │ ├── Hero # Landing with parallax
│ │ ├── Stats # Animated number counters
│ │ ├── About # Company info + values
│ │ ├── HowItWorks # 3-step process cards
│ │ ├── WhyChooseUs # 6 reason cards
│ │ ├── Products # Filterable combo cards
│ │ ├── SavingsCalculator # Interactive profit tool
│ │ ├── Pricing # Volume discount tiers
│ │ ├── Testimonials # Reviews carousel/grid
│ │ ├── FAQ # Accordion questions
│ │ ├── Contact # Form + contact info
│ │ ├── Register # Retailer registration
│ │ ├── Footer # Links + social
│ │ └── WhatsAppButton # Fixed chat button
│ │
│ ├── App.css # ~1400 lines of custom CSS
│ └── index.js # React DOM entry point
│
├── package.json
└── README.md



---

## 🚀 Getting Started

### Prerequisites

```bash
# Node.js v16 or higher
node --version

# npm v8 or higher
npm --version

Installation

# 1. Clone the repository
git clone https://github.com/yourusername/combostash.git

# 2. Navigate into the project
cd combostash

# 3. Install dependencies
npm install

# 4. Start the development server
npm start

The app opens at http://localhost:3000 with hot reloading enabled.

Production Build

# Create optimized production build
npm run build

# The build/ folder is ready to deploy

Deployment

# Deploy to Vercel (recommended)
npm install -g vercel
vercel --prod

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --dir=build --prod

# Deploy to GitHub Pages
npm install gh-pages --save-dev
npm run build
npx gh-pages -d build

🏗️ Component Architecture

App
└── ThemeProvider (theme, toggleTheme)
    └── ToastProvider (toasts[], addToast)
        ├── PageLoader (progress, hiding)
        └── div.app
            ├── CustomCursor
            ├── ScrollProgress
            ├── Navbar
            │   └── ThemeToggle
            ├── main
            │   ├── Hero
            │   │   ├── ParticleField (canvas)
            │   │   ├── AnimatedBlob ×2
            │   │   └── MagneticButton ×2
            │   ├── Stats
            │   │   └── StatItem ×5 (useCounter)
            │   ├── Marquee
            │   ├── About
            │   │   └── TiltCard ×4
            │   ├── HowItWorks
            │   ├── WhyChooseUs
            │   │   └── TiltCard ×6
            │   ├── Products
            │   │   └── TiltCard ×n (filtered)
            │   ├── SavingsCalculator
            │   ├── Pricing
            │   │   └── TiltCard ×4
            │   ├── Testimonials
            │   │   └── TiltCard ×4 (desktop grid)
            │   ├── FAQ
            │   ├── Contact (reads ToastContext)
            │   └── Register (reads ToastContext)
            ├── Footer
            ├── WhatsAppButton
            └── BackToTop

🧠 State Management

All state is handled with React's built-in hooks. No Redux, Zustand, or external state library.
Global State (Context)

// Theme Context
const ThemeContext = createContext();
// Provides: { theme: "light" | "dark", toggleTheme: fn }

// Toast Context
const ToastContext = createContext();
// Provides: { addToast: fn(message, type) }

Local State per Component

Component	State Variable	Type	Purpose
ThemeProvider	theme	string	Current theme
ToastProvider	toasts	array	Active notifications
PageLoader	progress	number	Load progress 0-100
PageLoader	hiding	boolean	Fade-out trigger
Navbar	menuOpen	boolean	Mobile menu toggle
Navbar	scrolled	boolean	Scroll shadow trigger
Navbar	activeSection	string	Current visible section
Products	activeFilter	string	Category filter
Calculator	boxes	number	Range slider value
Calculator	avgPrice	number	Range slider value
Testimonials	current	number	Carousel index
FAQ	openIndex	number|null	Open FAQ item
Contact	formData	object(6)	Form field values
Contact	sending	boolean	Submit loading state
Register	formData	object(11)	Form field values
Register	showConfetti	boolean	Confetti trigger

🪝 Custom Hooks

useReveal(options?)

Scroll-triggered animation using IntersectionObserver.

const [ref, isVisible] = useReveal({ threshold: 0.15 });

// Usage:
<div ref={ref} className={isVisible ? "reveal reveal--visible" : "reveal"}>
  Content fades and slides up when scrolled into view
</div>

useCounter(end, duration, start, isActive)

Animates a number from start to end using requestAnimationFrame.

const count = useCounter("500", 2000, 0, isVisible);
// Returns animated number that counts up when isActive = true
// Uses cubic easing: 1 - (1 - progress)³

useMousePosition()

Tracks normalized cursor position for parallax effects.

const { x, y } = useMousePosition();
// x: -1 to 1 (left to right)
// y: -1 to 1 (top to bottom)

// Usage in hero:
style={{ transform: `translate(${x * 15}px, ${y * 15}px)` }}

🌓 Theme System
The theme system uses CSS Custom Properties toggled by a data-theme attribute on <html>.

How It Works

1. ThemeProvider initializes theme from localStorage
2. useEffect sets document.documentElement.setAttribute("data-theme", theme)
3. CSS [data-theme="dark"] block activates new variable values
4. ALL elements using var(--variable-name) update instantly
5. useEffect saves to localStorage for persistence

Variables (20+ per theme)
[data-theme="light"] {
  --bg-primary:       #fafbff;
  --bg-card:          #ffffff;
  --text-primary:     #0f1729;
  --accent-primary:   #4f46e5;
  --accent-gradient:  linear-gradient(135deg, #4f46e5, #06b6d4, #8b5cf6);
  --glass-bg:         rgba(255, 255, 255, 0.6);
  --shadow-glow:      0 0 40px rgba(79, 70, 229, 0.2);
  /* ...20+ more */
}

[data-theme="dark"] {
  --bg-primary:       #0a0d1a;
  --bg-card:          #151830;
  --text-primary:     #e8eaf6;
  --accent-primary:   #818cf8;  /* lighter for contrast */
  --accent-gradient:  linear-gradient(135deg, #818cf8, #22d3ee, #a78bfa);
  --glass-bg:         rgba(21, 24, 48, 0.6);
  --shadow-glow:      0 0 40px rgba(129, 140, 248, 0.15);
  /* ...20+ more */
}

📱 Responsive Design

Four breakpoints with mobile-first awareness:
Breakpoint	Width	Key Changes
Desktop	> 1024px	Full multi-column grids, 3D tilt, custom cursor
Tablet	≤ 1024px	2-column grids, stacked hero, single column contact
Mobile	≤ 768px	Hamburger menu, 1 column everything, carousel for testimonials
Small Mobile	≤ 480px	Reduced padding/font sizes, stacked buttons, hidden hero visual

Grid Transformations

Products:   3-col → 2-col → 1-col
Pricing:    4-col → 2-col → 1-col
Footer:     4-col → 2-col → 1-col
About:      2-col → 1-col → 1-col
Steps:      3-col → 3-col → 1-col

Mobile-Specific Features
Horizontal scroll on product filter buttons
Carousel replaces grid for testimonials
Hero visual section hidden
Custom cursor disabled
WhatsApp button scaled down

🎬 Animations
Keyframe Animations (Continuous)

Animation	Element	Duration	Effect
float	Hero 📦 box	4s	Smooth up/down
floatItem	Surrounding emojis	5s	Up/down + 12° rotate
blobMorph	SVG blobs	15s	Scale + 360° rotate
marqueeScroll	Brand ticker	25s	Left scroll
loaderOrbit	Loading circles	3–5s	360° orbit
loaderPulse	Loading icon	1.5s	Scale pulse
confettiFall	Confetti pieces	2–5s	Fall + rotate + fade
glowPulse	Hero box glow	4s	Opacity + scale
gradientShift	Buttons	4s	bg-position cycle
shine	CTA button	3s	Light sweep
blink	Typewriter cursor	0.8s	Opacity blink
pulse-dot	Live badge dot	2s	Box-shadow pulse
spin	Submit spinner	0.6s	360° rotation
waPing	WhatsApp ring	2s	Scale + fade out
Transition Effects (On Interaction)
Trigger	Element	Effect
Mouse move	Tilt card	perspective(1000px) rotateXY()
Mouse move	Magnetic button	translate(x*0.3, y*0.3)
Mouse move	Glare overlay	Radial gradient follows cursor
Scroll into view	Section elements	opacity 0→1, translateY 40→0
Click FAQ	Answer panel	max-height 0→200px
Click FAQ	Plus icon	rotate(0→45deg)
Click hamburger	Menu icon	3 lines → X morphing
Click hamburger	Nav panel	right -100%→0
Click theme	Toggle icon	rotate(0→180deg)
Hover nav link	Underline	width 0→60%
Focus input	Border line	width 0→100%
Focus input	Box shadow	0 0 0 4px accent-light
Hover button	Glow effect	Blur filter behind button
Nav tab change	Carousel	translateX(-current×100%)
Scroll	Counter	requestAnimationFrame count
⚡ Performance

    useMemo — Product data array memoized to prevent re-creation on renders
    useCallback — Event handlers memoized where appropriate
    IntersectionObserver — Unobserves elements after they become visible (one-time trigger)
    Canvas cleanup — cancelAnimationFrame + removeEventListener in useEffect return
    Staggered animations — CSS transitionDelay prevents layout thrashing
    Single file — Eliminates HTTP requests from multiple component imports
    Native CSS — No JavaScript animation libraries (Framer Motion etc.)

Bundle Size (Approximate)
React + ReactDOM:   ~130KB (gzipped ~42KB)
App.jsx:            ~40KB
App.css:            ~28KB
Total (gzipped):    ~70KB


🗺️ Roadmap
Phase 1 — Foundation ✅

    Complete responsive UI
    Dark/light theme system
    All 15 sections implemented
    28 animations and effects
    Interactive savings calculator
    Toast notification system
    Confetti on registration

Phase 2 — Backend Integration 🔄

    REST API integration (Node.js / Express)
    User authentication (JWT)
    Real product database (MongoDB / PostgreSQL)
    Order management system
    Admin dashboard

Phase 3 — E-commerce Features 📋

    Shopping cart with checkout
    Payment gateway (Razorpay / Stripe)
    Order tracking
    Invoice generation (PDF)
    Email notifications (SendGrid)
    WhatsApp notifications (Twilio)

Phase 4 — Advanced 🔮

    React Router (multi-page)
    Code splitting (React.lazy)
    PWA (Service Worker)
    Analytics (Google Analytics 4)
    A/B testing
    Multi-language support (Hindi + English)
    Referral system for retailers
