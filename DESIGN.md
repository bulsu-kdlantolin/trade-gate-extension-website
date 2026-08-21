# TradeGate Extension — Design System

> Reverse-engineered from the live extension codebase at
> `trading-journal-extension/src/styles/globals.css`,
> `tailwind.config.js`, `src/data/themeStyles.ts`, and component files.
> This document is the **single source of truth** for the showcase website.

---

## 1. Design Philosophy

TradeGate's visual identity is **"Terminal Luxury"** — a pitch-black canvas overlaid with
high-contrast metallic gold accents, inspired by professional exchange trading terminals
(Binance, Bybit, OKX). The UI uses:

- **True OLED Black** backgrounds for maximum contrast and visual density
- **Royal Metallic Gold** as the signature brand accent — never generic yellow
- **Vivid Mint Green / Velvet Crimson** for bullish/bearish semantic coloring
- **Glassmorphism-lite** surface elevation with subtle border glow on hover
- **Emil Kowalski tactile physics** on every interactive element (spring curves, press-scale, micro-lift)

---

## 2. Core Color Palette — TradeGate Signature Theme (Default)

### 2.1 Dark Mode (Primary — Website Default)

| Token                  | CSS Variable             | RGB Value            | Hex       | Usage                              |
|------------------------|--------------------------|----------------------|-----------|-------------------------------------|
| `--bg-base`            | `--bg-base-rgb`          | `0, 0, 0`           | `#000000` | Page canvas, true pitch black       |
| `--bg-surface`         | `--bg-surface-rgb`       | `10, 10, 10`        | `#0A0A0A` | Cards, panels, modal backgrounds    |
| `--bg-elevation`       | `--bg-elevation-rgb`     | `18, 18, 18`        | `#121212` | Elevated panels, hover surfaces     |
| `--border-color`       | `--border-color-rgb`     | `44, 36, 18`        | `#2C2412` | Dark gold hairline border           |
| `--border-muted`       | `--border-muted-rgb`     | `58, 48, 24`        | `#3A3018` | Subtle gold accent border           |
| `--text-main`          | `--text-primary-rgb`     | `255, 255, 255`     | `#FFFFFF` | Primary text, crisp diamond white   |
| `--text-secondary`     | `--text-secondary-rgb`   | `184, 174, 162`     | `#B8AEA2` | Warm champagne silver labels        |
| `--text-muted`         | `--text-muted-rgb`       | `120, 113, 108`     | `#78716C` | Muted dark slate descriptions       |
| `--brand-accent`       | `--brand-yellow-rgb`     | `229, 184, 42`      | `#E5B82A` | Royal metallic gold — brand accent  |
| `--brand-accent-hover` | `--brand-yellow-hover-rgb` | `247, 209, 84`   | `#F7D154` | Radiant gold highlight on hover     |
| `--bullish`            | `--trade-green-rgb`      | `0, 230, 118`       | `#00E676` | Vivid mint emerald — long/win/buy   |
| `--bullish-hover`      | `--trade-green-hover-rgb`| `24, 255, 137`      | `#18FF89` | Green hover state                   |
| `--bearish`            | `--trade-red-rgb`        | `255, 51, 102`      | `#FF3366` | Vivid velvet crimson — short/loss   |
| `--bearish-hover`      | `--trade-red-hover-rgb`  | `255, 82, 126`      | `#FF527E` | Red hover state                     |
| `--text-cta`           | —                        | —                    | `#000000` | Text on brand-accent CTA buttons    |

### 2.2 Light Mode

| Token                  | RGB Value            | Hex       | Usage                           |
|------------------------|----------------------|-----------|----------------------------------|
| `--bg-base`            | `248, 247, 244`      | `#F8F7F4` | Warm ivory canvas                |
| `--bg-surface`         | `255, 255, 255`      | `#FFFFFF` | Card/panel white                 |
| `--bg-elevation`       | `240, 238, 232`      | `#F0EEE8` | Elevated ivory panel             |
| `--border-color`       | `224, 218, 204`      | `#E0DACC` | Warm sand border                 |
| `--brand-accent`       | `194, 145, 12`       | `#C2910C` | Deep antique gold                |
| `--bullish`            | `2, 154, 96`         | `#029A60` | Muted forest green               |
| `--bearish`            | `224, 53, 78`        | `#E0354E` | Muted crimson rose               |
| `--text-main`          | `15, 14, 12`         | `#0F0E0C` | Near-black warm charcoal         |
| `--text-muted`         | `138, 130, 120`      | `#8A8278` | Warm taupe muted text            |
| `--text-cta`           | —                    | `#FFFFFF` | White text on brand CTA buttons  |

---

## 3. Exchange Theme System

TradeGate supports **8 exchange-branded themes**, each with calibrated dark and light modes.
The website should showcase this theming capability as a key feature.

### 3.1 Theme Reference Table (Dark Mode)

| Theme ID       | Display Name            | `--bg-base`  | `--bg-surface` | `--brand-accent` | `--bullish`  | `--bearish`  | `--text-main` |
|----------------|-------------------------|-------------|----------------|-------------------|-------------|-------------|---------------|
| `tradegate`    | TradeGate Black & Gold  | `#000000`   | `#0A0A0A`      | `#E5B82A` 🟡      | `#00E676`   | `#FF3366`   | `#FFFFFF`     |
| `binance`      | Binance Gold            | `#181A20`   | `#1E2329`      | `#FCD535` 🟡      | `#0ECB81`   | `#F6465D`   | `#EAECEF`     |
| `mexc`         | MEXC Royal Blue         | `#0E1014`   | `#14171C`      | `#2864FF` 🔵      | `#26B478`   | `#F6465D`   | `#EAECEF`     |
| `bybit`        | Bybit Amber Gold        | `#0C0D10`   | `#17181E`      | `#F7A600` 🟠      | `#00BD84`   | `#EF454A`   | `#FFFFFF`     |
| `okx`          | OKX Monochrome          | `#0A0A0A`   | `#141414`      | `#FFFFFF` ⚪      | `#00D182`   | `#FF4D4D`   | `#FFFFFF`     |
| `kucoin`       | KuCoin Mint Emerald     | `#0F1419`   | `#171D24`      | `#00D092` 🟢      | `#00D092`   | `#F2485C`   | `#F3F4F6`     |
| `bitget`       | Bitget Electric Cyan    | `#0A0E14`   | `#15181F`      | `#00F0FF` 🔷      | `#00D294`   | `#F75555`   | `#F4F5F7`     |
| `mochi-web3`   | Mochi Web3 Purple       | `#0A0B0E`   | `#121317`      | `#A855F7` 🟣      | `#00E5A3`   | `#F6465D`   | `#F8FAFC`     |

### 3.2 Theme Implementation Pattern

Themes are applied via `data-theme` and `data-mode` attributes on `<html>`:

```html
<html data-theme="binance" data-mode="dark">
```

CSS variables are scoped per theme in `globals.css` using compound attribute selectors:

```css
:root[data-theme="binance"][data-mode="dark"] {
  --bg-base-rgb: 24, 26, 32;
  --brand-yellow-rgb: 252, 213, 53;
  /* ... */
}
```

Tailwind consumes these via custom `withOpacity()` functions in `tailwind.config.js`:

```js
colors: {
  dark: {
    base: withOpacity('--bg-base-rgb'),
    surface: withOpacity('--bg-surface-rgb'),
  },
  brand: {
    yellow: withOpacity('--brand-yellow-rgb'),
  },
  trade: {
    green: withOpacity('--trade-green-rgb'),
    red: withOpacity('--trade-red-rgb'),
  }
}
```

---

## 4. Typography

### 4.1 Font Stack

| Role       | Font Stack                                                        | Tailwind Class   |
|------------|-------------------------------------------------------------------|------------------|
| **Body**   | `Inter`, `BinanceNova`, `system-ui`, `sans-serif`                 | `font-sans`      |
| **Mono**   | `SFMono-Regular`, `Consolas`, `Liberation Mono`, `Menlo`, `monospace` | `font-mono`  |

### 4.2 Type Scale (Extension Context — xs Base)

The extension uses `text-xs` (12px) as its base size, optimized for sidepanel density.
The website should scale up to standard web sizes while preserving the hierarchy:

| Level           | Extension Size  | Website Size    | Weight          | Usage                        |
|-----------------|----------------|-----------------|-----------------|-------------------------------|
| Page Header     | `text-sm`      | `text-4xl–6xl`  | `font-bold`     | Section headers, hero         |
| Section Title   | `text-xs`      | `text-xl–2xl`   | `font-bold`     | Card titles, feature names    |
| Body            | `text-[11px]`  | `text-base–lg`  | `font-semibold` | Descriptions, paragraphs      |
| Label/Caption   | `text-[10px]`  | `text-sm`       | `font-bold`     | Badges, captions, meta text   |
| Monospace Data  | `font-mono`    | `font-mono`     | `font-medium`   | Prices, calculations, code    |

### 4.3 Text Rendering

```css
.antialiased  /* Always applied — smooth subpixel rendering */
```

Selection highlighting uses the brand accent:

```css
selection:bg-brand-yellow selection:text-dark-base
```

---

## 5. Component Patterns

### 5.1 Cards

```
Border Radius:  rounded-xl (0.75rem / 12px)
Background:     bg-dark-surface (--bg-surface-rgb)
Border:         border border-dark-border (1px solid --border-color-rgb)
Hover Effect:   card-tactile class — border glows brand-yellow/30, shadow deepens
Padding:        p-3 to p-6 (responsive)
```

**Card Tactile Hover (Signature Interaction):**
```css
.card-tactile {
  transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 160ms ease,
              box-shadow 160ms ease;
}
.card-tactile:hover {
  border-color: rgba(var(--brand-yellow-rgb), 0.3);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}
```

### 5.2 Button System (7 Tiers)

All buttons share these physics:

```css
/* Active press scale — Emil Kowalski principle */
button:active:not(:disabled) { transform: scale(0.965); }

/* Hover micro-lift */
button:hover:not(:disabled) { transform: translateY(-1px); }

/* Transition timing */
transition: all 150ms ease;
```

| Tier           | Class               | Background          | Text Color              | Use Case                     |
|----------------|---------------------|---------------------|--------------------------|-------------------------------|
| **Primary/CTA**| `.btn-brand`        | `bg-brand-yellow`   | `var(--text-cta)` black  | Main CTA, "Add to Chrome"    |
| **Bullish**    | `.btn-green`        | `bg-trade-green`    | `text-dark-base`         | Long, Win, Confirm actions    |
| **Bearish**    | `.btn-red`          | `bg-trade-red`      | `text-white`             | Short, Loss, Delete actions   |
| **Secondary**  | `.btn-elevation`    | `bg-dark-elevation` | `text-neutralText-primary` | Surface buttons, secondary  |
| **Ghost**      | `.btn-ghost`        | `transparent`       | `text-neutralText-secondary` | Minimal, text-only buttons |
| **Icon**       | `.btn-icon`         | `transparent`       | `text-neutralText-secondary` | Icon-only squircle buttons |
| **Pill**       | `.btn-pill`         | varies              | varies                   | Filter tabs, segment controls |

### 5.3 Form Inputs

```
Background:     bg-dark-elevation
Border:         border border-dark-border
Border Radius:  rounded-xl
Focus Ring:     border-brand-yellow (gold focus ring)
Text:           text-neutralText-primary font-mono (for numeric inputs)
```

### 5.4 Badges / Pills

```
Padding:        px-3 py-1.5
Border Radius:  rounded-lg
Font:           font-bold text-xs
Active State:   bg-brand-yellow/15 text-brand-yellow border-brand-yellow/50
Inactive State: bg-dark-elevation text-neutralText-secondary border-dark-border
```

### 5.5 Modals / Overlays

```
Backdrop:       bg-black/60 backdrop-blur-sm
Container:      bg-dark-surface border border-dark-border rounded-xl
Shadow:         box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5)
Max Width:      max-w-md (centered)
```

---

## 6. Spacing & Layout

### 6.1 Spacing Scale (Tailwind Default)

| Token  | Value   | Usage                                |
|--------|---------|---------------------------------------|
| `p-1`  | 4px     | Micro padding (icon buttons)          |
| `p-2`  | 8px     | Tight padding (pills, badges)         |
| `p-3`  | 12px    | Standard card padding (mobile)        |
| `p-4`  | 16px    | Card padding (tablet)                 |
| `p-5`  | 20px    | Card padding (desktop)                |
| `p-6`  | 24px    | Section padding, generous cards       |
| `p-8`  | 32px    | Large section padding                 |

### 6.2 Container

```css
max-w-5xl mx-auto /* ~1024px max content width */
```

### 6.3 Responsive Breakpoints

```
sm: 640px   — Sidepanel expanded
md: 768px   — Standard panel
lg: 1024px  — Full-width mode (website)
xl: 1280px  — Wide desktop
```

---

## 7. Motion & Animation

### 7.1 Easing Curves

| Curve Name         | Value                                    | Usage                          |
|--------------------|------------------------------------------|--------------------------------|
| `--ease-out-emil`  | `cubic-bezier(0.23, 1, 0.32, 1)`        | Primary ease-out (interactions)|
| `--ease-in-out-emil` | `cubic-bezier(0.77, 0, 0.175, 1)`     | Smooth transitions             |
| Press spring       | `cubic-bezier(0.16, 1, 0.3, 1)`         | Tactile button press feedback  |

### 7.2 Keyframe Animations

```css
/* Tab slide-in */
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(12px); }
  to   { opacity: 1; transform: translateX(0); }
}
/* Duration: 180ms | Curve: ease-out-emil */

/* Toast notification entrance */
@keyframes slideDownRight {
  from { opacity: 0; transform: translateY(-12px) translateX(8px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) translateX(0) scale(1); }
}
/* Duration: 200ms | Curve: ease-out-emil */
```

### 7.3 Transition Defaults

```css
/* All interactive elements */
transition: all 150ms ease;

/* Cards */
transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 160ms ease,
            box-shadow 160ms ease;

/* Tactile press feedback */
transition: transform 140ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 140ms ease,
            background-color 140ms ease;
```

### 7.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all animations */
}
```

---

## 8. Scrollbar Customization

```css
/* Width: 5px thin scrollbar */
::-webkit-scrollbar { width: 5px; height: 5px; }

/* Track: transparent */
::-webkit-scrollbar-track { background: transparent; }

/* Thumb: border-muted color with rounded pill shape */
::-webkit-scrollbar-thumb {
  background: rgba(var(--border-muted-rgb), 0.6);
  border-radius: 9999px;
}

/* Hover: brand gold thumb */
::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--brand-yellow-rgb));
}

/* Firefox */
scrollbar-width: thin;
scrollbar-color: rgba(var(--border-muted-rgb), 0.6) transparent;
```

---

## 9. Iconography

- **Icon Library:** [Lucide React](https://lucide.dev/) — consistent stroke-based icon set
- **Default Size:** `w-3.5 h-3.5` (14px) in extension context
- **Website Size:** Scale up to `w-5 h-5` (20px) or `w-6 h-6` (24px)
- **Color:** Inherits `currentColor` from parent text class
- **Custom Icons:** TradeGate logo (hexagonal shield with bar chart), share icon, calendar range icon

### TradeGate Logo SVG

```svg
<svg viewBox="0 0 24 24" fill="none">
  <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z"
        stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"
        fill="currentColor" fill-opacity="0.15"/>
  <path d="M12 5.5L17.5 8.5V13.5L12 16.5L6.5 13.5V8.5L12 5.5Z"
        stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  <line x1="9" y1="10" x2="9" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="12" y1="8" x2="12" y2="15.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="15" y1="10" x2="15" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

---

## 10. Shadows & Depth

| Layer           | Box Shadow                                      | Usage                    |
|-----------------|--------------------------------------------------|--------------------------|
| **Flat**        | none                                             | Default card state       |
| **Subtle**      | `0 1px 2px rgba(0, 0, 0, 0.2)`                  | Button resting state     |
| **Raised**      | `0 2px 8px rgba(0, 0, 0, 0.2)`                  | Button hover state       |
| **Elevated**    | `0 4px 16px rgba(0, 0, 0, 0.25)`                | Card hover state         |
| **Modal**       | `0 25px 50px rgba(0, 0, 0, 0.5)`                | Modal/overlay backdrop   |
| **Inset Depth** | `inset 0 1px 1px rgba(255,255,255,0.07), 0 2px 8px rgba(0,0,0,0.4)` | Pressed surfaces |
| **Active Press**| `inset 0 2px 4px rgba(0, 0, 0, 0.25)`           | Button active state      |

---

## 11. Supported Exchanges

| Exchange  | Logo Source                                                     | Theme Key   |
|-----------|-----------------------------------------------------------------|-------------|
| Binance   | `https://s3-symbol-logo.tradingview.com/provider/binance.svg`   | `binance`   |
| MEXC      | `https://s3-symbol-logo.tradingview.com/provider/mexc.svg`      | `mexc`      |
| Bybit     | `https://s3-symbol-logo.tradingview.com/provider/bybit.svg`     | `bybit`     |
| OKX       | `https://s3-symbol-logo.tradingview.com/provider/okx.svg`       | `okx`       |
| KuCoin    | `https://s3-symbol-logo.tradingview.com/provider/kucoin.svg`    | `kucoin`    |
| Bitget    | `https://s3-symbol-logo.tradingview.com/provider/bitget.svg`    | `bitget`    |

Exchange logos sourced from TradingView's official S3 CDN — no inline SVGs or custom paths.

---

## 12. Website Adaptation Rules

When porting this design system to the static showcase website:

1. **Use the TradeGate dark theme as default** — `#000000` base, `#E5B82A` gold accent
2. **Scale typography up** from extension's `text-xs` base to standard web sizes (`text-base`+)
3. **Maintain the golden-ratio border radius** — `rounded-xl` (12px) for all cards and buttons
4. **Preserve the tactile interaction model** — hover lift, press scale, gold border glow on cards
5. **Use `backdrop-filter: blur()` sparingly** — frosted glass effects only on overlays and the navbar
6. **Keep the monospace font for data** — prices, calculations, wallet addresses in `font-mono`
7. **Semantic green/red only for trade context** — never use `--bullish`/`--bearish` for generic UI success/error
8. **Gold accent as the single CTA color** — all primary actions use `#E5B82A` with `#000000` text
