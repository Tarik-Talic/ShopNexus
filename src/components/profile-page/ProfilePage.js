import React, { useState } from 'react';
import EditProfilePage from './EditProfilePage';
import './ProfilePage.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useFetchUser } from '../../hooks/useAuth0Api';
import { InfinitySpin } from 'react-loader-spinner';
import ProfileAvatar from './ProfileAvatar';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  const userID = user?.sub;
  const {
    data: userData,
    isLoading,
    refetch,
  } = useFetchUser(userID);
  const [avatarModule, setAvatarModule] = useState(false);

  const picture = userData?.data.user_metadata.picture
    ? userData?.data.user_metadata.picture
    : user?.picture;
  const [avatar, setAvatar] = useState(picture);

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
            {avatar ? (
              <img
                className="profilePage-picture"
                src={avatar}
                alt={user.name}
                onClick={() => setAvatarModule(true)}
              />
            ) : (
              <img
                className="profilePage-picture"
                src={
                  userData.data.user_metadata.picture
                    ? userData.data.user_metadata.picture
                    : user.picture
                }
                alt={user.name}
                onClick={() => setAvatarModule(true)}
              />
            )}
            <p>Change profile avatar.</p>
            {avatarModule && (
              <ProfileAvatar
                avatar={setAvatar}
                avatarModule={setAvatarModule}
                refetch={refetch}
              />
            )}
          </div>
          <div className="right-side-profile">
            <h2>Profile Info</h2>

            <EditProfilePage preloadData={userData.data} avatarData={avatar} />
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
