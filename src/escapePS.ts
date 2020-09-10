
function escapePS(string : string) {
    return string
        .replace(/`/g, "``")
        .replace(/"/g, "`\"");
}

export default escapePS;