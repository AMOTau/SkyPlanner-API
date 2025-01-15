const express = require('express');
const { getActivities, addActivity, addAllActivities } = require('../controllers/activitiesController');

const router = express.Router();

router.get('/', getActivities);
router.post('/', addActivity);
router.post('/all', addAllActivities);

module.exports = router;