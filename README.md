# ⚙️ Dhanaraj V — DevOps Portfolio
### Built with Vite + React + Framer Motion

A production-ready, animated personal portfolio website featuring:
- ⚡ Vite (lightning-fast dev & build)
- ⚛️ React 18 with CSS Modules
- 🎞️ Framer Motion animations
- 🎨 Dual neon theme — Cyan `#00e5ff` + Coral `#ff4d6d`
- 📱 Fully responsive + mobile menu
- 🖱️ Custom cursor with lerp smoothing
- ⌨️ Typewriter hero terminal
- 🔢 Animated scroll-triggered counters
- 🃏 3D tilt project cards
- 🌀 Rotating orbit visual

---

## 📁 Project Structure

```
react-portfolio/
├── index.html                  ← Root HTML (Vite entry)
├── vite.config.js              ← Vite config
├── package.json                ← Dependencies
├── public/
│   └── Dhanaraj_DevOps_Engineer.pdf  ← Your resume (add this!)
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root component
    ├── App.css                 ← Global styles + CSS vars
    ├── data/
    │   └── portfolio.js        ← ✏️ ALL your content lives here
    ├── hooks/
    │   └── useInView.js        ← Scroll intersection hook
    └── components/
        ├── Cursor.jsx / .module.css     (inside App.css)
        ├── Navbar.jsx / Navbar.module.css
        ├── Hero.jsx   / Hero.module.css
        ├── Stats.jsx  / Stats.module.css
        ├── About.jsx  / About.module.css
        ├── Skills.jsx / Skills.module.css
        ├── Experience.jsx / Experience.module.css
        ├── Projects.jsx   / Projects.module.css
        ├── Education.jsx  / Education.module.css
        ├── Contact.jsx    / Contact.module.css
        └── Footer.jsx     / Footer.module.css
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js v18+** — Download: https://nodejs.org
- **Git** — Download: https://git-scm.com

### Step 1 — Install dependencies
```bash
cd react-portfolio
npm install
```

### Step 2 — Add your resume PDF
Copy your resume PDF into the `public/` folder and name it:
```
public/Dhanaraj_DevOps_Engineer.pdf
```

### Step 3 — Start development server
```bash
npm run dev
```
Opens at → **http://localhost:5173**

### Step 4 — Build for production
```bash
npm run build
```
Creates optimized files in `dist/` folder.

### Step 5 — Preview production build locally
```bash
npm run preview
```

---

## ✏️ How to Update Your Content

**All content is in one file:** `src/data/portfolio.js`

You never need to touch any component file — just update the data file:

| Section | Variable | What to Edit |
|---------|----------|-------------|
| Name, email, links | `personal` | Phone, email, LinkedIn, GitHub |
| Top metrics | `stats` | Numbers, labels |
| About highlights | `aboutCards` | Impact cards |
| Skills | `skills` | Tech stack tags |
| Certifications | `certifications` | Add/remove certs |
| Work history | `experience` | Role, company, bullets |
| Projects | `projects` | Title, desc, tech |
| Education | `education` | Degree, uni, year |
| Hero orbit | `orbitBadges` | Floating tech labels |
| Typewriter | `terminalLines` | Cycling text in terminal |

---

## 🌐 Deployment — Step by Step

---

### 🟦 Option A — Netlify (Recommended — Free + Auto HTTPS)

#### 1. Create GitHub Repo
```bash
cd react-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

Go to https://github.com → New repository → Name: `portfolio` → Public → Create

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### 2. Deploy on Netlify
1. Go to https://netlify.com → Sign up free (use GitHub)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select your `portfolio` repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"** 🎉

Your site is live at `https://random-name.netlify.app`

#### 3. Buy & Connect Your Domain
**Recommended registrars:**
- https://porkbun.com — cheapest (`.dev` ~$10/yr, `.com` ~$9/yr)
- https://namecheap.com — reliable, good UI
- https://cloudflare.com/registrar — at-cost pricing

**Suggested domains:**
- `dhanarajv.dev`
- `dhanarajdevops.com`
- `dhanaraj.engineer`

#### 4. Connect Domain to Netlify
1. In Netlify Dashboard → Your site → **Domain management**
2. Click **"Add custom domain"** → Enter your domain (e.g. `dhanarajv.dev`)
3. Netlify shows DNS records to add

**At your domain registrar → DNS Settings → Add these records:**
```
Type  | Name | Value
------+------+-------------------------------
A     |  @   | 75.2.60.5
CNAME | www  | your-netlify-site.netlify.app
```

5. Back in Netlify → **"Verify DNS configuration"**
6. Click **"Provision SSL certificate"** → Netlify gives free HTTPS ✅
7. DNS propagation: 10 min – 48 hours

---

### 🟨 Option B — GitHub Pages (Free, no backend needed)

#### 1. Install gh-pages package
```bash
npm install --save-dev gh-pages
```

#### 2. Update `vite.config.js`
```js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',   // ← must match your GitHub repo name
})
```

#### 3. Add deploy script to `package.json`
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

#### 4. Deploy
```bash
npm run build
npm run deploy
```

#### 5. Enable GitHub Pages
Go to your repo → **Settings** → **Pages** → Source: `gh-pages` branch → Save

Site live at: `https://dhanaraj-v2002.github.io/portfolio`

#### 6. Custom Domain on GitHub Pages
1. Add `CNAME` file in `public/` folder:
   ```
   dhanarajv.dev
   ```
2. At your registrar → DNS:
   ```
   A     | @   | 185.199.108.153
   A     | @   | 185.199.109.153
   A     | @   | 185.199.110.153
   A     | @   | 185.199.111.153
   CNAME | www | dhanaraj-v2002.github.io
   ```
3. In GitHub → Settings → Pages → Custom domain → Enter domain → Save
4. Check **"Enforce HTTPS"**

---

### 🟪 Option C — Vercel (Zero-config, instant)

```bash
npm install -g vercel
vercel          # Follow prompts → auto-detects Vite
```

Or via web:
1. https://vercel.com → Sign up with GitHub
2. **New Project** → Import `portfolio` repo
3. Framework: **Vite** (auto-detected)
4. Deploy → live in ~30 seconds

Custom domain: Vercel Dashboard → Project → **Settings** → **Domains** → Add domain

---

## 🔄 Update Workflow (After Initial Deploy)

Make changes → push → auto-deploys:

```bash
# Edit src/data/portfolio.js (or any component)
git add .
git commit -m "Update skills section"
git push
# Netlify/Vercel redeploys in ~30 seconds automatically ✅
```

---

## ➕ Optional Enhancements

### Add a Contact Form (Formspree — Free)
1. Go to https://formspree.io → Sign up → Create form → Copy endpoint ID
2. In `src/components/Contact.jsx`, add inside the CTA box:
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST" className={styles.form}>
  <input  type="text"  name="name"    placeholder="Your Name"    required />
  <input  type="email" name="email"   placeholder="Your Email"   required />
  <textarea name="message" placeholder="Your Message"            required />
  <button type="submit" className="btn-primary">Send Message 🚀</button>
</form>
```

### Add Google Analytics
Paste before `</head>` in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Open Graph Image (LinkedIn preview)
1. Create a `1200x630` image → save as `public/og-image.png`
2. In `index.html`:
```html
<meta property="og:image" content="https://yourdomain.com/og-image.png" />
```

### Performance Testing
After deployment, test at:
- https://pagespeed.web.dev
- https://web.dev/measure

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Vite 5 | Lightning-fast build tool |
| React 18 | UI framework |
| Framer Motion 11 | Scroll & mount animations |
| React Icons | Icon library |
| CSS Modules | Scoped component styles |
| Google Fonts | Syne (display) + Space Mono |

---

## 🆘 Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm install` fails | Make sure Node.js ≥ 18 is installed |
| Fonts not loading | Check internet; fonts load from Google CDN |
| Build fails | Run `npm install` first, then `npm run build` |
| White screen on GitHub Pages | Set `base: '/repo-name/'` in `vite.config.js` |
| DNS not propagating | Check https://dnschecker.org — wait up to 48 hrs |
| Animations not working | Make sure JS is enabled; check browser console |

---

## 📄 License

Personal portfolio — all rights reserved by Dhanaraj V.

---

*Built with ❤️ + ⚙️ — Dhanaraj V, DevOps Engineer*
