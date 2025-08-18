import '../App.scss';
import AboutText from '../components/AboutText/AboutText';
import AboutCols from '../components/AboutCols/AboutCols';
import AboutDirection from '../components/AboutDirection/AboutDirection';
import Softwar from '../components/Softwar/Softwar';
import softwarLogos from '../constants/softwarLogos';

const contentSoftwar = [
  softwarLogos.unreal,
  softwarLogos.blender,
  softwarLogos.tree_d_max,
  softwarLogos.figma,
  softwarLogos.python,
  softwarLogos.nodejs,
  softwarLogos.flutter,
  softwarLogos.react,
  softwarLogos.after_effect,
  softwarLogos.adobe_illustrator,
  softwarLogos.adobe_photoshop,
];

function PrivacyPolicy() {
  return (
    <>
      <AboutText></AboutText>
      <Softwar items={contentSoftwar} />
      <AboutCols></AboutCols>
      <AboutDirection></AboutDirection>
    </>
  );
}

export default PrivacyPolicy;
