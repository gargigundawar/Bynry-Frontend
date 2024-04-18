// ProfileForm.js
import React, { useState } from 'react';

function ProfileForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    imageUrl: '',
    name: '',
    description: '',
    mapUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      imageUrl: '',
      name: '',
      description: '',
      mapUrl: ''
    });
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <div>
        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Map URL:</label>
        <input type="text" name="mapUrl" value={formData.mapUrl} onChange={handleChange} required />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default ProfileForm;
