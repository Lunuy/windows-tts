
function escapePS(string : string) {
    return string
        .replace(/`/g, "``")
        .replace(/"/g, "`\"")
        .replace(/\n/g, "`n");
}

export default escapePS;