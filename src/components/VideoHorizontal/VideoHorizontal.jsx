import React, { useRef, useCallback, forwardRef } from 'react';
import styles from './VideoHorizontal.module.scss';
import PropTypes from 'prop-types';

const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent);

const VideoHorizontal = forwardRef(({ videoUrl }, ref) => {
  const videoRef = useRef(null);

  const getYouTubeId = useCallback((url) => {
    const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/);
    return m ? m[1] : null;
  }, []);

  const sendPlayerCommands = useCallback((iframe) => {
    try {
      iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'mute', args: [] }), '*');
      iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
    } catch (e) {
      console.warn('Player API error', e);
    }
  }, []);

  const renderVideoPlayer = useCallback(() => {
    if (videoUrl.url) {
      const isYouTube = /youtube\.com|youtu\.be/.test(videoUrl.url);
      const isRutube = /rutube\.ru/.test(videoUrl.url);

      if (isYouTube) {
        const id = getYouTubeId(videoUrl.url);
        if (!id) {
          console.warn('Invalid YouTube URL');
          return null;
        }
        const params = new URLSearchParams({
          controls: 0,
          enablejsapi: 1,
          playsinline: 1,
          mute: 1,
        });
        if (!isIOS) params.set('autoplay', 1);
        const src = `https://www.youtube.com/embed/${id}?${params.toString()}`;

        return (
          <iframe
            ref={ref}
            className={styles.VideoHorizontal__video}
            src={src}
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; webkit-playsinline"
            allowFullScreen
            loading="lazy"
            onLoad={() => {
              if (!isIOS) sendPlayerCommands(ref.current);
            }}
          />
        );
      }

      if (isRutube) {
        const urlObj = new URL(videoUrl.url);
        const embedPath = urlObj.pathname.replace('/video/', '/play/embed/');
        let src = `https://rutube.ru${embedPath}?controls=0&playsinline=1&muted=1`;
        if (!isIOS) src += '&autoplay=1';

        return (
          <iframe
            ref={ref}
            className={styles.VideoHorizontal__video}
            src={src}
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; webkit-playsinline"
            allowFullScreen
            loading="lazy"
            onLoad={() => {
              if (!isIOS) sendPlayerCommands(ref.current);
            }}
          />
        );
      }
    }

    if (videoUrl.mp4 || videoUrl.webm) {
      return (
        <video
          ref={ref}
          className={styles.VideoHorizontal__video}
          controls={false}
          autoPlay={!isIOS}
          muted
          loop
          playsInline
          preload="metadata"
          onError={(e) => console.error('Video failed to load:', e)}
        >
          {videoUrl.webm && <source src={videoUrl.webm} type="video/webm" />}
          {videoUrl.mp4 && <source src={videoUrl.mp4} type="video/mp4" />}
          <p>Ваш браузер не поддерживает видео.</p>
        </video>
      );
    }

    console.warn('No valid video source provided');
    return null;
  }, [videoUrl, getYouTubeId, sendPlayerCommands]);

  return (
    <section className={styles.VideoHorizontal}>
      <div className={styles.VideoHorizontal__container}>{renderVideoPlayer()}</div>
    </section>
  );
});

VideoHorizontal.propTypes = {
  videoUrl: PropTypes.shape({
    url: PropTypes.string,
    mp4: PropTypes.string,
    webm: PropTypes.string,
  }).isRequired,
};

export default React.memo(VideoHorizontal);
