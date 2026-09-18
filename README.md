# Gayatri Fabrication Works

Official website for **Gayatri Fabrication Works** — Leading manufacturers of Commercial Kitchen Equipments for Hotels, Restaurants, Bars, Bakeries & Industrial Canteens based in Andheri East, Mumbai, Maharashtra (Established 1996).

---

## 🚀 Quick Start (Local Development)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` folder.

---

## 🌐 Deploy to GitHub Pages

This project is pre-configured for seamless deployment to GitHub Pages.

### Method 1: Automated Deployment via GitHub Actions (Recommended)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit for GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. Enable GitHub Actions for Pages:
   - Go to your GitHub repository on github.com.
   - Click **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
   
3. Every time you push changes to `main`, GitHub Actions will automatically build and publish your site!

### Method 2: Manual Deployment with `gh-pages`

You can also deploy manually directly from your machine:
```bash
npm run deploy
```
This runs `npm run build` and publishes the `dist/` directory to the `gh-pages` branch.

---

## ⚙️ Custom Domain Configuration (Optional)

If you are using a custom domain (e.g., `gayatrifabricationworks.com`):
1. In your GitHub repository, go to **Settings** &rarr; **Pages**.
2. Under **Custom domain**, enter your domain name (e.g., `www.gayatrifabricationworks.com`).
3. Point your domain's DNS CNAME/A records to GitHub Pages as instructed by GitHub.

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Actions deployment workflow
├── public/
│   └── images/               # Product photos, client logos & branding assets
├── src/
│   ├── components/           # Modular React components (Header, Sections, Modal, etc.)
│   ├── data/                 # Site data, categories, product specifications & client logos
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # React DOM entry point
│   └── index.css             # Tailwind CSS styling
├── index.html                # Main HTML entry with SEO & OpenGraph tags
├── package.json              # Project dependencies & build/deploy scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration with relative base path support
```

---

## 🛠️ Built With

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**
