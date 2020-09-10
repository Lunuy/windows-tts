
import fs from "fs";

async function loadPSCommands(path : string) {
    const buffer = (await fs.promises.readFile(path));
    const string = buffer.toString();
    const commands = string.replace(/\r/g, "").split("\n").filter(command => command && !command.startsWith("#"));
    return commands;
}

export default loadPSCommands;