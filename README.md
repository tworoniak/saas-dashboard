# Fake SaaS Dashboard UI

A modern, responsive SaaS-style dashboard built with **React + TypeScript**, featuring a polished layout, authentication flow, protected routes, charts, notifications, and dark mode support.

This project was built to mimic a real startup admin panel and serve as a strong portfolio-ready frontend project.

---

## 🚀 Features

- ✅ Fake authentication (local storage)
- 🔒 Protected routes (redirects to login if not authenticated)
- 🧭 Sidebar navigation layout
- 📊 Dashboard analytics charts using **Recharts**
- 🔔 Notifications dropdown menu
- ⚙️ Settings page with workspace + theme preferences
- 🌙 Dark mode toggle (Tailwind class-based dark mode)
- 💾 Persistent theme + auth state using LocalStorage
- 📱 Fully responsive layout

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **TailwindCSS**
- **Recharts**

---

## 📂 Project Structure

```txt
src/
  auth/
    auth.ts
    AuthContext.tsx
    AuthProvider.tsx
  pages/
    Dashboard.tsx
    Login.tsx
    Settings.tsx
  routes/
    ProtectedRoute.tsx
  theme/
    ThemeProvider.tsx
    ThemeContext.ts
    useTheme.ts
    themeUtils.ts
  ui/
    AppShell.tsx
    NotificationsMenu.tsx
  App.tsx
  main.tsx
  index.css
```
