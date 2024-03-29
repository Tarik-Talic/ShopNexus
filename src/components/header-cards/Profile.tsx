import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from './ProfileMenu';
import { useFetchUser } from '../../services/useAuth0Api';

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const [openProfile, setOpenProfile] = useState(false);

  const userID = user?.sub;
  const { data: userData } = useFetchUser(userID);
  const userAvatar = userData?.data.user_metadata?.picture;
  const userNicknname = userData?.data.nickname;

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
          <img
            className="profile-picture"
            src={userAvatar ? userAvatar : user?.picture}
            alt={user?.name}
          />
          <h4>{userNicknname}</h4>
        </span>
        {openProfile && <ProfileMenu />}
      </div>
    )
  );
}
