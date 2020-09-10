# windows-tts
Make tts wav buffer on windows.

# Example
```js
const { speak, getInstalledVoices } = require("windows-tts");
const fs = require("fs");
const path = require("path");

(async () => {
    console.log(await getInstalledVoices());
    const wavBuffer = await speak("Hello!");
    console.log(wavBuffer);
    await fs.promises.writeFile(path.resolve(__dirname, "./result.wav"), wavBuffer);
})();
```