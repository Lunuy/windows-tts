
const { speak, getInstalledVoices } = require("../dist/index");
const fs = require("fs");
const path = require("path");

(async () => {
    console.log(await getInstalledVoices());
    const wavBuffer = await speak("오류나고 지라리야!");
    console.log(wavBuffer);
    await fs.promises.writeFile(path.resolve(__dirname, "./result.wav"), wavBuffer);
})();