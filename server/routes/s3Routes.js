const express = require('express');
const { uploadToS3 } = require('../controllers/s3Controller');
const router = express.Router();

router.post('/s3/upload', uploadToS3);

module.exports = router;
