
import Shell from "node-powershell";

async function runCommands(commands : string[]) {
    const ps = new Shell({
        inputEncoding: "utf-8",
        outputEncoding: "utf-8"
    });

    for(const command of commands) {
        await ps.addCommand(command);
    }

    const result = (await ps.invoke()).trim();
    await ps.dispose();

    return result;
}

export default runCommands;