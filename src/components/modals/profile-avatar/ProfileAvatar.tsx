import './ProfileAvatar.css';

type ProfileAvatarProps = {
  avatar: React.Dispatch<any>;
  avatarModule: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileAvatar = ({ avatar, avatarModule }: ProfileAvatarProps) => {
  const avatars = [
    'https://api.dicebear.com/7.x/bottts/svg?seed=Felix',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Ponchi',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Gerald',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Gloria',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Bella',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Dave',
  ];

  const getUser = (avatarImg: string) => {
    avatar(avatarImg);
    avatarModule(false);
  };
  const displayAvatars = avatars.map((item) => {
    return (
      <img
        key={item}
        className="avatar-choice"
        src={item}
        alt={item}
        onClick={() => getUser(item)}
      />
    );
  });

  return <div className="avatar-container">{displayAvatars}</div>;
};

export default ProfileAvatar;
