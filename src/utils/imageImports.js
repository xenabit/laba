const imageModules = import.meta.glob('/src/assets/images/*.{jpg,png,webp,avif}', { eager: true });

export const getImageFormats = (imageImport) => {
  // Получаем имя файла без расширения и пути
  const imagePath = imageImport.split('/').pop(); // Например, 'case-intro-markssite.jpg' или 'reviews-slider-1.png'
  const extension = imagePath.match(/\.(jpg|png)$/i)?.[1]; // Определяем расширение: jpg или png
  const baseName = imagePath.replace(/\.(jpg|png)$/i, ''); // Например, 'case-intro-markssite' или 'reviews-slider-1'

  if (!extension) {
    console.warn(`Неподдерживаемое расширение файла: ${imagePath}`);
    return { jpg: imageImport, webp: imageImport, avif: imageImport }; // Fallback на исходный файл
  }

  // Формируем пути к другим форматам
  const webpPath = `/src/assets/images/${baseName}.webp`;
  const avifPath = `/src/assets/images/${baseName}.avif`;

  return {
    [extension.toLowerCase()]: imageImport, // jpg или png
    webp: imageModules[webpPath]?.default || imageImport, // Fallback на исходный файл
    avif: imageModules[avifPath]?.default || imageImport, // Fallback на исходный файл
  };
};
