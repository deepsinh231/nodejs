const shortid = require("shortid")

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
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistry: {
                timestamp: Date.now(),
            }
        }
    })
    res.redirect(entry.redirectUrl)
}
async function hedalanalyticsUrl(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId })
    return res.json({
        TotaleClicl: result.visitHistry.length,
        analytics: result.visitHistry
    })
}
module.exports = {
    hedalgeneretNewShortURL,
    hedalanalyticsUrl,
    hedalredirectUrl
}