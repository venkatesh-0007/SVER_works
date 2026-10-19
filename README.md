# Sri Venkateswara Electrical & Rewinding Works

A complete, production-ready, mobile-first business website and digital visiting card for **Sri Venkateswara Electrical & Rewinding Works**, owned and operated by **Kamesh** in Innespeta, Rajahmundry.

Designed specifically for smartphone customers to quickly understand services, view authentic workshop photos, call the shop, start a WhatsApp conversation, navigate via Google Maps, and save the business contact (.vcf) with one tap.

---

## 📁 Project Structure

```text
sri-venkateswara-electrical/
├── index.html              # Semantic HTML5 single-page application
├── styles.css              # Custom mobile-first responsive CSS (vanilla, no frameworks)
├── script.js               # Interactive features (vCard, carousel, modal, links)
├── business-config.js      # Centralized business information and service catalog
├── favicon.svg             # Electrical motor coil and spark favicon
├── README.md               # Documentation and deployment guide
└── public/
    └── images/
        ├── owner.webp               # High-performance WebP photo of owner Kamesh
        ├── owner.png                # Original transparent cutout of owner photo
        ├── owner.jpg                # Fallback JPEG version of owner photo
        ├── visiting-card-front.webp # Optimized WebP of printed visiting card
        ├── visiting-card-front.png  # High-res visiting card source image
        ├── visiting-card-front.jpg  # Fallback JPEG of visiting card
        ├── work-01.webp             # Motor rewinding station workshop photo slot
        ├── work-02.webp             # Appliance repair bench workshop photo slot
        ├── work-03.webp             # Electrical diagnostics workshop photo slot
        ├── logo.svg                 # Scalable vector brand logo
        └── logo.png                 # Crisp raster brand logo
```

---

## ⚡ Key Features

1. **One-Tap Contact Actions**:
   - **Direct Call**: `tel:+919866394687`
   - **WhatsApp Chat**: `https://wa.me/919866394687` pre-filled with an inquiry message
   - **Google Maps Navigation**: Exact link `https://maps.app.goo.gl/VTHYkzrRNHAbTTAW9`
   - **Save Contact (.vcf)**: Generates and downloads a valid vCard 3.0 contact file directly to the customer's phone address book.
2. **Fixed Mobile Action Bar**:
   - Stays thumb-friendly at the bottom on mobile devices (< 860px) with Call, WhatsApp, and Directions buttons.
   - Respects mobile viewport safe area (`env(safe-area-inset-bottom)`).
   - Content has automatic bottom padding so no text is ever obscured.
3. **Digital Visiting Card & Modal**:
   - Displays all confirmed details matching the official visiting card.
   - Includes high-resolution preview with an accessible modal lightbox to view the full card without distortion.
4. **Touch-Friendly Work Carousel**:
   - Supports touch swipe gestures on mobile and keyboard navigation.
   - Prev/Next controls, active slide indicators, and slide counter.
   - Built with CSS scroll snap for smooth 60fps performance and zero layout shift (`aspect-ratio: 16 / 10`).
   - Respects `prefers-reduced-motion`.
5. **Verified Service Offerings**:
   - Strictly derived from the official visiting card: Motor Rewinding, Washing Machines, Refrigerators, ACs, Water Heaters (Geysers), Air Coolers & Fans, Microwave Ovens, Wet Grinders, and Used Appliance Trade.
   - English and Telugu service titles.
6. **Centralized Configuration (`business-config.js`)**:
   - Update phone numbers, WhatsApp text, address, or service cards in one place without touching HTML.

---

## 🚀 How to Run Locally

Since this is built with pure Vanilla HTML5, CSS3, and JavaScript, **no build step, bundler, or node_modules** are required.

### Option 1: Python (Built-in on macOS / Linux / Windows)
Open your terminal in this directory and run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 2: Node.js `npx serve`
```bash
npx serve .
```

### Option 3: VS Code / IDE Live Server
Simply right-click `index.html` and choose **Open with Live Server**.

---

## 🖼️ How to Replace Owner & Work Photos

### 1. Replacing Owner Photo
- Place your new photo inside `public/images/`.
- Name it `owner.webp` (or `owner.png` / `owner.jpg`).
- For best results on mobile, use a portrait-oriented photo (aspect ratio ~ 4:5 or 3:4).
- The page will automatically load `owner.webp` and fall back to `owner.png` / `owner.jpg`.

### 2. Replacing Workshop Work Photos
- Save your actual photos from the workshop or repairs into `public/images/` with the names:
  - `work-01.webp` (e.g., Motor rewinding work)
  - `work-02.webp` (e.g., Washing machine / Fridge repair)
  - `work-03.webp` (e.g., AC service / Electrical inspection)
- You can add additional photos by adding new entries to the `gallery` array in `business-config.js`.

---

## ✏️ How to Update Business Details in `business-config.js`

Open `business-config.js` in any text editor. You can update:
- `phone`: Primary mobile number
- `secondaryPhone`: Alternative shop number
- `whatsappNumber`: WhatsApp number
- `mapsUrl`: Google Maps location URL
- `address`: Workshop street, landmark, and Telugu description
- `services`: Add, remove, or edit service titles, descriptions, and badges
- `meta.canonicalUrl`: Set to your live production HTTPS domain once deployed

---

## 📋 Verified Business Details & Confirmation Checklist

### Confirmed Details (From Official Visiting Card & Prompt):
- **Business Name**: Sri Venkateswara Electrical & Rewinding Works
- **Telugu Name**: శ్రీ వెంకటేశ్వర రీ-వైండింగ్ వర్క్స్
- **Proprietor**: Kamesh (వి. కామేష్)
- **Primary Phone**: `+91 9866394687`
- **Secondary Phone**: `+91 8499909666` (printed on card)
- **WhatsApp**: `+91 9866394687`
- **Workshop Address**: Door No. 36-7-12, Innespeta, Opposite State Bank, Rajahmundry (డోర్ నెం. 36-7-12, ఇన్నాపేట, స్టేట్ బ్యాంక్ ఎదురుగా, రాజమండ్రి)
- **Google Maps Link**: `https://maps.app.goo.gl/VTHYkzrRNHAbTTAW9`
- **Specialties**: Micro-ovens, Motors, Grinders, Geysers, Washing Machines, Air Coolers, ACs, Refrigerators, Electrical repairs, and Buy/Sell/Repair of appliances.

### Items Still Pending User Confirmation (Intentionally Not Fabricated):
- **Working Hours**: Not listed on the card (e.g., Mon–Sat 9:00 AM – 9:00 PM). Can be added to `business-config.js` once confirmed.
- **Shop Email Address**: Not listed on card (left out to prevent false leads).
- **Exact Pincode**: Innespeta, Rajahmundry pincode (e.g. 533101).

---

## 🌐 Free Static Hosting Deployment Guide

### Method A: Deploy on GitHub Pages (Recommended - 100% Free Forever)
1. Initialize a git repository if not already done:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sri Venkateswara Electrical website"
   ```
2. Create a new repository on [GitHub](https://github.com) named `sri-venkateswara-electrical`.
3. Push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/sri-venkateswara-electrical.git
   git branch -M main
   git push -u origin main
   ```
4. Go to **Settings** > **Pages** in your GitHub repository.
5. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
6. Your website will be live in 1–2 minutes at:
   `https://<your-username>.github.io/sri-venkateswara-electrical/`

### Method B: Deploy on Vercel (100% Free)
1. Install Vercel CLI (optional) or push to GitHub and import into [Vercel](https://vercel.com).
2. If using Vercel CLI:
   ```bash
   npx vercel
   ```
3. Follow the prompts:
   - Set project name: `sri-venkateswara-electrical`
   - Framework preset: `Other` (Static HTML)
   - Root directory: `./`
4. Instant live URL with global CDN: `https://sri-venkateswara-electrical.vercel.app`

### Method C: Deploy on Netlify (100% Free)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `sri-venkateswara-electrical` folder onto the webpage.
3. Your site is live immediately on a free `.netlify.app` subdomain or your own custom domain.
