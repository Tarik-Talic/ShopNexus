import { useRef } from 'react';

import '../header/Header.css';
import { Logo } from '../../assets';
import { FiAlignCenter } from 'react-icons/fi';
import Navbar from '../../components/navbar/Navbar';
import ProfileContainer from '../../components/containers/ProfileContainer';
import HamButton from '../../components/buttons/HamButton';

function Header() {
  const navRef: any = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  return (
    <>
      <ul ref={navRef}>
        <img src={Logo} alt="LogoImage" className="mainLogo" />
        <Navbar />
        <ProfileContainer />
        <HamButton classname="hamBars" onClick={showNavBar}>
          <FiAlignCenter />
        </HamButton>
      </ul>
    </>
  );
}

export default Header;
