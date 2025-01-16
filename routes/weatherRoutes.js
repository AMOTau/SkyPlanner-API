const express = require('express');
const { getDaysForecast } = require('../controllers/weatherController');
const router = express.Router();

router.get('/forecast', getDaysForecast);

module.exports = router;