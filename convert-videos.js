// import { promises as fs } from 'fs';
// import path from 'path';
// import { exec } from 'child_process';
// import { promisify } from 'util';

// // Промисифицируем exec для асинхронного выполнения
// const execPromise = promisify(exec);

// async function convertVideos() {
//   const inputDir = './src/assets/videos';
//   const outputDir = './src/assets/videos'; // Выходная папка та же, чтобы сохранить структуру

//   try {
//     // Рекурсивно собираем все файлы из входной папки
//     async function getAllFiles(dir) {
//       const entries = await fs.readdir(dir, { withFileTypes: true });
//       let files = [];
//       for (const entry of entries) {
//         const fullPath = path.join(dir, entry.name);
//         if (entry.isDirectory()) {
//           files = [...files, ...(await getAllFiles(fullPath))];
//         } else {
//           files.push(fullPath);
//         }
//       }
//       return files;
//     }

//     const files = await getAllFiles(inputDir);

//     // Обрабатываем только MP4 файлы
//     for (const file of files) {
//       if (file.match(/\.mp4$/i)) {
//         const relativePath = path.relative(inputDir, file);
//         const baseName = path.basename(file, path.extname(file));
//         const outputSubDir = path.join(outputDir, path.dirname(relativePath));
//         const webmPath = path.join(outputSubDir, `${baseName}.webm`);

//         // Создаём подпапку, если она не существует
//         await fs.mkdir(outputSubDir, { recursive: true });

//         // Конвертируем в WebM (VP9) с помощью ffmpeg
//         const ffmpegCommand = `ffmpeg -y -i "${file}" -c:v libvpx-vp9 -b:v 1M -c:a opus -b:a 128k "${webmPath}"`;
//         try {
//           await execPromise(ffmpegCommand);
//           console.log(`Created WebM: ${webmPath}`);
//         } catch (err) {
//           console.error(`Error converting ${file} to WebM:`, err);
//         }
//       }
//     }
//     console.log('All videos processed successfully!');
//   } catch (err) {
//     console.error('Error processing videos:', err);
//   }
// }

// convertVideos();
