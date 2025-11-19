import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="stat-icon" style={{ backgroundColor: `${color}20` }}>
        {icon}
      </div>
      <div className="stat-content">
        <h3 className="stat-title">{title}</h3>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
