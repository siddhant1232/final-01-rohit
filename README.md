Portfolio Website — Rohit Sharma

Live Site: https://rohit.monster

Developer: Siddhant Gupta

Overview

A clean and responsive portfolio website created to showcase the client’s work, skills, and background.
Built using React + TypeScript + Vite with Tailwind CSS for styling and Cloudinary for image hosting.

Features

Responsive layout for mobile, tablet, and desktop

Modern UI with clean sections

Hero, About, Skills, Projects, and Contact pages

Image optimization using Cloudinary CDN

Fast load times with Vite

Organized and reusable components

Tech Stack

React + TypeScript

Vite

Tailwind CSS

Cloudinary (asset hosting)

Project Structure
src/
│
├── components/
│   ├── icons/
│   └── ui/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── CopyPhoneButton.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── SocialSidebar.tsx
│
├── data/                # Project data, skills, Cloudinary URLs
│
├── pages/
│   ├── Home.tsx
│   ├── AllProjects.tsx
│   └── App.tsx
│
├── App.tsx
├── main.tsx
├── index.css
└── index.html

Cloudinary Usage

All images (project thumbnails, client photos, UI assets) are stored in Cloudinary.
Benefits:

CDN delivery

Automatic compression

Responsive image transformations

WebP support

License

This project was developed specifically for the client.
Code and design may not be reused without permission.