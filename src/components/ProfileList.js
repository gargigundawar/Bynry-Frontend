import React, { useState } from 'react';
import '../css/ProfileList.css'; // Import CSS file
import ProfileCard from './ProfileCard';

function ProfileList() {
  // Dummy profile data
  const profiles = [
    { 
      id: 1, 
      name: 'Ved Gundawar', 
      description: 'Passionate software developer with a keen interest in machine learning and data science.', 
      photo: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
      address: 'Alandi', 
      lat: 18.68, 
      lng: 73.9 ,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.374469885122!2d73.75284932372271!3d18.602219316678024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97b37681c7b%3A0xa9aa324db3fefbef!2sWESTERN%20AVENU%2C%20Shankar%20Kalat%20Nagar%2C%20Wakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1713372945257!5m2!1sen!2sin`
    },
    { 
      id: 2, 
      name: 'Chirag Agrawal', 
      description: 'Tech enthusiast and aspiring entrepreneur. Loves building things that make a difference.',
      photo: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
      address: 'Sk Girls Hostel', 
      lat: 18.669, 
      lng: 73.8866,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.746024171035!2d73.8866!3d18.669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e1fa821229fb25e!2sMIT%20ACADEMY%20OF%20ENGINEERING%2C%20Kate%20Patil%20Nagar%2C%20Alandi%2C%20Maharashtra%20412105!5e0!3m2!1sen!2sin!4v1713351012397!5m2!1sen!2sin`
    },
    { 
      id: 3, 
      name: 'Pratiksha Motiwal', 
      description: 'Creative designer with a passion for simplicity and elegance in design. Enjoys exploring new artistic techniques.',
      photo: 'https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=',
      address: 'Some Address', 
      lat: 18.675, 
      lng: 73.893,
      mapUrl:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.1565633958285!2d79.01832987377232!3d20.252340613995308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd33de253374ed5%3A0x6356e497a3c7f56e!2sAnandwan%2CWarora!5e0!3m2!1sen!2sin!4v1713376751415!5m2!1sen!2sin`
    },
    { 
      id: 4, 
      name: 'Rohit Singh', 
      description: 'Adventurous explorer and nature lover. Always seeking new challenges and experiences.',
      photo: 'https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1712188800&semt=ais',
      address: 'Another Address', 
      lat: 18.671, 
      lng: 73.895,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.523000666943!2d73.80743928879944!3d18.455067162314446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295391e142047%3A0x47aac4f332b912bc!2sSiddhivinayak%20Society%2C%20Manaji%20Nagar%2C%20Narhe%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1713376901507!5m2!1sen!2sin`
    }
  ];

  const [openMapId, setOpenMapId] = useState(null); // State to track the ID of the profile whose map is open

  const handleToggleMap = (profileId) => {
    setOpenMapId(profileId === openMapId ? null : profileId); // Toggle the openMapId state
  };

  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} isOpenMap={profile.id === openMapId} onToggleMap={handleToggleMap} />
      ))}
    </div>
  );
}

export default ProfileList;
