// src/Components/Pages/ProfilePage/ProfilePage.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const username = location.state?.username;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        const response = await fetch(`http://39.61.51.195:8007/account/profile/${username}`);
        const data = await response.json();
        setUserData(data);
      };

      fetchUserData();
    }
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h2>{userData.username}'s Profile</h2>
      <p>Email: {userData.email}</p>
      <p>Full Name: {userData.full_name}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Profile;
