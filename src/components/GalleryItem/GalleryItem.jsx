import { forwardRef, useCallback, useRef, useState, useEffect, memo, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './GalleryItem.module.scss';
import { useVideoBlob } from '../../utils/useVideoBlob';
import useIsMobile from '../../hooks/useIsMobile';

const isIOS = typeof navigator !== 'undefined' && /iP(hone|ad|od)/.test(navigator.userAgent);

const GalleryItem = forwardRef(function GalleryItem({ video, href, title, desc, hoverPlayable, preload, fallbackPoster }, ref) {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const videoEl = useRef(null);

  const supportsHover = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches, []);

  const autoPlay = !hoverPlayable;
  const effectivePreload = isIOS ? 'auto' : preload;

  const useMp4 = isIOS || isMobile;
  const mp4Src = useMp4 ? video?.mp4 : undefined;
  const webmSrc = !useMp4 ? video?.webm : undefined;

  const allowBlob = !isIOS && !isMobile;

  const [blobEnabled, setBlobEnabled] = useState(false);

  useEffect(() => {
    if (!allowBlob) return;
    const el = videoEl.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setBlobEnabled(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setBlobEnabled(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [allowBlob]);

  const mp4Blob = useVideoBlob(mp4Src, allowBlob && blobEnabled);
  const webmBlob = useVideoBlob(webmSrc, allowBlob && blobEnabled);

  const mp4 = allowBlob ? mp4Blob : mp4Src;
  const webm = allowBlob ? webmBlob : webmSrc;

  const onMouseEnter = useCallback(() => {
    if (!supportsHover || !hoverPlayable || !videoEl.current) return;
    videoEl.current.play().catch(() => {});
  }, [supportsHover, hoverPlayable]);

  const onMouseLeave = useCallback(() => {
    if (!supportsHover || !hoverPlayable || !videoEl.current) return;
    videoEl.current.pause();
  }, [supportsHover, hoverPlayable]);

  const onLoadedMetadata = useCallback(() => {
    if (hoverPlayable && videoEl.current) {
      videoEl.current.pause();
    }
  }, [hoverPlayable]);

  const onCardClick = useCallback(
    (e) => {
      if (supportsHover) return;
      if (!hoverPlayable) return;

      const v = videoEl.current;

      e.preventDefault();

      if (!v) {
        navigate(href, { state: { from: location } });
        return;
      }

      v.muted = true;
      v.playsInline = true;
      v.webkitPlaysInline = true;

      let navigated = false;
      const go = () => {
        if (navigated) return;
        navigated = true;
        navigate(href, { state: { from: location } });
      };

      const afterFirstFrame = () => {
        requestAnimationFrame(go);
      };

      const onFirstFrame = () => {
        v.removeEventListener('playing', onFirstFrame);
        v.removeEventListener('timeupdate', onFirstFrame);
        requestAnimationFrame(afterFirstFrame);
      };

      v.addEventListener('playing', onFirstFrame, { once: true });
      v.addEventListener('timeupdate', onFirstFrame, { once: true });

      try {
        const p = v.play();
        if (p && typeof p.then === 'function') {
          p.catch(() => requestAnimationFrame(go));
        } else {
          requestAnimationFrame(go);
        }
      } catch {
        requestAnimationFrame(go);
      }
    },
    [supportsHover, hoverPlayable, navigate, href, location]
  );

  useEffect(() => {
    if (!autoPlay || !videoEl.current) return;
    const v = videoEl.current;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener('loadeddata', tryPlay, { once: true });
    return () => v.removeEventListener('loadeddata', tryPlay);
  }, [autoPlay]);

  useEffect(() => {
    const v = videoEl.current;
    if (!v) return;

    if (hoverPlayable) {
      try {
        v.pause();
      } catch {}
      return;
    }

    const tryPlay = () => {
      v.play().catch(() => {});
    };

    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener('loadeddata', tryPlay, { once: true });
      return () => v.removeEventListener('loadeddata', tryPlay);
    }
  }, [hoverPlayable]);

  return (
    <div ref={ref} className={styles.GalleryItem__item}>
      <Link to={href} state={{ from: location }} onClick={onCardClick} onPointerDown={(e) => e.currentTarget.blur()}>
        <video
          ref={videoEl}
          data-preload
          {...(allowBlob ? { 'data-blob-managed': '1' } : {})}
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload={effectivePreload}
          poster={video?.poster || fallbackPoster}
          controls={false}
          disablePictureInPicture
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onLoadedMetadata={onLoadedMetadata}
        >
          {webm && !useMp4 && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
        <h2>
          <span>{desc}</span>
          <span>{title}</span>
        </h2>
      </Link>
    </div>
  );
});

function areEqual(prev, next) {
  return (
    prev.href === next.href &&
    prev.title === next.title &&
    prev.desc === next.desc &&
    prev.preload === next.preload &&
    prev.hoverPlayable === next.hoverPlayable &&
    prev.video?.webm === next.video?.webm &&
    prev.video?.mp4 === next.video?.mp4 &&
    prev.video?.poster === next.video?.poster &&
    prev.fallbackPoster === next.fallbackPoster
  );
}

export default memo(GalleryItem, areEqual);
