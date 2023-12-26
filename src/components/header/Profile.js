import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from './ProfileMenu';
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [openProfile, setOpenProfile] = useState(false);

  return (
    isAuthenticated && (
      <div
        onMouseOver={() => {
          setOpenProfile(true);
        }}
        onMouseLeave={() => {
          setOpenProfile(false);
        }}
      >
        <span className="profile">
          <img className="profile-picture" src={user.picture} />
          <h4>{user.nickname}</h4>
        </span>
        {openProfile && <ProfileMenu />}
      </div>
    )
  );
};

export default Profile;
