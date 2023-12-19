import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from './ProfileMenu';
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [openProfile, isOpenProfile] = useState(false);
  console.log(user);

  return (
    isAuthenticated && (
      <>
        <span className="profile" onClick={() => isOpenProfile(!openProfile)}>
          <img className="profile-picture" src={user.picture} />
          <h4>{user.nickname}</h4>
        </span>
        {openProfile && <ProfileMenu />}
      </>
    )
  );
};

export default Profile;
