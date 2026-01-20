# 🎯 GoalTracker Demo

> A fully functional demo of the GoalTracker application that runs 100% in the browser — no backend required.

[![Demo Mode](https://img.shields.io/badge/Mode-Demo-orange?logo=rocket)](https://adorable-naiad-bbc223.netlify.app/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

This is the **demo version** of [GoalTracker](https://github.com/vastriantafyllou/goal-tracker-react), showcasing all features with in-memory data storage. Perfect for testing, evaluation, and demonstration purposes.

**👉 Live Demo:** https://adorable-naiad-bbc223.netlify.app/

---

## 📸 Screenshots

[Home Page](./docs/screenshots/home.png) <br>
[Users Management](./docs/screenshots/userManagmentPage.png) <br>
[Register Page - Dark theme](./docs/screenshots/register-dark.png) <br>
[Goals Page - Dark theme](./docs/screenshots/goals-dark.png) <br>

---

## ✨ Features

### Full Application Features
- **Goal Management** - Create, edit, track, and delete goals with categories and due dates
- **Category System** - Organize goals with custom categories
- **User Authentication** - Login, registration, and password recovery simulation
- **User Roles** - User, Admin, and SuperAdmin with different permissions
- **User Management** - Admin/SuperAdmin can view, edit, promote/demote users
- **Dark/Light Theme** - Automatic system detection with manual toggle
- **Responsive Design** - Mobile-first, works on all devices
- **Form Validation** - Real-time validation with Zod and React Hook Form
- **Toast Notifications** - User-friendly feedback messages

### Demo Mode Specifics
- **No Backend Required** - Runs entirely in the browser
- **Pre-loaded Data** - Sample goals, categories, and users included
- **Simulated API Latency** - 300ms delay for realistic UX
- **In-Memory Storage** - Data resets on page refresh

---

## 👥 Demo Users

| Username | Password | Role | Email |
|----------|----------|------|-------|
| `superadmin` | `SuperAdmin123!` | SuperAdmin | superadmin@demo.com |
| `demo-admin` | `Demo123!` | Admin | admin@demo.com |
| `demo-user` | `Demo123!` | User | user@demo.com |
| `john-doe` | `Demo123!` | User | john@demo.com |
| `jane-smith` | `Demo123!` | User | jane@demo.com |

**Tip:** You can also register new users — they will be stored in memory until page refresh.

---

## 📦 Pre-loaded Demo Data

### Goals (5 samples)
- Complete React Project (Development)
- Learn TypeScript (Development)
- Exercise Daily (Health)
- Read 12 Books This Year (Personal)
- Launch Side Project - Completed (Development)

### Categories (5 samples)
- Development, Health, Personal, Finance, Education

---

## 🛠️ Tech Stack

**Core:**
- React 19.2, TypeScript 5.9, Vite 7.2, React Router 7.9

**UI & Styling:**
- TailwindCSS 4.1, Radix UI (Dialog, Label, Switch), Lucide Icons

**Forms & Validation:**
- React Hook Form 7.65, Zod 4.1

**Authentication:**
- JWT Decode 4.0, js-cookie 3.0, React Context API

**Notifications:**
- Sonner 2.0

---

## 🚀 Installation & Setup

**Prerequisites:**
- Node.js 18+ and npm 9+

**Quick Start:**

```bash
# Clone repository
git clone https://github.com/vastriantafyllou/goal-tracker-demo.git
cd goal-tracker-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at `http://localhost:5173`

> **Note:** No backend configuration needed! The demo runs with in-memory data.

---

## 📁 Environment Configuration

The demo mode is enabled by default. To configure:

```env
# Demo mode (default) - no backend required
VITE_MODE=demo

# Production mode - requires backend API
VITE_MODE=production
VITE_API_URL=https://your-api-url.com
```

---

## 📂 Project Structure

```
src/
├── apiRouter/
│   └── apiRouter.ts         # Routes to demo or real APIs
├── components/
│   ├── pages/               # Route pages (HomePage, GoalsPage, etc.)
│   ├── ui/                  # Reusable UI (Button, Input, Dialog, etc.)
│   ├── layout/              # Header, Footer, Layout
│   └── ProtectedRoute.tsx
├── context/                 # AuthProvider, ThemeProvider
├── demo/                    # Demo mode implementation
│   ├── demoData.ts          # Mock data storage
│   ├── demoAuth.ts          # Auth & password recovery simulation
│   ├── demoGoals.ts         # Goals CRUD
│   ├── demoCategories.ts    # Categories CRUD
│   └── demoUsers.ts         # Users CRUD
├── hooks/                   # useAuth, useTheme
├── schemas/                 # Zod validation schemas
├── services/                # Real API implementations
├── config.ts                # IS_DEMO_MODE flag
├── App.tsx                  # Main app with routing
└── main.tsx                 # Entry point
```

---

## 🔑 Role-Based Features

| Role | Permissions |
|------|-------------|
| **User** | Manage own goals and categories |
| **Admin** | User permissions + view/manage all users |
| **SuperAdmin** | Admin permissions + promote/demote users |

**Routes:**
- `/` - Public home page
- `/login`, `/register` - Authentication
- `/forgot-password`, `/reset-password` - Password recovery
- `/goals` - Goal management (authenticated)
- `/categories` - Category management (authenticated)
- `/users` - User management (Admin/SuperAdmin only)

---

## 🎨 Dark/Light Theme

- Auto-detects system preference
- Manual toggle in header
- Persisted to localStorage
- Smooth CSS transitions

---

## ⚠️ Demo Mode Limitations

The following features are simulated or not available in demo mode:

| Feature | Demo Behavior |
|---------|---------------|
| **Data Persistence** | Resets on page refresh |
| **Password Recovery** | Simulates success (no email sent) |
| **JWT Validation** | Fake tokens, no real validation |
| **Email Verification** | Not available |
| **File Uploads** | Not available |
| **External APIs** | Not available |

---

## 📜 Development Scripts

```bash
npm run dev      # Development server (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint
```

---

## 🚀 Deployment

### Deploy Demo Mode (Netlify/Vercel)

1. Set environment variable: `VITE_MODE=demo`
2. Build: `npm run build`
3. Deploy `dist/` folder
4. No backend required!

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Vasileios Triantafyllou**

- [LinkedIn](https://www.linkedin.com/in/vasileios-triantafyllou-0b028710b/)
- [GitHub](https://github.com/vastriantafyllou)
- Email: triantafyllou.vasileios@gmail.com

---

## 🔗 Related Projects

- **Full Version (Frontend):** [goal-tracker-react](https://github.com/vastriantafyllou/goal-tracker-react)
- **Backend API:** [GoalTrackerAPI](https://github.com/vastriantafyllou/GoalTrackerAPI)

---

<p align="center">Made with ❤️ by Vasileios Triantafyllou</p>
<p align="center">⭐ Star this repo if you find it useful!</p>
