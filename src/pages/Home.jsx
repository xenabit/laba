
import '../App.scss';
import Intro2 from '../components/Intro2/Intro2';
import ProjectsTile from '../components/ProjectsTile/ProjectsTile';
import Ticker from '../components/Ticker/Ticker';
import Counter from '../components/Counter/Counter';
import TextEffect from '../components/TextEffect/TextEffect';
import Gallery from '../components/Gallery/Gallery';
import AboutList from '../components/AboutList/AboutList';
import Partners from '../components/Partners/Partners';

export default function Home({ introRef, projectsTileRef, loadingStage }) {

  return (
    <main>
      <Intro2 introRef={introRef} />
      <ProjectsTile projectsTileRef={projectsTileRef} />
      <Ticker />
      <Counter loadingStage={loadingStage} />
      <TextEffect />
      <Gallery />
      <Ticker />
      <AboutList />
      <Partners />
    </main>
  );
}