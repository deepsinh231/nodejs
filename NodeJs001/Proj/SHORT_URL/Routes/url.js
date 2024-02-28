const express = require("express")
const {
    hedalgeneretNewShortURL,
    hedalredirectUrl,
    hedalanalyticsUrl
} = require("../Controller/url")

const router = express.Router();
router.route('/url').post(hedalgeneretNewShortURL)
router.route('/analytics/:shortId').get(hedalanalyticsUrl)
router.route('/:shortId').get(hedalredirectUrl)

module.exports = router;