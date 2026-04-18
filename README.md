# Grocify 🛒

A modern, responsive multipage grocery web app built with **React + Vite + Tailwind CSS**.

## Features

- 🏠 Home page with hero banner, categories, and featured products
- 🛍️ Shop page with search, category filter, and sort
- 📦 Product detail page
- 🛒 Shopping cart with quantity management (Context API)
- 💳 Checkout page with order summary
- ℹ️ About page
- 📞 Contact page with form
- 📱 Fully responsive design

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM v6
- React Icons
- Context API (for cart state)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app will start on `http://localhost:5173`

### 3. Build for production

```bash
npm run build
```

## Folder Structure

```
grocify/
├── public/
├── src/
│   ├── assets/              # Images, logos
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryList.jsx
│   │   ├── ProductCard.jsx
│   │   └── Newsletter.jsx
│   ├── pages/               # Page components (routes)
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── context/             # Global state (Cart)
│   │   └── CartContext.jsx
│   ├── data/                # Static data
│   │   └── products.js
│   ├── App.jsx              # Main App with routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind + global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Author

Made with ❤️ for learning purposes.
