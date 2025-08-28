export const videos = import.meta.glob(
  '@/assets/videos/*.{mp4,webm}',
  { eager: true, query: '?url', import: 'default' }
);

export const posters = import.meta.glob(
  '@/assets/videos/poster-*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
);

export function getAsset(name) {
  const key = Object.keys(videos).find(k => k.endsWith(`/assets/videos/${name}`))
          ?? Object.keys(posters).find(k => k.endsWith(`/assets/videos/${name}`));
  return key ? (videos[key] ?? posters[key]) : undefined;
}

