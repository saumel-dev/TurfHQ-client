# ⚽ TurfHQ — Sports Facility Booking Management System

A seamless and modern sports facility booking platform where users can explore available turfs and sports facilities, book slots online, and manage their bookings effortlessly. TurfHQ digitizes the traditional sports reservation process with a clean, responsive, and user-friendly experience.

---

## 🌐 Live URL

**https://turfhq-eta.vercel.app/**

---

## 🎯 Purpose

TurfHQ is built to simplify sports facility reservations. Users can browse different sports venues, check available time slots, and book facilities online. Facility owners can add, update, and manage their own sports venues while users can track and cancel bookings from their dashboard.

---

## ✨ Key Features

- 🔐 **Secure Authentication** — Email/password & Google OAuth authentication using BetterAuth
- ⚽ **Sports Facility Listings** — Browse multiple sports facilities with detailed information
- 🔍 **Search & Filter** — Search facilities by name and filter by sport type
- 📅 **Online Booking System** — Book facilities by selecting date, time slot, and duration
- 👤 **User Dashboard** — Manage personal bookings and booking status
- 🏟️ **Add Facility** — Authenticated users can add their own sports facilities
- ✏️ **Manage Facilities** — Facility owners can update or delete their listed facilities
- 🔒 **Protected Routes** — Private pages secured with authentication middleware
- 🍪 **JWT Authentication** — Secure token handling with HTTPOnly cookies
- 🌙 **Theme Toggle** — Light and dark mode support
- 🎞️ **Modern UI Animations** — Smooth animations using Motion
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop devices
- 🔔 **Toast & UI Feedback** — Interactive notifications and user-friendly feedback system
- ❌ **Custom 404 Page** — Friendly not-found page for invalid routes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **HeroUI** | Modern UI component library |
| **BetterAuth** | Authentication system |
| **MongoDB** | Database for users, facilities, and bookings |
| **JWT** | Secure authentication tokens |
| **Motion** | UI animations and transitions |
| **Next Themes** | Dark/Light theme management |

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `better-auth` | Authentication solution |
| `@better-auth/mongo-adapter` | MongoDB adapter for BetterAuth |
| `mongodb` | MongoDB database driver |
| `jsonwebtoken` | JWT token generation & verification |
| `@heroui/react` | UI component library |
| `motion` | Animation library |
| `next-themes` | Theme switching support |
| `react-fast-marquee` | Smooth marquee animations |
| `react-icons` | Icon library |
| `tailwindcss` | CSS framework |

---

## 🚀 Main Functionalities

### 👥 Authentication
- User Registration
- User Login
- Google OAuth Login
- Protected Routes
- JWT Authentication with Cookies

### 🏟️ Facility Management
- Add New Facilities
- Update Existing Facilities
- Delete Facilities
- Manage Personal Facilities

### 📅 Booking System
- Book Sports Facilities
- Select Booking Date & Time Slot
- Automatic Price Calculation
- Cancel Bookings
- Booking Status Tracking

### 🔎 Search & Filter
- Search facilities by name
- Filter by sports category/type

---

## 💻 Run Locally

Clone the project:

```bash
git clone https://github.com/your-username/turfhq-client.git