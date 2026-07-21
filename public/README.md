# KreatorAI — Website

## 📁 File Structure

```
kreatorai-landing/
│
├── public/                          ← Firebase hosting root
│   ├── index.html                   ← Shell: nav + footer only. Rarely needs editing.
│   │
│   ├── css/
│   │   └── styles.css               ← ALL shared styles (nav, footer, buttons, animations)
│   │                                  Edit here to change global look & feel
│   │
│   ├── js/
│   │   └── app.js                   ← Navigation logic, scroll, FAQ, counters
│   │                                  Edit here to add new pages or JS behaviour
│   │
│   ├── pages/                       ← ONE FILE PER PAGE — edit these for content
│   │   ├── home.html                ← Home page content
│   │   ├── services.html            ← Our Services page content
│   │   ├── about.html               ← About Us + Founder page content
│   │   └── pricing.html             ← Pricing page content
│   │
│   ├── assets/
│   │   └── images/
│   │       ├── logo.png             ← Main logo shown in nav (fallback: Icon-192.png)
│   │       ├── photo.jpg            ← Founder's photo (shown in About page)
│   │       ├── Icon-192.png         ← PWA icon
│   │       ├── Icon-512.png         ← OG image
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       └── apple-touch-icon.png
│   │
│   ├── firebase.json                ← Firebase hosting config
│   └── manifest.json                ← PWA manifest (keep existing)
```

---

## ✏️ How to Update Content

| What you want to change | Edit this file |
|---|---|
| Home page text / tools / testimonials | `pages/home.html` |
| Services list / descriptions | `pages/services.html` |
| About story / founder bio | `pages/about.html` |
| Pricing plans / comparison table | `pages/pricing.html` |
| Nav links / footer links | `index.html` |
| Colors / fonts / animations | `css/styles.css` |
| Add a new page | Create `pages/newpage.html`, add to PAGES array in `js/app.js`, add nav link in `index.html` |

---

## 🖼️ Images — Firebase Hosting

All images must be placed in `public/assets/images/`.
They are referenced in HTML as `assets/images/filename.ext` (relative paths, no leading slash).

Firebase serves them at: `https://www.kreatoraistudio.com/assets/images/filename.ext`

**Key images:**
- `logo.png` → Used in nav bar and footer (your KreatorAI logo)
- `photo.jpg` → Neil's founder photo on About page (can also be .png)
- `Icon-192.png` → Fallback if logo.png fails; also used for PWA

---

## 🚀 Deploy to Firebase

```bash
# From the project root (where firebase.json is)
firebase deploy --only hosting
```

Or if you want to deploy just the public folder:
```bash
firebase deploy
```

---

## ➕ Adding a New Page

1. Create `pages/yourpage.html` with your content
2. In `js/app.js`, add `'yourpage'` to the `PAGES` array
3. In `index.html`, add a nav link: `<a data-page="yourpage" onclick="showPage('yourpage')">Page Name</a>`
4. Add it to the mobile menu too
5. Deploy

---

## 🎨 Changing the Theme

All CSS variables are at the top of `css/styles.css`:

```css
:root {
  --p1:  #7c4dff;   /* primary purple */
  --pk:  #ff4d8d;   /* accent pink */
  --grad: linear-gradient(135deg,#7c4dff 0%,#bf5cff 52%,#ff4d8d 100%);
  --bg:  #07070f;   /* background */
  ...
}
```

Change these to instantly retheme the entire site.
