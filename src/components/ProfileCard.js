import React, { useState } from 'react';
import GoogleMapsEmbed from './GoogleMapsEmbed'; // Import the GoogleMapsEmbed component
import '../css/ProfileCard.css';

function ProfileCard({ profile }) {
  const [showMap, setShowMap] = useState(false);

  const handleSummaryClick = () => {
    setShowMap(!showMap);
  };

  return (
    <div className={`profile-card ${showMap ? 'expanded' : ''}`}>
      <img src={profile.imageUrl || profile.photo} alt={profile.name} className="profile-photo" />
      <div className="profile-details">
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
        <button onClick={handleSummaryClick}>Summary</button>
        {showMap && <GoogleMapsEmbed mapUrl={profile.mapUrl} />} {/* Pass the mapUrl prop */}
      </div>
    </div>
  );
}

export default ProfileCard;
