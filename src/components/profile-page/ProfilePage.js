import React, { useState } from 'react';
import EditProfilePage from './EditProfilePage';
import './ProfilePage.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useFetchUser } from '../../hooks/useAuth0Api';
import { InfinitySpin } from 'react-loader-spinner';

const ProfilePage = () => {
  const { user, isAuthenticated, getTokenSilently } = useAuth0();
  const userID = user?.sub;
  const { data: userData, isLoading } = useFetchUser(userID);

  // Loader
  if (isLoading)
    return (
      <div className="loader">
        <InfinitySpin width="200" color="#41b9fb" />
      </div>
    );

  return (
    isAuthenticated && (
      <div className="profilePage-container">
        <div className="profilePage-card">
          <div className="left-side-profile">
            <img
              className="profilePage-picture"
              src={user.picture}
              alt={user.name}
            />
          </div>
          <div className="right-side-profile">
            <h2>Profile Info</h2>

            <EditProfilePage preloadData={userData.data} />
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
