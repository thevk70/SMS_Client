import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // Optional: for styling the component

const WelcomePage = () => {
  // Assuming you store user information in Redux after login
  const user = useSelector((state) => state.user);

  return (
    <div className="welcome-container">
      <h1>Welcome, {user?.name || "User"}!</h1>
      <p>You have successfully logged in.</p>
      <p>Feel free to explore your dashboard and manage your account.</p>

      <div className="actions">
        <Link to="/dashboard" className="dashboard-link">Go to Dashboard</Link>
        <Link to="/profile" className="profile-link">View Profile</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
