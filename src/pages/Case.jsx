import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSlider from '../components/CasesSlider/CasesSlider';
import Picture from '../components/Picture/Picture';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal';
import CasesItems from '../components/CasesItems/CasesItems';

// import video from '/src/assets/videos/about-list-3.mp4';
import picture from '/src/assets/images/cases-1.jpg';

const contentSoftwar = [
  { logo: logo_after_effect, title: 'Adobe After Effect' },
  { logo: logo_3dsmax, title: '3Ds Max' },
  { logo: logo_figma, title: 'Figma' },
  { logo: logo_blender, title: 'Blender' },
  { logo: logo_react, title: 'React' },
  { logo: logo_redux, title: 'Redux' },
  { logo: logo_unreal, title: 'Unreal Engine' },
];
import logo_figma from '/src/assets/images/softwar-figma.svg';
import logo_react from '/src/assets/images/softwar-react.svg';
import logo_nodejs from '/src/assets/images/softwar-nodejs.svg';
import logo_blender from '/src/assets/images/softwar-blender.svg';
import logo_redux from '/src/assets/images/softwar-redux.svg';
import logo_unreal from '/src/assets/images/softwar-unreal.svg';
import logo_after_effect from '/src/assets/images/softwar-after-effect.svg';
import logo_3dsmax from '/src/assets/images/softwar-3dsmax.svg';

const text = [
  {
    title: 'VR',
    text: 'Создать 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
  },
  {
    title: '3D визуализация',
    text: 'Создать 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
  },
  {
    title: 'Интерфейс',
    text: 'Создать 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
  },
];

export default function Case() {
  return (
    <main>
      <CasesIntro />
      <Text title={text[0].title} text={text[0].text} />
      <Softwar />
      <Text title={text[1].title} text={text[1].text} />
      {/* <CasesSlider /> */}
      <Text title={text[2].title} text={text[2].text} />
      <Picture src={picture} />
      <CaseIframe />
      <VideoHorizontal videoUrl="https://rutube.ru/play/embed/8cf88425e21edd7fe6f8ff77913b233c" />
      {/* <VideoHorizontal videoUrl={video} /> */}
      <ReviewsSlider />
      <CasesItems type="web" />
    </main>
  );
}
