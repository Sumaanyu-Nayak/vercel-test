import React from 'react';
import './Chart.css';

const Chart = ({ data }) => {
  if (!data) return null;

  const maxRevenue = Math.max(...data.revenue);
  const maxUsers = Math.max(...data.users);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Revenue & Users Overview</h2>
      <div className="chart">
        <div className="chart-bars">
          {data.labels.map((label, index) => {
            const revenueHeight = (data.revenue[index] / maxRevenue) * 100;
            const userHeight = (data.users[index] / maxUsers) * 100;

            return (
              <div key={label} className="chart-bar-group">
                <div className="chart-bars-container">
                  <div
                    className="chart-bar revenue"
                    style={{ height: `${revenueHeight}%` }}
                    title={`Revenue: $${data.revenue[index].toLocaleString()}`}
                  />
                  <div
                    className="chart-bar users"
                    style={{ height: `${userHeight}%` }}
                    title={`Users: ${data.users[index]}`}
                  />
                </div>
                <span className="chart-label">{label}</span>
              </div>
            );
          })}
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-color revenue"></span>
            <span>Revenue</span>
          </div>
          <div className="legend-item">
            <span className="legend-color users"></span>
            <span>Users</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
