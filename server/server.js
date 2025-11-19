const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated Data
const getDashboardStats = () => ({
  totalUsers: Math.floor(Math.random() * 10000) + 5000,
  totalRevenue: Math.floor(Math.random() * 100000) + 50000,
  activeProjects: Math.floor(Math.random() * 50) + 20,
  pendingTasks: Math.floor(Math.random() * 100) + 30
});

const getChartData = () => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  revenue: [
    Math.floor(Math.random() * 10000) + 5000,
    Math.floor(Math.random() * 10000) + 5000,
    Math.floor(Math.random() * 10000) + 5000,
    Math.floor(Math.random() * 10000) + 5000,
    Math.floor(Math.random() * 10000) + 5000,
    Math.floor(Math.random() * 10000) + 5000
  ],
  users: [
    Math.floor(Math.random() * 500) + 200,
    Math.floor(Math.random() * 500) + 200,
    Math.floor(Math.random() * 500) + 200,
    Math.floor(Math.random() * 500) + 200,
    Math.floor(Math.random() * 500) + 200,
    Math.floor(Math.random() * 500) + 200
  ]
});

const getRecentActivities = () => [
  {
    id: 1,
    user: 'John Doe',
    action: 'Created new project',
    timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString()
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'Completed task #234',
    timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString()
  },
  {
    id: 3,
    user: 'Bob Johnson',
    action: 'Updated profile',
    timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString()
  },
  {
    id: 4,
    user: 'Alice Brown',
    action: 'Uploaded new document',
    timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString()
  },
  {
    id: 5,
    user: 'Charlie Wilson',
    action: 'Commented on issue #45',
    timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString()
  }
];

const getTopProducts = () => [
  {
    id: 1,
    name: 'Product A',
    sales: Math.floor(Math.random() * 1000) + 500,
    revenue: Math.floor(Math.random() * 50000) + 10000
  },
  {
    id: 2,
    name: 'Product B',
    sales: Math.floor(Math.random() * 1000) + 500,
    revenue: Math.floor(Math.random() * 50000) + 10000
  },
  {
    id: 3,
    name: 'Product C',
    sales: Math.floor(Math.random() * 1000) + 500,
    revenue: Math.floor(Math.random() * 50000) + 10000
  },
  {
    id: 4,
    name: 'Product D',
    sales: Math.floor(Math.random() * 1000) + 500,
    revenue: Math.floor(Math.random() * 50000) + 10000
  }
];

// API Routes
app.get('/api/dashboard/stats', (req, res) => {
  res.json(getDashboardStats());
});

app.get('/api/dashboard/chart-data', (req, res) => {
  res.json(getChartData());
});

app.get('/api/dashboard/activities', (req, res) => {
  res.json(getRecentActivities());
});

app.get('/api/dashboard/top-products', (req, res) => {
  res.json(getTopProducts());
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
