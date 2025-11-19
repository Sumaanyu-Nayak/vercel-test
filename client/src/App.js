import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [activities, setActivities] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [statsRes, chartRes, activitiesRes, productsRes] = await Promise.all([
        fetch('/api/dashboard/stats'),
        fetch('/api/dashboard/chart-data'),
        fetch('/api/dashboard/activities'),
        fetch('/api/dashboard/top-products')
      ]);

      if (!statsRes.ok || !chartRes.ok || !activitiesRes.ok || !productsRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const [statsData, chartData, activitiesData, productsData] = await Promise.all([
        statsRes.json(),
        chartRes.json(),
        activitiesRes.json(),
        productsRes.json()
      ]);

      setStats(statsData);
      setChartData(chartData);
      setActivities(activitiesData);
      setProducts(productsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Dashboard
        stats={stats}
        chartData={chartData}
        activities={activities}
        products={products}
        loading={loading}
        error={error}
        onRefresh={fetchDashboardData}
      />
    </div>
  );
}

export default App;
