const shortid  = require("shortid")

const URL = require("../models/url")
async function hedalgeneretNewShortURL(req, res) {
    const ShortID = shortid()
    const body = req.body;
    if (!body.url) return res.status(400).json({ erro: "url is required" })
    await URL.create({
        shortId: ShortID,
        redirectUrl: body.url,
        visitHistry: []
    })
    return res.json({ id: ShortID })
}
async function hedalredirectUrl(req, res) {
    const ShortID = shortid()
    const body = req.body;
    if (!body.url) return res.status(400).json({ erro: "url is required" })
    await URL.create({
        shortId: ShortID,
        redirectUrl: body.url,
        visitHistry: []
    })
    return res.json({ id: ShortID })
}
module.exports = {
    hedalgeneretNewShortURL,hedalredirectUrl
}