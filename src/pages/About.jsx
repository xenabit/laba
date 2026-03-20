import '../App.scss';
import AboutIntro from '../components/sections/AboutIntro/AboutIntro';
import AboutExpertise from '../components/sections/AboutExpertise/AboutExpertise';
import AboutAdvantages from '../components/sections/AboutAdvantages/AboutAdvantages';
import AboutDirection from '../components/sections/AboutDirection/AboutDirection';
import AboutStack from '../components/sections/AboutStack/AboutStack';
import Partners from '../components/Partners/Partners';

function PrivacyPolicy() {
  return (
    <>
      <AboutIntro />
      <AboutExpertise />
      <AboutStack />
      <AboutAdvantages />
      <AboutDirection />
      <Partners />
    </>
  );
}

export default PrivacyPolicy;
