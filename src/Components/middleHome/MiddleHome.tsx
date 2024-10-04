import AboutUs from '../aboutUs/AboutUs';
import WelcomeMessage from '../welcomeMessage/WelcomeMessage';
import Section from '../section/Section';
import Counter from '../counter/Counter';
import Ready from '../news/News';

function MiddleHome() {
  return (
    <>
      <Section/>
      <WelcomeMessage />
      <Counter/>
      <AboutUs />
      <Ready />
      
    </>
  );
}

export default MiddleHome;
