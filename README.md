# Finexia - Financial Dashboard

A payment operations dashboard inspired by the [openMF PH-EE Operations Web](https://github.com/openMF/ph-ee-operations-web-react) project. Built as part of my C4GT 2025 application to demonstrate familiarity with the required tech stack.

## Features

- Stat cards for Total Transactions, Success Rate, Failed, and Pending
- Transaction table with search and status filter (G2P / P2G / Voucher)
- 7-Day Transaction Volume chart (live data via CoinGecko API)
- Transaction Breakdown bar chart by type
- Live Currency Rates widget (EUR, GBP, INR via Frankfurter API)

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **UI Components:** shadcn/ui (Radix)
- **Charts:** Recharts
- **Icons:** Lucide React
- **Live Data:** CoinGecko API, Frankfurter API

## Getting Started

### Prerequisites
- Node.js (v18 or later)

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/ph-ee-ops-dashboard.git
cd ph-ee-ops-dashboard
npm install
npm run dev
```

### Environment Variables
Copy `.env.example` to `.env` before running:
```bash
cp .env.example .env
```

App runs at `http://localhost:5173`
