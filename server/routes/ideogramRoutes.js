const express = require('express');
const { generateImage } = require('../controllers/ideogramController');
const router = express.Router();

router.post('/ideogram', generateImage);

module.exports = router;
