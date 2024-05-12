//* https://creatomate.com/blog/how-to-use-ffmpeg-in-nodejs

const ffmpegStatic = require("ffmpeg-static");
const ffmpeg = require("fluent-ffmpeg");

// console.log("ffmpeg:", ffmpeg);
// console.log("ffmpegStatic:", ffmpegStatic);

// Tell fluent-ffmpeg where it can find FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

//* 1. Extracting audio from a video
// // Run FFmpeg
// ffmpeg()
//   // Input file
//   .input("video.mp4")
//   // Audio bit rate
//   .outputOptions("-ab", "192k")
//   // Output file
//   .saveToFile("audio.mp3")
//   // Log the percentage of work completed
//   .on("progress", (progress: { percent: number }) => {
//     if (progress.percent) {
//       console.log(`Processing: ${Math.floor(progress.percent)}% done`);
//     }
//   })
//   // The callback that is run when FFmpeg is finished
//   .on("end", () => {
//     console.log("FFmpeg has finished.");
//   })
//   // The callback that is run when FFmpeg encountered an error
//   .on("error", (error: Error) => {
//     console.error("error:", error);
//   });

//* 2. Changing the resolution of a video file
// Run FFmpeg
// ffmpeg()
//   // Input file
//   .input("video.mp4")
//   // Scale the video to 720 pixels in height. The -2 means FFmpeg should figure out the
//   // exact size of the other dimension. In other words, to make the video 720 pixels wide
//   // and make FFmpeg calculate its height, use scale=720:-2 instead.
//   .outputOptions("-vf", "scale=-2:720")
//   // Output file
//   .saveToFile("video2.mp4")
//   // Log the percentage of work completed
//   .on("progress", (progress: { percent: number }) => {
//     if (progress.percent) {
//       console.log(`Processing: ${Math.floor(progress.percent)}% done`);
//     }
//   })
//   // The callback that is run when FFmpeg is finished
//   .on("end", () => {
//     console.log("FFmpeg has finished.");
//   })
//   // The callback that is run when FFmpeg encountered an error
//   .on("error", (error: Error) => {
//     console.error("error:", error);
//   });

//* 3. Removing the audio stream from a video
// Run FFmpeg
// ffmpeg()
//   // Input file
//   .input("video.mp4")
//   // Tell FFmpeg to ignore the audio track
//   .noAudio()
//   // Copy the video without re-encoding
//   .outputOptions("-codec", "copy")
//   // Output file
//   .saveToFile("video3.mp4")
//   // Log the percentage of work completed
//   .on("progress", (progress: { percent: number }) => {
//     if (progress.percent) {
//       console.log(`Processing: ${Math.floor(progress.percent)}% done`);
//     }
//   })
//   // The callback that is run when FFmpeg is finished
//   .on("end", () => {
//     console.log("FFmpeg has finished.");
//   })
//   // The callback that is run when FFmpeg encountered an error
//   .on("error", (error: Error) => {
//     console.error("error:", error);
//   });

//* 4. Extracting images from a video
// Run FFmpeg
ffmpeg()
  // Input file
  .input("video.mp4")
  // Optional: Extract the frames at this frame rate
  .fps(1)
  // Output file format. Frames are stored as frame-001.png, frame-002.png, frame-003.png, etc.
  .saveToFile("images/frame-%03d.png")
  // Log the percentage of work completed
  .on("progress", (progress: { percent: number }) => {
    if (progress.percent) {
      console.log(`Processing: ${Math.floor(progress.percent)}% done`);
    }
  })
  // The callback that is run when FFmpeg is finished
  .on("end", () => {
    console.log("FFmpeg has finished.");
  })
  // The callback that is run when FFmpeg encountered an error
  .on("error", (error: Error) => {
    console.error("error:", error);
  });
