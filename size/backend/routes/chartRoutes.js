const express = require('express');
const { getSizeChart } = require('../controllers/chartController');
const router = express.Router();

router.get('/', getSizeChart);

module.exports = router;
