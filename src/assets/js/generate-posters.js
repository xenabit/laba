import { readdir, writeFile, mkdir, unlink } from 'fs/promises';
import { createWriteStream, existsSync } from 'fs';
import { join, parse, dirname } from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

// Получаем текущую директорию
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '..');
const VIDEOS_DIR = join(ASSETS_DIR, 'videos');
const POSTERS_DIR = join(ASSETS_DIR, 'posters');
const THUMBNAIL_SIZE = 1280;
const QUALITY = 85;

// Функция для проверки существования ffmpeg на Windows
async function checkFFmpeg() {
  return new Promise((resolve) => {
    const test = spawn('ffmpeg', ['-version']);
    test.on('close', (code) => {
      if (code !== 0) {
        console.error('❌ FFmpeg not found!');
        console.log('📥 Download from: https://ffmpeg.org/download.html');
        console.log('🔧 Or install with chocolatey: choco install ffmpeg');
        resolve(false);
      } else {
        console.log('✅ FFmpeg found');
        resolve(true);
      }
    });
  });
}

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

async function getVideoFiles() {
  try {
    const files = await readdir(VIDEOS_DIR);
    const videoFiles = files.filter((file) => /\.(mp4|webm|mov|avi|mkv|MP4|WEBM)$/i.test(file));
    console.log(`📹 Found ${videoFiles.length} video files:`);
    videoFiles.forEach((f) => console.log(`   - ${f}`));
    return videoFiles;
  } catch (error) {
    console.error(`❌ Can't read videos directory: ${VIDEOS_DIR}`);
    console.error(`   Error: ${error.message}`);
    return [];
  }
}

async function extractFirstFrame(videoPath, outputPath) {
  return new Promise((resolve, reject) => {
    const ffmpeg = spawn('ffmpeg', ['-i', videoPath, '-ss', '0', '-vframes', '1', '-vf', `scale=${THUMBNAIL_SIZE}:-2`, '-q:v', '2', '-y', outputPath]);

    ffmpeg.on('close', (code) => {
      if (code === 0) resolve(outputPath);
      else reject(new Error(`FFmpeg error code ${code}`));
    });

    ffmpeg.on('error', reject);
  });
}

async function generatePosters() {
  console.log('\n🚀 Starting poster generation...\n');
  console.log(`📂 Videos folder: ${VIDEOS_DIR}`);
  console.log(`📂 Posters folder: ${POSTERS_DIR}\n`);

  if (!existsSync(VIDEOS_DIR)) {
    console.error(`❌ Videos folder not found: ${VIDEOS_DIR}`);
    console.log('💡 Creating videos folder...');
    await ensureDir(VIDEOS_DIR);
    console.log('📹 Please add video files to the folder and run again');
    return;
  }

  const hasFFmpeg = await checkFFmpeg();
  if (!hasFFmpeg) return;

  await ensureDir(POSTERS_DIR);

  const videos = await getVideoFiles();
  if (videos.length === 0) {
    console.log('⚠️  No video files found!');
    console.log(`💡 Add videos to: ${VIDEOS_DIR}`);
    return;
  }

  const results = [];

  for (let i = 0; i < videos.length; i++) {
    const videoFile = videos[i];
    const videoName = parse(videoFile).name;
    const videoPath = join(VIDEOS_DIR, videoFile);

    console.log(`\n🎬 [${i + 1}/${videos.length}] Processing: ${videoFile}`);

    const tempFrame = join(POSTERS_DIR, `temp-${Date.now()}-${i}.jpg`);

    try {
      await extractFirstFrame(videoPath, tempFrame);
      console.log(`  ✅ Frame extracted`);

      const posterWebp = join(POSTERS_DIR, `poster-${videoName}.webp`);
      const posterJpg = join(POSTERS_DIR, `poster-${videoName}.jpg`);

      const sharp = await import('sharp');
      await sharp.default(tempFrame).jpeg({ quality: QUALITY }).toFile(posterJpg);

      await sharp.default(tempFrame).webp({ quality: QUALITY }).toFile(posterWebp);

      console.log(`  ✅ Generated: poster-${videoName}.webp`);
      console.log(`  ✅ Generated: poster-${videoName}.jpg`);

      await unlink(tempFrame);

      results.push({
        video: videoFile,
        name: videoName,
        posterWebp: `poster-${videoName}.webp`,
        posterJpg: `poster-${videoName}.jpg`,
      });
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}`);
    }
  }

  console.log('\n✨ ========== GENERATION COMPLETE ==========');
  console.log(`📊 Generated ${results.length} posters`);
  console.log(`📁 Posters saved to: ${POSTERS_DIR}`);

  if (results.length > 0) {
    console.log('\n📋 Generated posters:');
    results.forEach((r) => {
      console.log(`   - ${r.posterWebp} (from ${r.video})`);
    });
  }

  return results;
}

console.log('='.repeat(50));
console.log('🎬 VIDEO POSTER GENERATOR');
console.log('='.repeat(50));

generatePosters().catch(console.error);
