# Product Search App

A React-based product listing application demonstrating modern frontend patterns such as server-state management, pagination, skeleton loaders, and reusable UI components.

The app consumes the DummyJSON API and focuses on clean architecture and user experience rather than visual design.

---

## Features

- Product listing with responsive grid layout
- Search with server-side filtering
- Pagination with React Query caching
- Skeleton loaders for initial loading state
- Unified feedback component for loading, error, and empty states
- Reusable and composable UI components

---

## Tech Stack

- React
- React Query (TanStack Query)
- JavaScript
- CSS (Grid & Flexbox)
- DummyJSON API

---

## Architecture Notes

- Server state is handled with React Query
- UI components are separated from orchestration logic
- Page components manage state and data fetching
- Reusable components are kept intentionally dumb
- Layout is responsive without media queries using CSS Grid

---

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

## Start the development server

```bash
npm run dev
```

