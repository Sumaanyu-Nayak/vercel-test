import React from 'react';
import './ActivityList.css';

const ActivityList = ({ activities }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffMins < 1440) {
      return `${Math.floor(diffMins / 60)} hours ago`;
    } else {
      return `${Math.floor(diffMins / 1440)} days ago`;
    }
  };

  return (
    <div className="activity-list">
      <h2 className="section-title">Recent Activities</h2>
      <div className="activity-items">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-avatar">
              {activity.user.charAt(0)}
            </div>
            <div className="activity-content">
              <p className="activity-user">{activity.user}</p>
              <p className="activity-action">{activity.action}</p>
              <p className="activity-time">{formatTime(activity.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
