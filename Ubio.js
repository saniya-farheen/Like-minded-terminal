import React, { useState } from 'react';
import './bio.css';

export default function Ubio() {
  const [formData, setFormData] = useState({
    username: 'John',
    phone: '8431801007',
    skills: 'MERN stack,Machine learning',
    activities: 'coding, Football',
    achievements: 'state leve football ',
    interests: 'sports, coding',
    linkedIn: 'www.linkedin.com/johndoe',
    email: 'john@gmail.com',
    instagram: "www.instagram.com/john"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="myb">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Skills</label>
            <textarea
              className="form-control expandable outline-box"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Extra Curricular Activities</label>
            <textarea
              className="form-control expandable outline-box"
              name="activities"
              value={formData.activities}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Achievements</label>
            <textarea
              className="form-control expandable outline-box"
              name="achievements"
              value={formData.achievements}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Interests</label>
            <textarea
              className="form-control expandable outline-box"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>LinkedIn URL</label>
            <input
              type="text"
              className="form-control"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Instagram URL</label>
            <input
              type="text"
              className="form-control"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
            />
          </div>
         
        </form>
      </div>
    </div>
  );
}
