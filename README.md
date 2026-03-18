# Lumière Aesthetics — React Website

A modern, premium aesthetic clinic website built with **React 18 + Vite**.

---

## ✦ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Vite 5 | Dev server & bundler |
| CSS (global) | Styling — no CSS-in-JS, no Tailwind |
| Google Fonts | Cormorant Garamond + Jost |

---

## ✦ Project Structure

```
lumiere-aesthetics/
├── index.html                  # HTML entry point
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Root component + IntersectionObserver
    ├── data/
    │   └── index.js            # All static content (copy, arrays)
    ├── styles/
    │   └── global.css          # Full design system + responsive
    └── components/
        ├── Icons.jsx           # All SVG icons & service icons
        ├── Navbar.jsx          # Sticky nav + mobile hamburger
        ├── Hero.jsx            # Split hero section
        ├── Marquee.jsx         # Scrolling treatment ticker
        ├── Services.jsx        # 6-card treatment grid
        ├── Divider.jsx         # Gold diamond divider
        ├── About.jsx           # Doctor + features split
        ├── Gallery.jsx         # Before & after grid
        ├── Testimonials.jsx    # 3-card testimonial row
        ├── Booking.jsx         # Appointment form (controlled)
        ├── Contact.jsx         # Info + decorative map
        ├── Footer.jsx          # 4-col footer + newsletter
        └── FloatButtons.jsx    # WhatsApp + Book Now floaters
```

---

## ✦ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

The dev server runs at **http://localhost:5173** by default.

---

## ✦ Customisation

### Content
All text, arrays, and data live in **`src/data/index.js`** — edit that single file to change:
- Nav links
- Services list
- Testimonials
- Gallery items
- Contact details
- Clinic hours
- Footer links

### Colours
All design tokens are CSS custom properties in **`src/styles/global.css`** under `:root`:

```css
--cream:      #FAF7F4;
--blush:      #F2E8E1;
--gold:       #C9A96E;
--gold-light: #E8D5B0;
--deep:       #3D2B23;
--muted:      #8C7266;
```

### Fonts
Loaded from Google Fonts in **`index.html`**.  
- **Headings:** Cormorant Garamond (serif, elegant)
- **Body:** Jost (clean sans-serif)

---

## ✦ Next.js Migration

To use with Next.js App Router:

1. Move `src/styles/global.css` → `app/globals.css` and import it in `app/layout.js`
2. Add `"use client"` directive to any component using `useState` / `useEffect`:
   - `Navbar.jsx`, `Booking.jsx`, `Footer.jsx`, `App.jsx`
3. Move Google Fonts link to `<head>` in `app/layout.js` using `next/font/google`
4. Rename `App.jsx` → `app/page.jsx`

---

## ✦ Features

- 📱 **Mobile-first responsive** — breakpoints at 600px, 900px, 1200px
- ✨ **Scroll animations** — IntersectionObserver fade-up with stagger delays
- 🔒 **Controlled form** — booking form with React state + success feedback
- 📰 **Newsletter** — email subscribe with confirmation state
- 💬 **Floating buttons** — WhatsApp + Book Now with hover tooltips
- 🎨 **CSS marquee** — infinite scrolling treatment ticker
- 🌙 **No external UI libs** — zero dependency on Tailwind, MUI, etc.
