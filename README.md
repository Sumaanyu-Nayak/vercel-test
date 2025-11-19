# Dashboard App

A simple dashboard application built with React (frontend) and Node.js/Express (backend).

## Project Structure

```
├── client/          # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── StatCard.js
│   │   │   ├── Chart.js
│   │   │   ├── ActivityList.js
│   │   │   └── ProductList.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── server/          # Node.js backend
    ├── server.js
    └── package.json
```

## Features

- **Dashboard Statistics**: Display key metrics (Users, Revenue, Projects, Tasks)
- **Charts**: Visual representation of revenue and user data over time
- **Recent Activities**: List of recent user activities
- **Top Products**: Table showing best-performing products
- **Real-time Data**: All data is simulated and changes on each refresh
- **Responsive Design**: Works on desktop and mobile devices

## API Endpoints

The server provides the following endpoints:

- `GET /api/dashboard/stats` - Returns dashboard statistics
- `GET /api/dashboard/chart-data` - Returns data for charts
- `GET /api/dashboard/activities` - Returns recent activities
- `GET /api/dashboard/top-products` - Returns top products
- `GET /api/health` - Server health check

## Setup and Installation

### Server Setup

1. Navigate to the server folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

### Client Setup

1. Navigate to the client folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

The app will open in your browser at `http://localhost:3000`

## Running the Application

1. **Start the server first** (in the server folder):
   ```bash
   cd server
   npm install
   npm start
   ```

2. **Then start the client** (in a new terminal, in the client folder):
   ```bash
   cd client
   npm install
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## How It Works

1. The React frontend makes API calls to the Node.js backend
2. The backend generates simulated data (no database required)
3. Data is displayed in a clean, modern dashboard interface
4. Click "Refresh Data" to get new simulated data

## Technologies Used

### Frontend
- React 18
- CSS3 (custom styling)
- Fetch API for HTTP requests

### Backend
- Node.js
- Express.js
- CORS middleware

## Notes

- All data is simulated and randomly generated
- No database connection is required
- The proxy setting in client/package.json allows the frontend to communicate with the backend
