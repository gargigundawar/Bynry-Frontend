// DashboardPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/DashboardPage.css';
import ProfileForm from './ProfileForm'; // Import ProfileForm component
import ProfileList from '../components/ProfileList'; // Import ProfileList component

const ADMIN_PASSWORD = 'admin123'; // Replace with your admin password

function DashboardPage({ addProfile, profiles, deleteProfile }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setError('');
      alert('Login successful! You can now access the dashboard.');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleAddProfile = (formData) => {
    addProfile(formData);
    alert('Profile added successfully!');
  };

  const handleDeleteProfile = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      deleteProfile(id);
      alert('Profile deleted successfully!');
    }
  };

  return (
    <div className="dashboard-container">
      {!loggedIn && (
        <div className="login-section">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}

      {loggedIn && (
        <div className="dashboard-section">
          <h2>Dashboard</h2>
          <button onClick={() => navigate('/profile')}>View Profiles</button>
          <hr />
          <h3>Add Profile</h3>
          <ProfileForm onSubmit={handleAddProfile} />
          <hr />
          <h3>Manage Profiles</h3>
          <ProfileList profiles={profiles} onDelete={handleDeleteProfile} />
          {/* Display newly added profile */}
          {profiles && profiles.length > 0 && (
            <div>
              <h3>Newly Added Profile</h3>
              <div>
                <h4>{profiles[profiles.length - 1].name}</h4>
                <p>{profiles[profiles.length - 1].description}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
