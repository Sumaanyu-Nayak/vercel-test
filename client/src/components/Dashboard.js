import React from 'react';
import './Dashboard.css';
import StatCard from './StatCard';
import Chart from './Chart';
import ActivityList from './ActivityList';
import ProductList from './ProductList';

const Dashboard = ({ stats, chartData, activities, products, loading, error, onRefresh }) => {
  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={onRefresh} className="refresh-btn">Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={onRefresh} className="refresh-btn">Refresh Data</button>
      </header>

      <div className="stats-grid">
        <StatCard
          title="Total Users"
          value={stats?.totalUsers}
          icon="👥"
          color="#4CAF50"
        />
        <StatCard
          title="Total Revenue"
          value={`$${stats?.totalRevenue?.toLocaleString()}`}
          icon="💰"
          color="#2196F3"
        />
        <StatCard
          title="Active Projects"
          value={stats?.activeProjects}
          icon="📁"
          color="#FF9800"
        />
        <StatCard
          title="Pending Tasks"
          value={stats?.pendingTasks}
          icon="✓"
          color="#9C27B0"
        />
      </div>

      <div className="charts-section">
        <Chart data={chartData} />
      </div>

      <div className="content-grid">
        <ActivityList activities={activities} />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Dashboard;
