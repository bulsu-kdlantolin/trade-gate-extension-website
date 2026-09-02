<div align="center">

# TradeGate — Official Website

**The high-performance, conversion-optimized landing platform for TradeGate Chrome Extension.**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-E5B82A?style=flat-square)](LICENSE)
[![Telegram Community](https://img.shields.io/badge/Telegram-Community-26A5E4?style=flat-square&logo=telegram&logoColor=white)](https://t.me/tradegatejournal)

[🌐 Live Website](https://tradegate.app) · [🧩 Chrome Web Store](https://chromewebstore.google.com/detail/tradegate-trading-journal/fjaifapnjdlecekhffilonafpnkeefdj?authuser=1&hl=en) · [💬 Telegram Community](https://t.me/tradegatejournal) · [💛 Support Development](https://tradegate.app/support)

</div>

---

## 📌 Overview

**TradeGate** is a local-first, privacy-focused Chromium extension engineered to eliminate emotional trading mistakes (revenge trades, overleveraging, breaking setups) by placing a **hard mechanical gate** between a trader's impulse and their order execution.

This repository contains the source code for the official marketing website, interactive feature simulator, documentation, and community hub.

---

## ✨ Key Features & Architecture

### 1. 🖥️ Interactive Live Terminal Simulator
- High-fidelity visual simulation of TradeGate's side panel workflow.
- **Stage 01:** Mandatory pre-trade checklist rules with physical submit-lock physics.
- **Stage 02:** Real-time form typing animation with dynamic calculation of **Target R:R (1 : 3.25 R)**, **Dollar Risk ($125.00)**, and **Estimated Net Profit (+$406.25)**.
- **Stage 03:** Instant journal trade card snapshot stored directly to `chrome.storage.local`.

### 2. 🎨 Dual-Mode Theme Engine with View Transitions
- **OLED Dark Mode** (`#000000` / `#0A0A0A`) & **Refined Light Mode** (`#F8F7F4` / `#FFFFFF`).
- Smooth circular radial spread animations via `document.startViewTransition`.
- 8 authentic exchange color themes previewer: **TradeGate Gold**, **Binance**, **MEXC**, **Bybit**, **OKX**, **KuCoin**, **Bitget**, and **Mochi-Web3**.

### 3. 🛡️ 100% Local-First & Zero-Telemetry Transparency
- Clear architectural separation between the extension (100% offline, zero servers, zero trackers) and the marketing site (privacy-friendly, anonymized Vercel web analytics).
- Fully compliant **Privacy Policy** and **Terms of Service** subpages.

### 4. 💛 Multi-Chain Crypto Donation Hub
- Integrated direct-support portal supporting **ETH (Base)**, **SOL (Solana)**, **USDT (TRC-20)**, **USDC (EVM)**, and **LTC (Litecoin)** with one-click copy feedback.

### 5. 🔍 Complete SEO & Social Media Infrastructure
- Dynamic SPA document titles on all route transitions.
- High-resolution `1200x630` social card preview (`public/og-image.png`) with complete OpenGraph & Twitter Card tags.
- Search-engine ready `robots.txt` and priority-weighted `sitemap.xml`.

---

## 📂 Project Structure

```
trade-gate-extension-website/
├── public/
│   ├── favicon.svg               # Vector brand shield favicon
│   ├── og-image.png              # 1200x630 social share card
│   ├── robots.txt                # Search crawler instructions
│   └── sitemap.xml               # XML sitemap for search engines
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky header with theme toggle & Chrome CTA
│   │   │   └── Footer.tsx        # Responsive footer with legal & community links
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero banner with value proposition & simulator
│   │   │   ├── Features.tsx      # Psychological flaws vs mechanical solution bento
│   │   │   ├── Themes.tsx        # 8-exchange interactive theme switcher
│   │   │   ├── HowItWorks.tsx    # 3-step playbook & quick installation guide
│   │   │   ├── ProfessionalTools.tsx # 6 side panel feature snapshots
│   │   │   ├── PrivacyTrust.tsx  # Local-first zero data collection guarantee
│   │   │   └── FinalCTA.tsx      # High-conversion bottom install section
│   │   └── ui/
│   │       └── TerminalMock.tsx  # Animated multi-stage trader terminal mockup
│   ├── context/
│   │   └── ThemeModeContext.tsx  # Dark/Light mode state provider with view transition
│   ├── data/
│   │   ├── exchangeData.ts       # Authentic exchange branding & SVG assets
│   │   └── themes.ts             # Color palette tokens for all exchange themes
│   ├── pages/
│   │   ├── HomePage.tsx          # Main single-page showcase
│   │   ├── PrivacyPage.tsx       # Local-first Privacy Policy & disclosures
│   │   ├── TermsPage.tsx         # Terms of Service & usage disclaimers
│   │   └── SupportPage.tsx       # Crypto donation addresses & Telegram community
│   ├── styles/
│   │   └── globals.css           # Design tokens, laser dividers, scroll animations
│   ├── App.tsx                   # Main router with smooth scroll-to-top behavior
│   └── main.tsx                  # Application bootstrap with Vercel Analytics
├── tailwind.config.js            # Tailwind v3 with dynamic opacity variable resolver
├── vite.config.ts                # Vite bundler configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bulsu-kdlantolin/trade-gate-extension-website.git
   cd trade-gate-extension-website
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   pnpm build
   # or
   npm run build
   ```

5. **Preview the production bundle locally:**
   ```bash
   pnpm preview
   # or
   npm run preview
   ```

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Component architecture & UI rendering |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) | Client-side routing with hash anchor support |
| **Bundler** | [Vite 5](https://vitejs.dev/) | Lightning-fast HMR and optimized production builds |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first responsive design & custom CSS variables |
| **Icons** | [Lucide React](https://lucide.dev/) | Crisp, lightweight UI vector icons |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) | Anonymized, privacy-preserving aggregate traffic metrics |
| **Typography** | Inter & JetBrains Mono | High-legibility financial & developer typography |

---

## 🎨 Design Tokens & Aesthetics

TradeGate uses a custom design system built with CSS custom properties and Tailwind opacity helpers:

```css
:root, [data-mode="dark"] {
  --bg-base: #000000;
  --bg-surface: #0A0A0A;
  --bg-elevation: #121212;
  --border-color: #2C2412;
  --border-muted: #3A3018;
  --text-primary: #FFFFFF;
  --text-secondary: #B8AEA2;
  --brand-gold: #E5B82A;
  --trade-green: #00E676;
  --trade-red: #FF3366;
}
```

---

## 💬 Community & Support

- **Telegram Community:** [t.me/tradegatejournal](https://t.me/tradegatejournal)
- **Chrome Web Store:** [Install Extension](https://chromewebstore.google.com/detail/tradegate-trading-journal/fjaifapnjdlecekhffilonafpnkeefdj?authuser=1&hl=en)
- **Support & Donations:** [tradegate.app/support](https://tradegate.app/support)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
