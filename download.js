const axios = require("axios");
const writeFile = require("util").promisify(require("fs").writeFile);

async function main(baseUrl, part) {
  let url = baseUrl.replace(/\-\d*\.ts/gm, `-${part}.ts`);
  let response = await axios.request({
    url,
    responseType: "arraybuffer"
  });
  writeFile(`./parts/${part}.ts`, response.data);
  return part;
}

module.exports = main;
