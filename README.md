# 🍽️ Nel's Kitchen – Recipe Web App

A modern and responsive web application built with **React.js** that allows users to explore, search, and view details of various recipes.

---

## 🚀 Features

- 🌐 **Routing** with React Router
- 🌓 **Dark/Light mode** toggle with context
- 🔎 **Search** for recipes using live API
- 🧾 **Detail View** for each recipe
- 🗂️ **Pagination** for recipe listings
- 🧪 **Skeleton Loaders** for better UX
- ❌ **Custom 404 Page** for unmatched routes

---

## 📁 Project Structure (Simplified)

```
src/
├── assets/       # Static assets like images
├── components/   # Reusable UI components
├── context/      # Theme context
├── hooks/        # Custom hooks (e.g., useFetch)
├── pages/        # Route-based pages
├── App.jsx       # Main routing setup
└── main.jsx      # Entry point
```

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Caseinn/uts_pemrograman_web_122140153.git
cd uts_pemrograman_web_122140153
```

### 2. Install dependencies

```bash
npm install # or yarn install
```

### 3. Run the app in development mode

```bash
npm run dev # or yarn dev
```

This will start the app on `http://localhost:5173` by default (Vite).

### 4. Build for production

```bash
npm run build # or yarn build
```

### 5. Preview production build

```bash
npm run preview # or yarn preview
```

## 🌐 Live API Used

This project fetches recipe data from:
- 📦 `https://dummyjson.com/recipes`

## 🔍 How to Use

* **Home**: See featured recipes from the API
* **Search**: Use the search bar to find recipes by keyword
* **Recipes**: Paginated list of recipes (12 per page)
* **Details**: Click any recipe to view its full detail
* **Theme Toggle**: Switch between dark and light themes
* **404 Page**: Navigate to a wrong URL to see the custom 404

## 💡 Credits

* [DummyJSON](https://dummyjson.com/) – Fake API for testing and prototyping
* [Unsplash](https://unsplash.com/) – Kitchen background image
* [Flowbite](https://flowbite.com/) + [TailwindCSS](https://tailwindcss.com/) – Component styling
