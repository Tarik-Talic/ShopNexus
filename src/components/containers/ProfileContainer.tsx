import LoginButton from '../buttons/LoginButton';
import Profile from '../header-cards/Profile';
type Props = {};

export default function ProfileContainer({}: Props) {
  return (
    <span className="profile-container">
      <LoginButton />
      <Profile />
    </span>
  );
}
