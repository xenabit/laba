const files = import.meta.glob('@/assets/videos/poster-*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const posters = Object.entries(files)
  .sort((a, b) => {
    const na = Number(a[0].match(/poster-(\d+)/)?.[1] ?? 0);
    const nb = Number(b[0].match(/poster-(\d+)/)?.[1] ?? 0);
    return na - nb;
  })
  .map(([, url]) => url);

export default posters;
