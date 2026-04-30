const { readdir, mkdir, unlink } = require("fs/promises");
const { existsSync } = require("fs");
const { join, parse } = require("path");
const { spawn } = require("child_process");

const CURRENT_DIR = __dirname;
const VIDEOS_DIR = CURRENT_DIR;
const POSTERS_DIR = join(CURRENT_DIR, "posters");

const THUMBNAIL_SIZE = 1280; // ширина постера
const QUALITY = 85; // качество (для jpg и webp)

// Проверка ffmpeg
async function checkFFmpeg() {
  return new Promise((resolve) => {
    const test = spawn("ffmpeg", ["-version"]);
    test.on("close", (code) => {
      if (code !== 0) {
        console.error("❌ FFmpeg не найден!");
        console.log("📥 Скачай с https://ffmpeg.org/download.html");
        resolve(false);
      } else {
        console.log("✅ FFmpeg найден");
        resolve(true);
      }
    });
  });
}

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
    console.log(`📁 Создана папка: ${dir}`);
  }
}

async function getVideoFiles() {
  const files = await readdir(VIDEOS_DIR);
  const videoFiles = files.filter((file) =>
    /\.(mp4|webm|mov|avi|mkv)$/i.test(file),
  );
  console.log(`📹 Найдено видео: ${videoFiles.length} шт.`);
  videoFiles.forEach((f) => console.log(`   - ${f}`));
  return videoFiles;
}

async function createPoster(videoPath, videoName) {
  const jpgPath = join(POSTERS_DIR, `${videoName}.jpg`);
  const webpPath = join(POSTERS_DIR, `${videoName}.webp`);

  console.log(`   → Создаём постеры для ${videoName}`);

  // 1. JPG (первый кадр)
  await new Promise((resolve, reject) => {
    const proc = spawn("ffmpeg", [
      "-i",
      videoPath,
      "-ss",
      "0",
      "-vframes",
      "1",
      "-vf",
      `scale=${THUMBNAIL_SIZE}:-2`,
      "-q:v",
      "2",
      "-y",
      jpgPath,
    ]);
    proc.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`FFmpeg JPG code ${code}`)),
    );
    proc.on("error", reject);
  });
  console.log(`     ✅ ${videoName}.jpg`);

  // 2. WebP (первый кадр)
  await new Promise((resolve, reject) => {
    const proc = spawn("ffmpeg", [
      "-i",
      videoPath,
      "-ss",
      "0",
      "-vframes",
      "1",
      "-vf",
      `scale=${THUMBNAIL_SIZE}:-2`,
      "-c:v",
      "libwebp",
      "-quality",
      QUALITY.toString(),
      "-y",
      webpPath,
    ]);
    proc.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`FFmpeg WebP code ${code}`)),
    );
    proc.on("error", reject);
  });
  console.log(`     ✅ ${videoName}.webp`);
}

async function generatePosters() {
  console.log("=".repeat(60));
  console.log("🎬 ГЕНЕРАТОР ПОСТЕРОВ (имя = имя видео)");
  console.log("=".repeat(60));

  const hasFFmpeg = await checkFFmpeg();
  if (!hasFFmpeg) return;

  await ensureDir(POSTERS_DIR);

  const videos = await getVideoFiles();
  if (videos.length === 0) {
    console.log("⚠️ Нет видео в папке!");
    return;
  }

  let success = 0;

  for (let i = 0; i < videos.length; i++) {
    const videoFile = videos[i];
    const videoName = parse(videoFile).name;
    const videoPath = join(VIDEOS_DIR, videoFile);

    console.log(`\n🎬 [${i + 1}/${videos.length}] ${videoFile}`);

    try {
      await createPoster(videoPath, videoName);
      success++;
    } catch (err) {
      console.error(`   ❌ Ошибка: ${err.message}`);
      // продолжаем с остальными файлами
    }
  }

  console.log("\n✨ ========== ГОТОВО ==========");
  console.log(`📊 Успешно создано: ${success} постеров`);
  console.log(`📁 Папка: ${POSTERS_DIR}`);
}

generatePosters().catch(console.error);
