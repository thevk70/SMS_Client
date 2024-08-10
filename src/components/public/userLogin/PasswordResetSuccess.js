import React from 'react';
import { Link } from 'react-router-dom';
import './PasswordResetSuccess.css'; // Optional: if you want to style the component

const PasswordResetSuccess = () => {
  return (
    <div className="success-container">
      <h2>Password Reset Successful</h2>
      <p>Your password has been successfully reset. You can now log in with your new password.</p>
      <Link to="/" className="login-link">
        Go to Login
      </Link>
    </div>
  );
};

export default PasswordResetSuccess;