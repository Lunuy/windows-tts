
import fs from "fs";
import path from "path";
import SpeakOptions from "./SpeakOptions";
import loadPSCommands from "./loadPSCommands";
import runCommands from "./runCommands";
import escapePS from "./escapePS";

let talkedOnce = false;



async function speak(text : string, speakOptions : SpeakOptions = {}) {
    if(!talkedOnce) {
        talkedOnce = true;
        await speak("");
    }

    const { rate, voice, volume } = {
        rate: 0,
        voice: undefined,
        volume: 100,
        ...speakOptions
    };

    
    const commands = await loadPSCommands(path.resolve(__dirname, "../ps/speak.ps1"));

    const result = await runCommands([
        `$text = "${escapePS(text)}";`,
        `$rate = ${rate};`,
        `$volume = ${volume};`,
        ...(voice ? [`$voice = "${escapePS(voice)}";`] : []),
        ...commands
    ]);

    const buffer = Buffer.from(result, "base64");

    return buffer;
}


export default speak;