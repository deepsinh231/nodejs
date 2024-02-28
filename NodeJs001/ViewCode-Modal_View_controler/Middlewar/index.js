const fs = require("fs");

function logReqes(filename) {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `\n ${Date.now()} :${req.ip} ${req.method}:${req.path}\n`,
            (err, date) => {
                next()
            }
        )
    }
}

module.exports = { logReqes }