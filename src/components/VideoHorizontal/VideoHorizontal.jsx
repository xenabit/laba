import React, { useEffect, useRef, useCallback } from 'react';
import styles from './VideoHorizontal.module.scss';

const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent);

function VideoHorizontal({ videoUrl }) {
  const videoRef = useRef(null);

  const getYouTubeId = useCallback((url) => {
    const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/);
    return m ? m[1] : null;
  }, []);

  const sendPlayerCommands = useCallback((iframe) => {
    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'mute', args: [] }),
        '*'
      );
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
    } catch (e) {
      console.warn('Player API error', e);
    }
  }, []);

  const renderVideoPlayer = useCallback(() => {
    if (!videoUrl) return null;
    const isYouTube = /youtube\.com|youtu\.be/.test(videoUrl);
    const isRutube = /rutube\.ru/.test(videoUrl);
    const isMP4 = /\.mp4$/.test(videoUrl);

    if (isYouTube) {
      const id = getYouTubeId(videoUrl);
      if (!id) return null;
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
          ref={videoRef}
          className={styles.VideoHorizontal__video}
          src={src}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; webkit-playsinline"
          allowFullScreen
          loading="lazy"
          onLoad={() => {
            if (!isIOS) sendPlayerCommands(videoRef.current);
          }}
        />
      );
    }

    if (isRutube) {
      const urlObj = new URL(videoUrl);
      const embedPath = urlObj.pathname.replace('/video/', '/play/embed/');
      let src = `https://rutube.ru${embedPath}?controls=0&playsinline=1&muted=1`;
      if (!isIOS) src += '&autoplay=1';

      return (
        <iframe
          ref={videoRef}
          className={styles.VideoHorizontal__video}
          src={src}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; webkit-playsinline"
          allowFullScreen
          loading="lazy"
          onLoad={() => {
            if (!isIOS) sendPlayerCommands(videoRef.current);
          }}
        />
      );
    }

    if (isMP4) {
      return (
        <video
          ref={videoRef}
          className={styles.VideoHorizontal__video}
          src={videoUrl}
          playsInline
          webkit-playsinline="true"
          muted
          loop
          preload="metadata"
          autoPlay={!isIOS}
          controls={false}
        />
      );
    }

    return null;
  }, [videoUrl, getYouTubeId, sendPlayerCommands]);

  return (
    <section className={styles.VideoHorizontal}>
      <div className={styles.VideoHorizontal__container}>
        {renderVideoPlayer()}
      </div>
    </section>
  );
}

export default React.memo(VideoHorizontal);
