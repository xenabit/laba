// ======================== ТРЕБУЕМЫЕ МОДУЛИ ========================
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execPromise = promisify(exec);

// ======================== КОНСТАНТЫ ========================
const MAX_DURATION = 20;          // максимум секунд
const SHORT_DURATION = 10;        // короткая версия при оптимизации
const MAX_SIZE_MB = 3;            // максимальный размер в МБ
const NORMAL_CRF = 23;            // нормальное качество
const COMPRESSED_CRF = 28;        // сильное сжатие
const CROP_FILTER = "crop=min(iw\\,ih):min(iw\\,ih)"; // центрированный квадрат

const OUTPUT_VIDEO_DIR = "converted video";
// ==========================================================

async function getAllVideos(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const videos = [];
  for (const entry of entries) {
    if (!entry.isDirectory() && entry.name.match(/\.mp4$/i)) {
      videos.push(path.join(dir, entry.name));
    }
  }
  return videos;
}

async function processVideo(inputPath) {
  const baseName = path.basename(inputPath, path.extname(inputPath));
  const mp4Path = path.join(OUTPUT_VIDEO_DIR, `${baseName}.mp4`);
  const webmPath = path.join(OUTPUT_VIDEO_DIR, `${baseName}.webm`);

  console.log(`\n🔄 Обрабатываем: ${path.basename(inputPath)}`);

  try {
    // 1. Первичная обработка: квадрат + обрезка до 20 сек
    console.log(`   → Создаём MP4 (до ${MAX_DURATION} сек)`);
    const initialCommand = `ffmpeg -y -i "${inputPath}" -vf "${CROP_FILTER}" -t ${MAX_DURATION} -c:v libx264 -preset medium -crf ${NORMAL_CRF} -c:a aac -b:a 128k "${mp4Path}"`;
    await execPromise(initialCommand);

    let stats = await fs.stat(mp4Path);
    let sizeMB = stats.size / (1024 * 1024);
    console.log(`   ✅ MP4 создан (${sizeMB.toFixed(2)} МБ)`);

    // 2. Если большой — обрезаем до 10 сек
    if (sizeMB > MAX_SIZE_MB) {
      console.log(`   ⚠️  > ${MAX_SIZE_MB} МБ → режем до ${SHORT_DURATION} сек`);
      const shortCommand = `ffmpeg -y -i "${inputPath}" -vf "${CROP_FILTER}" -t ${SHORT_DURATION} -c:v libx264 -preset medium -crf ${NORMAL_CRF} -c:a aac -b:a 128k "${mp4Path}"`;
      await execPromise(shortCommand);

      stats = await fs.stat(mp4Path);
      sizeMB = stats.size / (1024 * 1024);
      console.log(`   ✅ Короткий MP4 (${sizeMB.toFixed(2)} МБ)`);
    }

    // 3. Если всё равно большой — сжимаем
    if (sizeMB > MAX_SIZE_MB) {
      console.log(`   ⚠️  Всё ещё большой → сжимаем`);
      const compressCommand = `ffmpeg -y -i "${mp4Path}" -c:v libx264 -preset medium -crf ${COMPRESSED_CRF} -c:a aac -b:a 128k "${mp4Path}"`;
      await execPromise(compressCommand);

      stats = await fs.stat(mp4Path);
      sizeMB = stats.size / (1024 * 1024);
      console.log(`   ✅ Сжатый MP4 (${sizeMB.toFixed(2)} МБ)`);
    }

    // 4. Конвертируем в WebM
    console.log(`   → Создаём WebM`);
    const webmCommand = `ffmpeg -y -i "${mp4Path}" -c:v libvpx-vp9 -b:v 1M -c:a opus -b:a 128k "${webmPath}"`;
    await execPromise(webmCommand);
    console.log(`   ✅ WebM готов\n`);

  } catch (err) {
    console.error(`   ❌ Ошибка при обработке ${baseName}:`, err.message);
  }
}

async function main() {
  const currentDir = process.cwd();

  await fs.mkdir(path.join(currentDir, OUTPUT_VIDEO_DIR), { recursive: true });

  const videos = await getAllVideos(currentDir);

  console.log(`\n📂 Найдено видео: ${videos.length} шт.\n`);
  videos.forEach(v => console.log(`   • ${path.basename(v)}`));
  console.log('─'.repeat(60));

  if (videos.length === 0) {
    console.log('❌ В текущей папке нет .mp4 файлов!');
    return;
  }

  for (const video of videos) {
    await processVideo(video);
  }

  console.log('🎉 ВСЁ ГОТОВО!');
  console.log(`   MP4 + WebM сохранены в папку: ./${OUTPUT_VIDEO_DIR}/`);
}

main();