# 🦊 Shadow Fox Security Force

A modern security services booking website built with React and Supabase.

## Features

- **Frontend**: React + TailwindCSS + Vite
- **Backend**: Supabase (PostgreSQL + Auth + Edge Functions)
- **WhatsApp Integration**: Automatic notifications for new bookings
- **Admin Dashboard**: Manage bookings with authentication

## Setup Instructions

### 1. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the queries in `backend/database-setup.sql`
3. Go to Authentication → Settings and configure email auth
4. Create an admin user in Authentication → Users
5. Get your project URL and anon key from Settings → API

### 2. WhatsApp Cloud API Setup (Optional)

1. Go to [Facebook Developers](https://developers.facebook.com)
2. Create a WhatsApp Business app
3. Get your access token and phone number ID
4. Add environment variables to Supabase Edge Functions

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Add your Supabase credentials to `.env`:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

### 4. Deploy Edge Function (Optional)

1. Install Supabase CLI
2. Login and link your project:
   ```bash
   supabase login
   supabase link --project-ref your-project-ref
   ```

3. Deploy the WhatsApp function:
   ```bash
   supabase functions deploy whatsapp-notify
   ```

4. Set environment variables:
   ```bash
   supabase secrets set WHATSAPP_TOKEN=your_token
   supabase secrets set WHATSAPP_PHONE_NUMBER_ID=your_phone_id
   supabase secrets set ADMIN_PHONE_NUMBER=your_admin_phone
   ```

## Deployment

### Frontend (Vercel/Netlify)
1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

### Backend
Supabase handles all backend deployment automatically.

## Project Structure

```
shadow-fox-security/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Booking.jsx
│   │   │   └── Admin.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── supabaseClient.js
│   └── package.json
└── backend/
    ├── supabase/
    │   └── functions/
    │       └── whatsapp-notify/
    │           └── index.ts
    └── database-setup.sql
```

## Usage

1. **Customer Flow**: Visit website → Browse services → Book service → Receive confirmation
2. **Admin Flow**: Login at `/admin` → View bookings → Update status
3. **WhatsApp**: Automatic notifications sent to admin phone when new booking is created

## Technologies Used

- **Frontend**: React, TailwindCSS, React Router, Vite
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions, Realtime)
- **Integration**: WhatsApp Cloud API
- **Deployment**: Vercel/Netlify (Frontend), Supabase Cloud (Backend)