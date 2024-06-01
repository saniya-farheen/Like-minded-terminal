import React, { useState, useEffect } from 'react';
import './bio.css';

export default function Myb() {
    const [formData, setFormData] = useState(() => {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {
          username: '',
          phone: '',
          skills: '',
          activities: '',
          achievements: '',
          interests: '',
          linkedIn: '',
          email: '',
          instagram: ''
        };
      });
      const [isEditable, setIsEditable] = useState(false);
    
      useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
      }, [formData]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, for now, let's just log the data
        console.log(formData);
        setIsEditable(false);
      };
    
      const handleEdit = () => {
        setIsEditable(true);
      };
    
      const handleClear = () => {
        setFormData({
          username: '',
          phone: '',
          skills: '',
          activities: '',
          achievements: '',
          interests: '',
          linkedIn: '',
          email: '',
          instagram: ''
        });
      };
    
      const handleDelete = () => {
        localStorage.removeItem('formData');
        setFormData({
          username: '',
          phone: '',
          skills: '',
          activities: '',
          achievements: '',
          interests: '',
          linkedIn: '',
          email: '',
          instagram: ''
        });
      };
    
      return (
        <div className="myb">
        <div className="container">
            
          <form onSubmit={handleSubmit}>
            <div className="button-group text-center mb-4">
              {isEditable ? (
                <>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button type="button" className="btn btn-secondary mr-2" onClick={handleClear}>Clear</button>
                  <button type="button" className="btn btn-info" onClick={() => setIsEditable(false)}>Cancel</button>
                </>
              ) : (
                <>
                  <button type="button" className="btn btn-danger mr-2" onClick={handleDelete}>Delete</button>
                  <button type="button" className="btn btn-info" onClick={handleEdit}>Edit</button>
                </>
              )}
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                readOnly={!isEditable}
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
                readOnly={!isEditable}
              />
            </div>
            
            <div className="form-group">
              <label>Skills</label>
              <textarea
                className="form-control expandable outline-box"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                readOnly={!isEditable}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Extra Curricular Activities</label>
              <textarea
                className="form-control expandable outline-box"
                name="activities"
                value={formData.activities}
                onChange={handleInputChange}
                readOnly={!isEditable}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Achievements</label>
              <textarea
                className="form-control expandable outline-box"
                name="achievements"
                value={formData.achievements}
                onChange={handleInputChange}
                readOnly={!isEditable}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Interests</label>
              <textarea
                className="form-control expandable outline-box"
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                readOnly={!isEditable}
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
                readOnly={!isEditable}
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
                readOnly={!isEditable}
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
                readOnly={!isEditable}
              />
            </div>
          </form>
        </div>
        </div>
      );
    }
    