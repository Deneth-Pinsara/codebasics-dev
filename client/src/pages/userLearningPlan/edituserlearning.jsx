import React, { useState } from 'react';
import axios from 'axios';

const EditUserLearning = () => {
  const [formData, setFormData] = useState({
    ownerId: '',
    planName: '',
    description: '',
    skills: '',
    duration: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/learning-plan/create-learning-plan', formData);
      alert('Learning Plan Created Successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating learning plan:', error);
    }
  };

  return (
    <div>
      <h2>Create Learning Plan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="ownerId"
          placeholder="Owner ID"
          value={formData.ownerId}
          onChange={handleChange}
          required
        /><br />

        <input
          type="text"
          name="planName"
          placeholder="Plan Name"
          value={formData.planName}
          onChange={handleChange}
          required
        /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        /><br />

        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
        /><br />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 30 days)"
          value={formData.duration}
          onChange={handleChange}
          required
        /><br />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        /><br />

        <button type="submit">Create Plan</button>
      </form>
    </div>
  );
};

export default EditUserLearning;
