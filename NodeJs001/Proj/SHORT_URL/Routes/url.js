const express = require("express")
const { hedalgeneretNewShortURL, hedalredirectUrl } = require("../Controller/url")

const router = express.Router();
router.post('/', hedalgeneretNewShortURL)
router.get('/', hedalredirectUrl)

module.exports = router;