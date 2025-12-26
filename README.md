# Odari K. Odari - Personal Portfolio

[![GitHub followers](https://img.shields.io/github/followers/CharlesOdari?label=Follow&style=social)](https://github.com/ODARI-CHARLES1)  [![Portfolio](https://img.shields.io/badge/Portfolio-View-blue?logo=google-chrome)](https://charles.k.odari.portfolio.thegtm.or.ke/)  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://ke.linkedin.com/in/odari-kibisi-charles-329b19331)  [![Email](https://img.shields.io/badge/Email-Contact-red?logo=gmail)](mailto:daymondodari68@gmail.com)
A modern, professional React portfolio website showcasing Electrical & Electronic Engineering expertise with software development skills.

## Live Demo

[View Portfolio](https://charles-odari-portfolio.netlify.app) (Deploy when ready)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Deployment](#deployment)

## Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dark Mode**: Engineering-focused dark theme with blue accents
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Modern UI**: Clean, minimalistic design with professional typography
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Fast Loading**: Optimized assets and efficient React architecture
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project cards with GitHub integration

## Tech Stack

### Core Technologies

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Additional Libraries

- **React Router** - Declarative routing for React
- **React Icons** - Popular icon library
- **Inter Font** - Professional typography

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── components/      # Reusable React components
│   │   ├── Hero.jsx     # Landing section
│   │   ├── About.jsx    # About me section
│   │   ├── Skills.jsx   # Skills showcase
│   │   ├── Projects.jsx # Project portfolio
│   │   ├── Education.jsx# Education & experience
│   │   ├── Vision.jsx   # Vision & goals
│   │   ├── Contact.jsx  # Contact form & links
│   │   └── Footer.jsx   # Site footer
│   ├── data/            # Static data files
│   │   ├── skills.js    # Skills data
│   │   └── projects.js  # Projects data
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components (if needed)
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── index.html           # HTML template
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ODARI-CHARLES1/portfolio.git
   cd portfolio
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Start development server**

   ```bash
   npm run dev
   ```
4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio.

## Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Customization

### Personal Information

Update the following files with your information:

- `src/data/skills.js` - Add/remove your skills
- `src/data/projects.js` - Update project details
- `src/components/Hero.jsx` - Change name and title
- `src/components/About.jsx` - Update biography
- `src/components/Contact.jsx` - Update contact links

### Styling

- `tailwind.config.js` - Customize color scheme and fonts
- `src/index.css` - Global styles and custom CSS

## Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure domain settings

### Vercel

1. Connect GitHub repository to Vercel
2. Automatic deployments on push

---

Built with  using React, Tailwind CSS, and modern web technologies.
