# LankaGeo — Next.js Frontend

Precision SAR satellite intelligence platform for Sri Lanka.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **CSS Modules** for scoped styling
- **Syne** + **DM Sans** Google Fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
lankageo/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Home route → renders LandingPage
│   └── globals.css       # CSS variables + keyframe animations
├── components/
│   ├── LandingPage.tsx   # Full landing page + modal state
│   ├── LandingPage.module.css
│   ├── AuthModal.tsx     # Login / Sign Up / Google Verify modal
│   └── AuthModal.module.css
└── package.json
```

## Features

| Feature | Detail |
|---------|--------|
| Landing page | Hero, stats bar, capability cards, footer |
| Blur on modal open | `filter: blur(6px)` on page when modal visible |
| Login modal | Email + password form with "Forgot password" |
| Sign Up modal | Username, email, password with validation-ready inputs |
| Google OAuth UI | Verification screen matching Google's consent design |
| Tab switching | Smooth Login ↔ Sign Up tab transition |
| Responsive | Mobile-first breakpoints at 600px and 900px |
| Scroll lock | `overflow: hidden` on body while modal is open |

## Modal Flow

```
Get Started / Login click
        ↓
  Auth Modal (Login tab)
        ↓
  "Sign in with Google" → Verify Modal → close on Continue
  "Sign Up" tab         → Sign Up form  → close on Create Account
  "Log In"              → close modal
```

## Extending

- Add real authentication by replacing the `onClick={onClose}` in submit buttons with API calls
- Connect to Next.js API routes (`/app/api/auth/`) or NextAuth.js
- Add form validation with `react-hook-form` + `zod`
