const ffmpeg = require("fluent-ffmpeg");

let videoNames = [];

for (let i = 1; i <= 65; i++) {
  videoNames.push(`./parts/${i}.ts`);
}
const outName = "out.ts";

let inputNamesFormatted = "concat:" + videoNames.join("|");

let cmd = ffmpeg()
  .on("start", function(cmdline) {
    console.log("Command line: " + cmdline);
  })
  .on("progress", function(progress) {
    console.info(`Processing ${outName}: ${progress.percent} % done`);
  })
  .input(inputNamesFormatted)
  .output(outName)
  .videoCodec("copy")
  .run();
