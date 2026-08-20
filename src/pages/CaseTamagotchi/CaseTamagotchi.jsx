import '../../App.scss';

import CasesIntro from '../../components/CasesIntro/CasesIntro';
import Text from '../../components/Text/Text';
import Softwar from '../../components/Softwar/Softwar';
import Picture from '../../components/Picture/Picture';
import ReviewsSlider from '../../components/ReviewsSlider/ReviewsSlider';
import CasesItems from '../../components/CasesItems/CasesItems';
import CaseIframe from '../../components/CaseIframe/CaseIframe';
import CasesSliderFull from '../../components/CasesSliderFull/CasesSliderFull';
import CasesSliderScroll2 from '../../components/CasesSliderScroll2/CasesSliderScroll2';

import {
  contentCasesIntro,
  contentText,
  contentSoftwar,
  caseIframePreview,
  case_slider_full_content_1,
  case_slider_full_content_2,
  case_slider_full_content_3,
  case_slider_full_content_4,
  case_slider_full_content_5,
  case_slider_scroll_content,
} from './constantsCaseTamagotchi';

export default function CaseTamagotchi() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CaseIframe
        iframeProps={{
          src: 'https://embed.figma.com/board/9TbTy2tieMNVOZgKzqwa9q/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.-%D0%A1%D0%B0%D0%B9%D1%82-LABA.?node-id=7-2107&embed-host=share',
          sandbox: 'allow-same-origin allow-scripts',
          allowFullScreen: true,
        }}
        previewSrc={caseIframePreview}
        mobilePreviewSrc={caseIframePreview}
      />

      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <Text title={contentText[3].title} text={contentText[3].text} />
      <CasesSliderFull items={case_slider_full_content_3} />
      <Text title={contentText[4].title} text={contentText[4].text} />
      <CasesSliderFull items={case_slider_full_content_4} />
      <Text title={contentText[5].title} text={contentText[5].text} />
      <CasesSliderScroll2 items={case_slider_scroll_content} background="linear-gradient(121deg, #5673D8 0%, #9AB1E8 68.79%)" />
      <Text title={contentText[6].title} text={contentText[6].text} />
      <CasesSliderFull items={case_slider_full_content_5} />
      <Text title={contentText[7].title} text={contentText[7].text} />

      <CasesItems type={['game', 'mobile']} excludeId="tamagotchi" />
    </main>
  );
}
