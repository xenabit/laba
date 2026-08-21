import '../../App.scss';

import CasesIntro from '../../components/CasesIntro/CasesIntro';
import Text from '../../components/Text/Text';
import Softwar from '../../components/Softwar/Softwar';
import CasesSliderVideo from '../../components/CasesSliderVideo/CasesSliderVideo';
import CasesItems from '../../components/CasesItems/CasesItems';
import CaseIframe from '../../components/CaseIframe/CaseIframe';
import CasesSliderFull from '../../components/CasesSliderFull/CasesSliderFull';
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal';
import CasesCompareDrag from '../../components/CasesCompareDrag/CasesCompareDrag';
import CasesSliderScroll2 from '../../components/CasesSliderScroll2/CasesSliderScroll2';
import CaseVideo from '../../components/CaseVideo/CaseVideo';

import {
  contentCasesIntro,
  contentText,
  contentSoftwar,
  cases_slider_video_content,
  caseIframePreview,
  case_slider_full_content_1,
  case_slider_full_content_2,
  case_slider_full_content_3,
  case_slider_full_content_4,
  case_slider_full_content_5,
  case_compare_drag_pictures_1,
  case_slider_scroll_content,
  videoContent,
} from './constantsCaseColorPath';

export default function CaseColorPath() {
  return (
    <main>
      {/* <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <CasesSliderVideo items={cases_slider_video_content} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CaseIframe
        iframeProps={{
          src: 'https://embed.figma.com/board/9TbTy2tieMNVOZgKzqwa9q/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.-%D0%A1%D0%B0%D0%B9%D1%82-LABA.?node-id=2669-2107&embed-host=share',
          sandbox: 'allow-same-origin allow-scripts',
          allowFullScreen: true,
        }}
        previewSrc={caseIframePreview}
        mobilePreviewSrc={caseIframePreview}
      />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <Text title={contentText[3].title} text={contentText[3].text} />
      <CasesSliderFull items={case_slider_full_content_3} />
      <Text title={contentText[4].title} text={contentText[4].text} />
      <CasesCompareDrag items={case_compare_drag_pictures_1} />
      <Text title={contentText[5].title} text={contentText[5].text} />
      <CasesSliderFull items={case_slider_full_content_4} />
      <Text title={contentText[6].title} text={contentText[6].text} />
      <CasesSliderScroll2 items={case_slider_scroll_content} background="linear-gradient(294deg, #B8D45F -25.2%, #658305 105.29%)" />
      <Text title={contentText[7].title} text={contentText[7].text} />
      <CaseVideo videoContent={videoContent} />
      <CasesSliderFull items={case_slider_full_content_5} />
      <Text title={contentText[8].title} text={contentText[8].text} /> */}
      <CasesItems type={['game', 'mobile']} excludeId="case-colorpath" />
    </main>
  );
}
