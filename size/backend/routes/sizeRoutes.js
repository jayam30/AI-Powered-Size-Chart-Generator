const express = require('express');
const { recommendSize } = require('../controllers/sizeController');
const router = express.Router();

router.post('/recommend', recommendSize);

module.exports = router;
