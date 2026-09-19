# 🎮 Game Discovery

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Chakra UI](https://img.shields.io/badge/Chakra%20UI-v3-319795?logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive video game discovery and giveaway exploration platform built with **React 19**, **TypeScript**, **Vite**, and **Chakra UI v3**.

This project showcases frontend engineering best practices: a component-driven architecture, custom React hooks for state separation, a resilient HTTP service layer with request cancellation (`AbortController`), and an adaptive UI with light/dark theme support.

---

## ✨ Features

- 🔍 **Instant Real-Time Search**: Filter game titles on the fly as you type.
- 🕹️ **Platform Filtering**: Filter games across platforms including PC, Steam, PlayStation, Xbox, Epic Games, Nintendo, and more.
- 🏷️ **Category & Type Selector**: Explore giveaways, DLCs, and game categories effortlessly.
- ⚡ **Dynamic Multi-Criteria Sorting**: Sort results by title, price/worth, or player popularity.
- 🌓 **Dark & Light Mode**: Seamless theme switching with persistent user preferences powered by Chakra UI semantic tokens and `next-themes`.
- 💀 **Skeleton Loading States**: Smooth animated skeleton cards that eliminate Cumulative Layout Shift (CLS) during network requests.
- 📱 **Adaptive Responsive Design**: Desktop multi-column grid with a dedicated platform sidebar that gracefully transforms into a streamlined single-column layout on mobile devices.
- 🛡️ **Type Safety End-to-End**: Strictly typed interfaces and DTOs (`Game`, `ApiError`) with zero `any` types.

---

## 🏛️ Architecture & Key Engineering Patterns

- **Separation of Concerns**:
  - **UI Layer (`src/components/`)**: Pure presentational components focused solely on rendering and user interaction.
  - **Hooks Layer (`src/hooks/`)**: Dedicated custom hooks (`useGames`, `usePlatforms`, `useTypes`, `useSort`, `useSearch`) that encapsulate state logic, lifecycle management, and filtering.
  - **Service Layer (`src/services/`)**: Centralized HTTP client built on Axios with custom endpoints and strict response typing.
- **Request Cancellation & Memory Safety**:
  - Employs native `AbortController` signals within `useEffect` cleanups to immediately cancel ongoing API requests upon unmount or rapid re-renders, preventing memory leaks and state updates on unmounted components.
- **Modern Theme System**:
  - Leverages Chakra UI v3 and Emotion with semantic design tokens (`bg`, `fg`, `border`) to ensure consistent, accessible contrast across both light and dark color modes.
- **High-Performance Tooling**:
  - Powered by Vite for near-instant Hot Module Replacement (HMR) and production bundling.
  - Linted with **Oxlint** for ultra-fast static analysis.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Modern UI library utilizing hooks and functional components |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe development with strict type checking |
| **Build Tool** | [Vite](https://vitejs.dev/) | Next-generation frontend tooling and bundler |
| **UI Library** | [Chakra UI v3](https://chakra-ui.com/) | Accessible, composable component library |
| **Styling** | [Emotion](https://emotion.sh/) | CSS-in-JS engine powering Chakra UI styling |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) | System-aware, persistent dark and light color modes |
| **HTTP Client** | [Axios](https://axios-http.com/) | Promise-based HTTP client with request cancellation |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Popular iconography (FontAwesome, Material, etc.) |
| **Linter** | [Oxlint](https://oxc.rs/) | High-performance Rust-based JavaScript/TypeScript linter |
| **API** | [GamerPower API](https://www.gamerpower.com/api-read) | Real-time gaming giveaways and deals database |

---

## 📁 Project Structure

```text
GameDiscovery/
├── public/                 # Static assets and favicons
├── src/
│   ├── assets/             # Images, logos, and placeholders
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Chakra UI component recipes (ColorMode, Toaster, Tooltip)
│   │   ├── GameCard.tsx    # Individual game card with badge, rating, platform icons
│   │   ├── GameGrid.tsx    # Responsive grid managing card lists and loading states
│   │   ├── NavBar.tsx      # Top navigation with search and theme switcher
│   │   └── ...             # Platform list, selectors, headings, skeletons
│   ├── dto/                # Data Transfer Objects & TypeScript interfaces
│   │   ├── api-error.ts    # Custom API error representation
│   │   └── game.ts         # Complete Game entity interface
│   ├── hooks/              # Custom React hooks
│   │   ├── useGames.ts     # Data fetching and loading state
│   │   ├── useSearch.ts    # Search query state
│   │   └── ...             # Platform, type, and sort state hooks
│   ├── services/           # Networking and API integration
│   │   ├── api-client.ts   # Axios instance with base configuration
│   │   ├── game-service.ts # Game-specific API methods
│   │   └── http-service.ts # Generic HTTP service class with cancellation
│   ├── theme/              # Chakra UI theme customizations and tokens
│   ├── App.tsx             # Root application orchestrator and layout grid
│   └── main.tsx            # Entry point with ChakraProvider and ThemeProvider
├── index.html              # HTML template
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration with path aliases (@/)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.x or higher recommended)
- **npm** (v9.x or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ibogatec/GameDiscovery.git
   cd GameDiscovery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser at `http://localhost:5173`.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR |
| `npm run build` | Compiles TypeScript and builds production bundle to `dist/` |
| `npm run preview` | Locally serves the production build for testing |
| `npm run lint` | Runs Oxlint to inspect codebase for issues |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
