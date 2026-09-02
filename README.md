# Digital 19th Monthsary Explosion Box for Iyah ♡
### Handmade with love by Nash

An interactive digital gift, explosion box, and scrapbook designed specifically for **Iyah** on your **19th Monthsary** (1 year and 7 months).

---

## 📁 Project Structure

```
19th/
├── index.html           # Main explosion box & scrapbook HTML
├── style.css            # Scrapbook styling, tactile animations, responsive mobile design
├── script.js           # Layer transitions, audio controller, interactive quiz & Adobo mission
├── data.js             # ⭐️ ALL relationship text, dates, quiz questions, and letter content
├── assets/
│   ├── photos/         # Put your real photos here! (JPG, PNG, WEBP, or SVG)
│   ├── stickers/       # Hello Kitty bow, hamster doodle, stamps
│   └── music/          # Place your favorite background song here as bgm.mp3 (optional)
└── README.md           # This customization guide
```

---

## 🎨 How to Customize (Quick & Easy)

Everything is centralized inside **`data.js`** so you don't have to touch HTML or CSS:

### 1. Adding Your Real Photos
1. Put your photos inside `assets/photos/` (e.g., `first_irl.jpg`, `arrival.jpg`, `mall.jpg`, `foodpark.jpg`, `adobo.jpg`).
2. Open `data.js` and update the `photoPath` fields to point to your files:
   ```javascript
   photoPath: "assets/photos/my_photo_name.jpg"
   ```

### 2. Inserting Your Final Letter
1. Open `data.js`.
2. Scroll to `letterSection` at the bottom.
3. Replace `[NASH'S FINAL LETTER GOES HERE]` with your personal Taglish letter:
   ```javascript
   letterSection: {
     tag: "LAYER 07",
     envelopeLabel: "For My Favorite Person In The World ♡",
     letterHeading: "To My Dearest Iyah,",
     letterBody: `Dear Iyah,
     
     Happy 19th monthsary, Love...
     [Paste your message here]`
   }
   ```

### 3. Adding Background Music (Optional)
- Place an audio file named **`bgm.mp3`** inside the `assets/music/` folder.
- If no custom mp3 is added, the site automatically generates a gentle, soft ambient lullaby chime so it works right away!

---

## 🚀 How to Run Locally

1. **Option A (VS Code Live Server)**:
   - Open this folder in VS Code.
   - Right-click `index.html` and click **"Open with Live Server"**.

2. **Option B (Node.js)**:
   ```bash
   npx serve .
   ```

3. **Option C (Python)**:
   ```bash
   python -m http.server 3000
   ```

---

## 🌐 How to Deploy (Free & Mobile-Ready)

### Option 1: Vercel / Netlify (Recommended)
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Drag and drop this `19th` folder into the deployment box.
3. You will get a live link (e.g., `https://for-iyah-19th.vercel.app`) that you can send directly to Iyah!

### Option 2: GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages** and select the `main` branch.

---

## 🎁 Experience Highlights

- **Tactile Explosion Box Intro**: Ribbon unties and 3D lid lifts on tap.
- **Progressive Discovery**: Each layer unfolds in sequence:
  1. `🎮 Layer 1`: Roblox Genesis (Nov 2, 2024)
  2. `🕵️ Layer 2`: Case File: "You Liked Me First" (Meta AI dossier reconstruction)
  3. `✨ Layer 3`: First Time Seeing Each Other IRL (Dec 7, 2025)
  4. `🛵 Layer 4`: The 6-Day Cavite Visit Scrapbook (May 28 – June 2, 2026) + Interactive Adobo Mission
  5. `🎮 Layer 5`: "How Well Do You Know Us?" Quiz with Taglish banter
  6. `💭 Layer 6`: Real Story — Vulnerability, Apology, Pride & One Roof Dream
  7. `💌 Layer 7`: Wax-Sealed Envelope & Unfolding Handwritten Letter
- **Easter Eggs**:
  - `⚠️ DO NOT CLICK` button (Rage-bait prank)
  - Hidden goofy hamster sticker
  - Hello Kitty ribbon accents

Happy 19th Monthsary to both of you! ♡
