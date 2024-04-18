// ProfilePage.js
import React from 'react';
import ProfileCard from '../components/ProfileCard';

function ProfilePage({ profiles }) {
  return (
    <div className="profile-page">
    <h2 style={{ textAlign: 'center' }}>Profiles</h2>

      <div className="profile-list">
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
