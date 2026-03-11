# DBMS Virtual Lab

An interactive web platform for learning, practicing, and visualizing **Database Management System** concepts — featuring real-time SQL query execution, database design tools, and structured learning modules.

**Live Demo:** [dbms-virtual-lab.vercel.app](https://dbms-virtual-lab.vercel.app)

---

## About

DBMS Virtual Lab is a browser-based educational tool designed for students and developers to explore core database concepts hands-on — without needing a local database setup. It provides an intuitive interface to write and execute SQL queries, visualize schemas, and understand database design principles in real time.

---

## Features

- **Real-time SQL Execution** — Write and run SQL queries directly in the browser
- **Database Design Visualizer** — Understand and design relational schemas interactively
- **Concept Modules** — Structured learning material covering key DBMS topics
- **Instant Feedback** — See query results and errors immediately
- **No Setup Required** — Fully browser-based; no local database installation needed
- **Responsive UI** — Clean, accessible interface built with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Details |
|---|---|
| Language | TypeScript |
| Framework | React |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Linting | ESLint |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/sanasreeraj/DBMS-Virtual-Lab.git
   cd DBMS-Virtual-Lab
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the development server**
```bash
   npm run dev
```

4. **Open in browser**
```
   http://localhost:5173
```

### Build for Production
```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

---

## Project Structure
```
DBMS-Virtual-Lab/
├── src/                  # Application source code
│   ├── components/       # Reusable React components
│   ├── pages/            # Page-level components
│   └── main.tsx          # App entry point
├── index.html            # Root HTML template
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite build configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies & scripts
```

---

## Concepts Covered

- Relational Database Design
- SQL — DDL, DML, DCL, TCL
- Normalization (1NF, 2NF, 3NF, BCNF)
- Joins, Subqueries, and Aggregations
- Entity-Relationship (ER) Diagrams
- Transactions and Concurrency Control

---


## Author

**Sana Sreeraj** — [@sanasreeraj](https://github.com/sanasreeraj)
**Aman Singhal**

---

> *"The best way to learn databases is to actually use them. DBMS Virtual Lab brings that experience to your browser."*
