import { useParams } from 'react-router-dom';
import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSlider from '../components/CasesSlider/CasesSlider';
import Picture from '../components/Picture/Picture';
import MarksTour from '../components/MarksTour/MarksTour';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal';
import CasesItems from '../components/CasesItems/CasesItems';
import { projects } from '../constants/projects';
import '../App.scss';

// import video from '/src/assets/videos/about-list-3.mp4';
import picture from '/src/assets/images/cases-1.jpg';

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
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === Number(projectId));

  if (!project) {
    return <h2>Проект не найден</h2>;
  }


  return (
    <main>
      <CasesIntro />
      <Text title={text[0].title} text={text[0].text} />
      <Softwar someProp={project.type} />
      <Text title={text[1].title} text={text[1].text} />
      <CasesSlider />
      <Text title={text[2].title} text={text[2].text} />
      <Picture src={picture} />
      <MarksTour />
      <VideoHorizontal videoUrl="https://rutube.ru/play/embed/8cf88425e21edd7fe6f8ff77913b233c" />
      {/* <VideoHorizontal videoUrl={video} /> */}
      <ReviewsSlider />
      <CasesItems type="web" />
    </main>
  );
}
