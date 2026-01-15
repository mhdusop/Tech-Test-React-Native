# 📱 React Native Expo Posts App

A modern **React Native (Expo)** application that displays a list of posts, post details, authentication flow, and supports **light & dark mode** with a clean **layered architecture**.

_Note: I want to make a disclaimer beforehand: this is my first time creating an application using React Native Expo, so I don't know yet what the proper folder structure is in React Native. Cheers😁_

---

## ✨ Features

-  🔐 Authentication (Login / Logout)
-  📰 Posts List with pull-to-refresh
-  📄 Post Detail Page
-  🏷️ Reusable Component
-  🌗 Light & Dark Mode (Toggleable)
-  🧭 File-based routing with Expo Router
-  ⚡ State management using Zustand

---

## 🛠️ Tech Stack

### Core

-  **React Native**
-  **Expo**
-  **Expo Router**

### State Management

-  **Zustand**

### Networking

-  **Axios**

### Styling & UI

-  React Native `StyleSheet`
-  Custom Theme System (Light / Dark)
-  `@expo/vector-icons` (Ionicons)

### Language

-  **TypeScript**

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── profile.tsx
│   ├── posts/
│   │   └── [id].tsx
│   ├── _layout.tsx
│   ├── index.tsx
│   └── login.tsx
├── components/
│   ├── base/
│   │   └── AppHeader.tsx
│   └── posts/
│       ├── PostsCard.tsx
│       ├── PostsMeta.tsx
│       └── PostsTags.tsx
├── hooks/
│   └── useThemeColor.ts
├── interface/
│   ├── posts.ts
│   └── user.ts
├── libs/
│   ├── api.ts
│   ├── asyncStorage.ts
│   ├── colors.ts
│   └── storageKeys.ts
├── services/
│   ├── authServices.ts
│   └── postsServices.ts
└── store/
    ├── authStore.ts
    ├── postsStore.ts
    └── themeStore.ts
```

### ✨The Result:

<img src="/assets/images/login-page.jpeg" alt="Login Page">
<img src="/assets/images/list-posts.jpeg" alt="List Page">
<img src="/assets/images/detail-posts.jpeg" alt="Detail Page">

<!-- ![Login Page](https://freeimage.host/i/f86hjs9)
![List Page](https://freeimage.host/i/f86hhW7)
![Detail Page](https://freeimage.host/i/f86hXxS) -->
