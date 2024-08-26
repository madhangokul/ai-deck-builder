const express = require('express');
const { sendGPTCompletion } = require('../controllers/gptController');
const router = express.Router();

router.post('/gpt', sendGPTCompletion);

module.exports = router;
