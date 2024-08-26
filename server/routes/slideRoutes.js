const express = require('express');
const { generateSlideDeck } = require('../controllers/slideController'); // Controller handling the logic
const router = express.Router();

router.post('/slideGenerate', generateSlideDeck);

module.exports = router;
