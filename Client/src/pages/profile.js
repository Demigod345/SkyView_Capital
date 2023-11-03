
import '../stylesheets/profile.css';
import { useState } from 'react';


export default function profile() {
  return (
    <div >
      <h1>My Profile</h1>
      <div className="profile-item">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" />
      </div>
      <div className="profile-item">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="youremail@example.com" />
      </div>
      <div className="profile-item">
        <label htmlFor="password">Change Password</label>
        <input type="password" id="password" placeholder="New Password" />
      </div>
      <div className="profile-item">
        <button className="verify-email-button">Verify Email</button>
      </div>
      <div className="profile-item">
        <button className="logout-button">Log Out</button>
      </div>
    </div>
  );
}

