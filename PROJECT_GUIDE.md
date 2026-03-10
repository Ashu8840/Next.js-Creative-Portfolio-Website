# 🧙‍♂️ Ayush Tripathi — Creative Portfolio Website

A visually immersive full-stack portfolio website built with **Next.js 14**, **Three.js**, **Tailwind CSS**, and **Framer Motion**. Features interactive 3D models, animated firefly backgrounds, smooth page transitions, and a fully responsive design.

---

## 📁 Project Structure

```
├── public/
│   ├── audio/              # Background sound files
│   ├── background/         # Page background images
│   └── models/             # 3D GLTF model files
├── src/
│   ├── app/
│   │   ├── data.js         # All projects and navigation data
│   │   ├── globals.css     # Global CSS + CSS variables
│   │   ├── layout.js       # Root layout + metadata
│   │   ├── page.js         # Home page
│   │   └── (sub pages)/
│   │       ├── layout.js   # Shared sub-page layout
│   │       ├── about/      # About page
│   │       ├── contact/    # Contact page
│   │       └── projects/   # Projects page
│   └── components/
│       ├── about/          # About section components
│       ├── contact/        # Contact form component
│       ├── hooks/          # Custom React hooks
│       ├── models/         # Three.js 3D model components
│       ├── navigation/     # Navigation bar components
│       ├── FireFliesBackground.jsx
│       ├── HomeBtn.jsx
│       ├── RenderModel.jsx
│       ├── ResponsiveComponent.jsx
│       └── Sound.jsx
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

---

## 🛠️ Tech Stack

| Category         | Technology / Library        | Version     | Purpose                                 |
| ---------------- | --------------------------- | ----------- | --------------------------------------- |
| **Framework**    | Next.js                     | 14.1.1      | React framework with App Router + SSR   |
| **UI Library**   | React                       | ^18         | Component-based UI                      |
| **3D Rendering** | Three.js                    | ^0.162.0    | WebGL-based 3D graphics engine          |
| **3D + React**   | @react-three/fiber          | ^8.15.16    | React renderer for Three.js             |
| **3D Helpers**   | @react-three/drei           | ^9.99.5     | Useful helpers/abstractions for R3F     |
| **Animations**   | Framer Motion               | ^11.0.8     | Page transitions and element animations |
| **Styling**      | Tailwind CSS                | ^3.3.0      | Utility-first CSS framework             |
| **Forms**        | React Hook Form             | ^7.51.0     | Performant form state management        |
| **Email**        | @emailjs/browser            | ^4.2.0      | Send emails directly from the browser   |
| **Toasts**       | Sonner                      | ^1.4.3      | Toast notification system               |
| **Icons**        | Lucide React                | ^0.344.0    | Clean SVG icon library                  |
| **Classnames**   | clsx                        | ^2.1.0      | Conditional class name utility          |
| **Images**       | Sharp                       | ^0.33.2     | Next.js image optimisation              |
| **Linting**      | ESLint + eslint-config-next | ^8 / 14.1.1 | Code quality and consistency            |
| **PostCSS**      | PostCSS + Autoprefixer      | ^8 / ^10    | CSS processing pipeline for Tailwind    |

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root of the project:

```env
# GitHub Readme Stats API base URL
NEXT_PUBLIC_GITHUB_STATS_URL=https://github-readme-stats.vercel.app

# GitHub Streak Stats API base URL
NEXT_PUBLIC_GITHUB_STREAK_STATS_URL=https://github-readme-streak-stats.herokuapp.com

# EmailJS credentials (needed to enable the contact form)
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

> To get EmailJS credentials, sign up at [https://www.emailjs.com](https://www.emailjs.com), create a service + template, and copy the IDs.

---

## 🚀 Build From Scratch — Step by Step

Follow every step below to recreate this project from zero.

---

### Step 1 — Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher → [https://nodejs.org](https://nodejs.org)
- **npm** v9+ (comes with Node.js)
- **Git** → [https://git-scm.com](https://git-scm.com)
- A code editor — **VS Code** recommended → [https://code.visualstudio.com](https://code.visualstudio.com)

Verify installations:

```bash
node -v
npm -v
git --version
```

---

### Step 2 — Create a New Next.js App

```bash
npx create-next-app@14.1.1 my-portfolio
```

When prompted, answer:

```
✔ Would you like to use TypeScript? → No
✔ Would you like to use ESLint? → Yes
✔ Would you like to use Tailwind CSS? → Yes
✔ Would you like to use `src/` directory? → Yes
✔ Would you like to use App Router? → Yes
✔ Would you like to customize the default import alias? → No
```

Then navigate into the project:

```bash
cd my-portfolio
```

---

### Step 3 — Install All Dependencies

```bash
npm install three @react-three/fiber @react-three/drei framer-motion react-hook-form @emailjs/browser sonner lucide-react clsx sharp
```

---

### Step 4 — Configure Tailwind CSS

Open `tailwind.config.js` and extend it with these custom values:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
      backgroundImage: {
        "firefly-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254,254,91, 0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(254,254,91, 0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
```

---

### Step 5 — Set Up CSS Variables

In `src/app/globals.css`, define your color theme using CSS variables:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; /* #FEFE5B — yellow accent */
}
```

---

### Step 6 — Set Up the Root Layout

Edit `src/app/layout.js`:

```js
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: {
    template: "Your Name | Portfolio | %s",
    default: "Your Name | Full Stack Developer Portfolio",
  },
  description: "Your portfolio description here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter",
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
```

---

### Step 7 — Create the Data File

Create `src/app/data.js` — this is the single source of truth for your projects and navigation links:

```js
export const projectsData = [
  {
    id: 1,
    name: "Project Name",
    description: "Short description of your project.",
    date: "2024-01-01",
    demoLink: "https://github.com/yourusername",
  },
  // Add more projects...
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/yourusername",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
```

---

### Step 8 — Add 3D Models

1. Export your 3D models as `.glb` or `.gltf` files (you can find free models on [Sketchfab](https://sketchfab.com) or [Poly Pizza](https://poly.pizza)).
2. Place them inside `public/models/`.
3. Convert the model to a React component using the **gltfjsx** CLI:

```bash
npx gltfjsx public/models/your-model.glb -o src/components/models/YourModel.jsx
```

4. Wrap each model component inside a `<RenderModel>` component that provides the Three.js `<Canvas>`.

---

### Step 9 — Create the App Router Pages

The project uses Next.js App Router. Create the following folder structure under `src/app/`:

```
src/app/
├── page.js              ← Home
└── (sub pages)/
    ├── layout.js        ← Shared layout for sub-pages (navigation sidebar)
    ├── about/page.js
    ├── projects/page.js
    └── contact/page.js
```

Use a **route group** `(sub pages)` to share a layout (e.g., navigation) across multiple pages without affecting the URL.

---

### Step 10 — Add Background Images

1. Place your background images inside `public/background/`:
   - `home-background.png`
   - `about-background.png`
   - `projects-background.png`
   - `contact-background.png`

2. Use Next.js `<Image>` component with `fill` or `sizes="100vw"` and set `className="-z-50 fixed ... opacity-50"` to layer them behind content.

---

### Step 11 — Implement the FireFlies Background

Create `src/components/FireFliesBackground.jsx` — this renders animated glowing dots using CSS keyframes. Each firefly is a `<span>` with random `top`, `left`, `width`, `height`, and `animation-delay` styles generated via `Math.random()`.

Key CSS class needed in `globals.css`:

```css
.firefly {
  position: fixed;
  border-radius: 50%;
  background: radial-gradient(...);
  animation: flicker...;
  pointer-events: none;
  z-index: 0;
}
```

---

### Step 12 — Set Up the Contact Form with EmailJS

1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Create an **Email Service** and an **Email Template**
3. Copy your `Service ID`, `Template ID`, and `Public Key` into `.env.local`
4. In `src/components/contact/Form.jsx`, use `@emailjs/browser`:

```js
import emailjs from "@emailjs/browser";

emailjs.send(
  process.env.NEXT_PUBLIC_SERVICE_ID,
  process.env.NEXT_PUBLIC_TEMPLATE_ID,
  templateParams,
  { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY },
);
```

---

### Step 13 — Add Your Resume

Place your resume PDF as `resume.pdf` inside the `public/` folder. The download link in `data.js` (`/resume.pdf`) will serve it automatically via Next.js static file serving.

---

### Step 14 — Add Sound Toggle

Create `src/components/Sound.jsx` — a button that toggles background ambient audio. Use the HTML5 `<audio>` element with a `ref` and toggle `.play()` / `.pause()` on click. Place the audio file in `public/audio/`.

---

### Step 15 — Add GitHub Stats to the About Page

The About page pulls live stats using public APIs. No API key is needed:

```jsx
// Top Languages
<img src={`https://github-readme-stats.vercel.app/api/top-langs?username=yourusername&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF`} />

// Overall Stats
<img src={`https://github-readme-stats.vercel.app/api?username=yourusername&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF`} />

// Streak Stats
<img src={`https://github-readme-streak-stats.herokuapp.com?user=yourusername&theme=dark&hide_border=true&type=svg`} />

// Skill Icons
<img src={`https://skillicons.dev/icons?i=js,react,nodejs,express,mongodb`} />
```

---

### Step 16 — Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Step 17 — Build for Production

```bash
npm run build
npm start
```

---

### Step 18 — Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Go to [https://vercel.com](https://vercel.com) and click **New Project**.
3. Import your GitHub repository.
4. Add your environment variables from `.env.local` in the Vercel dashboard under **Settings → Environment Variables**.
5. Click **Deploy**.

Vercel automatically builds and deploys on every push to the `main` branch.

---

## 🎨 Customisation Checklist

Use this checklist when personalising the template:

- [ ] Update `src/app/data.js` — replace projects and social links with yours
- [ ] Update `src/app/layout.js` — change `metadata.title` and `metadata.description`
- [ ] Update `src/app/(sub pages)/about/page.js` — change the large heading name
- [ ] Update `src/components/about/index.jsx` — change bio text, stats, GitHub username in all image URLs
- [ ] Update `src/components/contact/Form.jsx` — change `to_name` and the fallback email address
- [ ] Replace `public/resume.pdf` with your actual resume
- [ ] Replace `public/audio/` files with your preferred ambient sound
- [ ] Replace `public/background/` images with your preferred backgrounds
- [ ] Replace `public/models/` with your preferred 3D models

---

## 📦 All Dependencies at a Glance

```bash
# Production dependencies
npm install next@14.1.1 react@^18 react-dom@^18
npm install three @react-three/fiber @react-three/drei
npm install framer-motion
npm install react-hook-form
npm install @emailjs/browser
npm install sonner
npm install lucide-react
npm install clsx
npm install sharp

# Dev dependencies (auto-installed with create-next-app)
npm install -D tailwindcss postcss autoprefixer eslint eslint-config-next
```

---

## 🔗 Useful Resources

| Resource            | Link                                                       |
| ------------------- | ---------------------------------------------------------- |
| Next.js Docs        | https://nextjs.org/docs                                    |
| Three.js Docs       | https://threejs.org/docs                                   |
| React Three Fiber   | https://docs.pmnd.rs/react-three-fiber                     |
| Drei (R3F Helpers)  | https://github.com/pmndrs/drei                             |
| Framer Motion       | https://www.framer.com/motion                              |
| Tailwind CSS        | https://tailwindcss.com/docs                               |
| EmailJS             | https://www.emailjs.com/docs                               |
| gltfjsx (3D → JSX)  | https://github.com/pmndrs/gltfjsx                          |
| Skill Icons         | https://skillicons.dev                                     |
| GitHub Readme Stats | https://github.com/anuraghazra/github-readme-stats         |
| GitHub Streak Stats | https://github.com/DenverCoder1/github-readme-streak-stats |
| Free 3D Models      | https://poly.pizza / https://sketchfab.com                 |
| Vercel Deployment   | https://vercel.com                                         |

---

## 👤 Author

**Ayush Tripathi**  
B.Tech IT — United College of Engineering and Research, Prayagraj  
📧 ayush.bhrg@gmail.com  
🔗 [GitHub](https://github.com/ayush8840) | [LinkedIn](https://linkedin.com/in/ayush8840)
