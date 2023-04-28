// index
const { spawn } = require("child_process"); // 子进程开始执行时,它就开始从一个流总将数据从子进程返回给Node
const videoPath = "./video/test.mp4";
const outPath = "./out";
const segmentTime = 60; // 视频时长

// 切割视频
const ffmpeg = spawn("ffmpeg", [
  "-i",
  videoPath,
  "-c",
  "copy",
  "-map",
  "0",
  "-f",
  "segment",
  "-segment_time",
  segmentTime,
  `${outPath}/out%03d.mp4`,
]);
console.log("ffmpeg", ffmpeg.on);
// ffmpeg.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// ffmpeg.stderr.on("data", (data) => {
//   console.log(data.toString());
// });
