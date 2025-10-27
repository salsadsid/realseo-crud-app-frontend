# RealSEO CRUD App Frontend

A modern client management system built with Next.js and Material-UI, featuring a clean dashboard interface for managing client information with full CRUD operations.

## 🚀 Tech Stack

- **Frontend**: Next.js 15.5.6 (App Router) + React 19
- **UI Library**: Material-UI (MUI) 7.3.4 + @toolpad/core
- **State Management**: Redux Toolkit 2.9.2 with RTK Query
- **Notifications**: Notistack
- **Icons**: React Icons
- **Styling**: Tailwind CSS + MUI Theme
- **Backend**: Node.js + Express (separate repository)
- **Database**: MySQL with Prisma ORM

## ✨ Features

- 📊 Dashboard layout with collapsible sidebar
- 👥 Client management (Create, Read, Update, Delete)
- 🔍 Real-time search functionality
- 🎨 Professional UI with brand theming
- 🔔 Toast notifications for user feedback
- 📱 Responsive design
- 🎯 Dynamic routing with Next.js App Router

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd realseo-crud-app-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔗 Backend Setup

This frontend requires the RealSEO CRUD backend API to be running. Make sure to:

1. Clone and set up the backend repository
2. Configure the database connection
3. Run the backend server on port 5000 (or update `NEXT_PUBLIC_API_URL`)
