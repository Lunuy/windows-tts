import loadPSCommands from "./loadPSCommands";

import path from "path";
import runCommands from "./runCommands";

async function getInstalledVoices() {
    const commands = await loadPSCommands(path.resolve(__dirname, "../ps/getInstalledVoices.ps1"));
    const result = await runCommands(commands);
    const installedVoices = result.split("\n").map(voiceName => voiceName.trim());
    return installedVoices;
}

export default getInstalledVoices;