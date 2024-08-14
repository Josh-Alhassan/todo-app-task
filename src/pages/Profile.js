import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  const handleSave = () => {
    // Add save logic here
    alert("Profile saved!");
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
