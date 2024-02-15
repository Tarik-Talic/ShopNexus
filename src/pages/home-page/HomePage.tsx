import './HomePage.css';
import { HomePageImage, NexusRocket } from '../../assets';
import MainHeading from '../../components/headings/MainHeading';
import SubHeading from '../../components/headings/SubHeading';
import ImageContainer from '../../components/containers/ImageContainer';

function HomePage() {
  return (
    <div className="heroContainer">
      <MainHeading classname="welcome-text">Welcome to ShopNexus</MainHeading>
      <SubHeading classname="sub-welcome-text">
        Where Your Shopping Experience Takes Center Stage!
      </SubHeading>
      <ImageContainer classname="img-container">
        <img src={NexusRocket} />
        <img
          src={HomePageImage}
          alt="heroImage"
          className="heroContainer-img"
        />
        <img src={NexusRocket} />
      </ImageContainer>
    </div>
  );
}

export default HomePage;
