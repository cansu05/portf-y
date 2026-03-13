# Portföy

A production-style personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. The project presents profile, skills, selected work, experience, and contact details through a polished single-page interface with a strong visual identity.

## Overview

This repository contains a portfolio website focused on frontend engineering presentation. It is structured as a reusable component-based application and uses static portfolio data to render sections such as hero, about, skills, projects, experience, and contact.

## Highlights

- Responsive single-page portfolio experience
- Component-driven architecture for easier maintenance
- Centralized content management through `src/data/portfolio.ts`
- Optimized visual assets for project showcases
- Fast local development and build pipeline with Vite

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 3
- PostCSS

## Project Structure

```text
src/
  assets/                Static images and optimized media
  components/
    layout/              Shared layout primitives
    sections/            Page-level sections
    ui/                  Reusable UI building blocks
  data/
    portfolio.ts         Portfolio content source
  App.tsx                Main page composition
  main.tsx               Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: Starts the Vite development server
- `npm run build`: Compiles TypeScript and creates a production build
- `npm run preview`: Serves the production build locally

## Customization

Most portfolio content is managed from [`src/data/portfolio.ts`](./src/data/portfolio.ts). Update that file to change:

- Navigation labels
- Hero content
- About and contact details
- Skill groups
- Project cards and links
- Experience timeline

## Deployment

The project is suitable for deployment on platforms such as Vercel, Netlify, or GitHub Pages after running the production build.

## Repository Setup

If this is the first push for the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/cansu05/portf-y.git
git push -u origin main
```

## Contact

- GitHub: https://github.com/cansu05
- LinkedIn: https://www.linkedin.com/in/cansuugur/

