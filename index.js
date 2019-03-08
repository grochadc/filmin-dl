const download = require("./download");

const baseUrl =
  "https://cdn.filmin.com/hls/3854225052001/2017/01/5293586903001/3854225052001_5293586903001_s-5.ts?videoId=4399737646001";
const parts = 65;

console.log("Downloading...");
for (let i = 1; i <= parts; i++) {
  download(baseUrl, i)
    .then(part => console.log(`Downloaded part ${part}`))
    .catch(({ response }) => console.error(response.status));
}
